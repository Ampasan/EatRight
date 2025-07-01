<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Notification;
use App\Http\Requests\NotificationRequest;

class NotificationController extends Controller
{
    public function index(Request $request)
    {
        $user = auth('api')->user();
        $notifications = Notification::where('user_id', $user->_id)->get();
        return response()->json(['success' => true, 'notifications' => $notifications]);
    }

    public function destroy($id)
    {
        $user = auth('api')->user();
        $notification = Notification::where('_id', $id)->where('user_id', $user->_id)->firstOrFail();
        $notification->delete();
        return response()->json(['success' => true, 'message' => 'Notifikasi berhasil dihapus']);
    }

    // POST /notifications/schedule
    public function schedule(NotificationRequest $request)
    {
        $user = auth('api')->user();
        $data = $request->validated();
        $data['user_id'] = $user->_id;
        $notification = Notification::create($data);
        return response()->json(['success' => true, 'notification' => $notification], 201);
    }

    // PATCH /notifications/schedule/:id
    public function updateSchedule(NotificationRequest $request, $id)
    {
        $user = auth('api')->user();
        $notification = Notification::where('_id', $id)->where('user_id', $user->_id)->firstOrFail();
        $notification->update($request->validated());
        return response()->json(['success' => true, 'notification' => $notification]);
    }
}
