<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\UserOtp;
use Illuminate\Support\Facades\Hash;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Support\Facades\Validator;
use App\Http\Requests\Auth\RegisterRequest;
use App\Http\Requests\Auth\LoginRequest;
use App\Http\Requests\Auth\ChangePasswordRequest;
use Carbon\Carbon;

class AuthController extends Controller
{
    // POST /auth/register
    public function register(RegisterRequest $request)
    {
        $data = $request->validated();
        $data['user_password'] = Hash::make($data['user_password']);
        $user = User::create($data);
        return response()->json(['success' => true, 'user' => $user], 201);
    }

    // POST /auth/login
    public function login(LoginRequest $request)
    {
        $credentials = $request->only(['user_email', 'user_password']);
        if (!$token = JWTAuth::attempt(['user_email' => $credentials['user_email'], 'password' => $credentials['user_password']])) {
            return response()->json(['success' => false, 'message' => 'Email atau password salah'], 401);
        }
        $user = auth('api')->user();
        return response()->json(['success' => true, 'token' => $token, 'user' => $user]);
    }

    // POST /auth/logout
    public function logout(Request $request)
    {
        auth('api')->logout();
        return response()->json(['success' => true, 'message' => 'Logout berhasil']);
    }

    // PATCH /auth/change-password
    public function changePassword(ChangePasswordRequest $request)
    {
        $user = auth('api')->user();
        $user->user_password = Hash::make($request->input('new_password'));
        $user->save();
        return response()->json(['success' => true, 'message' => 'Password berhasil diubah']);
    }

    // POST /auth/send-otp
    public function sendOtp(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'user_email' => 'required|email',
            'otp_type' => 'required|in:register,reset_password',
        ]);
        if ($validator->fails()) {
            return response()->json(['success' => false, 'errors' => $validator->errors()], 422);
        }
        $otp = rand(100000, 999999);
        $expires = Carbon::now()->addMinutes(5);
        UserOtp::create([
            'user_email' => $request->user_email,
            'otp_code' => $otp,
            'otp_expires_at' => $expires,
            'otp_type' => $request->otp_type,
            'otp_attempts' => 0,
            'created_at' => now(),
        ]);
        // Kirim OTP ke email (implementasi email di tahap selanjutnya)
        return response()->json(['success' => true, 'message' => 'OTP dikirim', 'otp' => $otp]);
    }

    // POST /auth/verify-otp
    public function verifyOtp(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'user_email' => 'required|email',
            'otp_code' => 'required|string',
            'otp_type' => 'required|in:register,reset_password',
        ]);
        if ($validator->fails()) {
            return response()->json(['success' => false, 'errors' => $validator->errors()], 422);
        }
        $otp = UserOtp::where('user_email', $request->user_email)
            ->where('otp_code', $request->otp_code)
            ->where('otp_type', $request->otp_type)
            ->where('otp_expires_at', '>', now())
            ->first();
        if (!$otp) {
            return response()->json(['success' => false, 'message' => 'OTP tidak valid atau sudah expired'], 400);
        }
        $otp->verified_at = now();
        $otp->save();
        return response()->json(['success' => true, 'message' => 'OTP valid']);
    }

    // POST /auth/resend-otp
    public function resendOtp(Request $request)
    {
        // Mirip sendOtp, bisa dioptimasi jika perlu
        return $this->sendOtp($request);
    }

    // POST /auth/forgot-password
    public function forgotPassword(Request $request)
    {
        // Kirim OTP untuk reset password
        $request->merge(['otp_type' => 'reset_password']);
        return $this->sendOtp($request);
    }

    // POST /auth/reset-password
    public function resetPassword(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'user_email' => 'required|email',
            'otp_code' => 'required|string',
            'new_password' => [
                'required', 'string', 'min:8',
                'regex:/[a-z]/', 'regex:/[A-Z]/', 'regex:/[0-9]/'
            ],
        ]);
        if ($validator->fails()) {
            return response()->json(['success' => false, 'errors' => $validator->errors()], 422);
        }
        $otp = UserOtp::where('user_email', $request->user_email)
            ->where('otp_code', $request->otp_code)
            ->where('otp_type', 'reset_password')
            ->where('otp_expires_at', '>', now())
            ->first();
        if (!$otp) {
            return response()->json(['success' => false, 'message' => 'OTP tidak valid atau sudah expired'], 400);
        }
        $user = User::where('user_email', $request->user_email)->first();
        if (!$user) {
            return response()->json(['success' => false, 'message' => 'User tidak ditemukan'], 404);
        }
        $user->user_password = Hash::make($request->new_password);
        $user->save();
        $otp->verified_at = now();
        $otp->save();
        return response()->json(['success' => true, 'message' => 'Password berhasil direset']);
    }

    // Social login (Google, Facebook, Twitter) bisa diimplementasikan di tahap selanjutnya
}
