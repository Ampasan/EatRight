<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;

class AdminUserController extends Controller
{
    public function index(Request $request)
    {
        $users = User::query();
        if ($request->has('level_id')) {
            $users->where('level_id', $request->level_id);
        }
        if ($request->has('user_email')) {
            $users->where('user_email', 'like', "%{$request->user_email}%");
        }
        return response()->json(['success' => true, 'users' => $users->get()]);
    }

    public function show($id)
    {
        $user = User::findOrFail($id);
        return response()->json(['success' => true, 'user' => $user]);
    }

    public function update(Request $request, $id)
    {
        $user = User::findOrFail($id);
        $user->update($request->only(['user_name', 'user_email', 'level_id', 'profile_picture', 'intro_name', 'gender', 'birth_date', 'height', 'weight', 'user_goal', 'allergies']));
        return response()->json(['success' => true, 'user' => $user]);
    }

    public function destroy($id)
    {
        $user = User::findOrFail($id);
        $user->delete();
        return response()->json(['success' => true, 'message' => 'User berhasil dihapus']);
    }

    // GET /admin/users/:id/orders
    public function orders($id)
    {
        $user = User::findOrFail($id);
        $orders = $user->orders ?? [];
        return response()->json(['success' => true, 'orders' => $orders]);
    }

    // GET /admin/users/:id/food-logs
    public function foodLogs($id)
    {
        $user = User::findOrFail($id);
        $logs = $user->food_logs ?? [];
        return response()->json(['success' => true, 'food_logs' => $logs]);
    }

    // GET /admin/users/:id/activities
    public function activities($id)
    {
        // Implementasi log aktivitas user jika ada
        return response()->json(['success' => true, 'activities' => []]);
    }
}
