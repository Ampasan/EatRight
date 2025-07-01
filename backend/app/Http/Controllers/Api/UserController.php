<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Http\Requests\User\UpdateProfileRequest;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    // GET /users/profile
    public function profile(Request $request)
    {
        $user = auth('api')->user();
        return response()->json(['success' => true, 'user' => $user]);
    }

    // PATCH /users/profile
    public function update(UpdateProfileRequest $request)
    {
        $user = auth('api')->user();
        $data = $request->validated();
        if (isset($data['user_password'])) {
            $data['user_password'] = Hash::make($data['user_password']);
        }
        $user->update($data);
        return response()->json(['success' => true, 'user' => $user]);
    }

    // POST /users/profile/personal-info
    public function setPersonalInfo(Request $request)
    {
        $user = auth('api')->user();
        $data = $request->only(['user_goal', 'user_name', 'gender', 'birth_date', 'height', 'weight', 'allergies']);
        $user->update($data);
        return response()->json(['success' => true, 'user' => $user]);
    }

    // DELETE /users/account
    public function deleteAccount(Request $request)
    {
        $user = auth('api')->user();
        $user->delete();
        return response()->json(['success' => true, 'message' => 'Akun berhasil dihapus']);
    }
}
