<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Order;

class AdminOrderController extends Controller
{
    public function index(Request $request)
    {
        $orders = Order::query();
        if ($request->has('order_status')) {
            $orders->where('order_status', $request->order_status);
        }
        if ($request->has('user_id')) {
            $orders->where('user_id', $request->user_id);
        }
        return response()->json(['success' => true, 'orders' => $orders->get()]);
    }

    public function show($id)
    {
        $order = Order::findOrFail($id);
        return response()->json(['success' => true, 'order' => $order]);
    }

    public function update(Request $request, $id)
    {
        $order = Order::findOrFail($id);
        $order->order_status = $request->input('order_status', $order->order_status);
        $order->save();
        return response()->json(['success' => true, 'order' => $order]);
    }
}
