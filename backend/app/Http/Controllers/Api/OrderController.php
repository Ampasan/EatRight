<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Order;
use App\Http\Requests\OrderRequest;

class OrderController extends Controller
{
    public function index(Request $request)
    {
        $user = auth('api')->user();
        $orders = Order::where('user_id', $user->_id)->get();
        return response()->json(['success' => true, 'orders' => $orders]);
    }

    public function store(OrderRequest $request)
    {
        $user = auth('api')->user();
        $data = $request->validated();
        $data['user_id'] = $user->_id;
        $order = Order::create($data);
        return response()->json(['success' => true, 'order' => $order], 201);
    }

    public function show($id)
    {
        $user = auth('api')->user();
        $order = Order::where('_id', $id)->where('user_id', $user->_id)->firstOrFail();
        return response()->json(['success' => true, 'order' => $order]);
    }

    // PATCH /orders/:id/cancel
    public function cancel($id)
    {
        $user = auth('api')->user();
        $order = Order::where('_id', $id)->where('user_id', $user->_id)->firstOrFail();
        $order->order_status = 'cancelled';
        $order->save();
        return response()->json(['success' => true, 'order' => $order]);
    }

    // GET /orders/:id/tracking
    public function tracking($id)
    {
        $user = auth('api')->user();
        $order = Order::where('_id', $id)->where('user_id', $user->_id)->firstOrFail();
        $tracking = $order->tracking ?? null;
        return response()->json(['success' => true, 'tracking' => $tracking]);
    }
}
