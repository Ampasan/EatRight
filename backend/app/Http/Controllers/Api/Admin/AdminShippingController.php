<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\OrderTracking;

class AdminShippingController extends Controller
{
    public function index(Request $request)
    {
        $shipping = OrderTracking::all();
        return response()->json(['success' => true, 'shipping' => $shipping]);
    }

    public function show($orderId)
    {
        $shipping = OrderTracking::where('order_id', $orderId)->firstOrFail();
        return response()->json(['success' => true, 'shipping' => $shipping]);
    }

    public function update(Request $request, $orderId)
    {
        $shipping = OrderTracking::where('order_id', $orderId)->firstOrFail();
        $shipping->update($request->only(['status', 'current_location', 'estimated_delivery']));
        return response()->json(['success' => true, 'shipping' => $shipping]);
    }

    // POST /admin/shipping/:orderId/ship
    public function ship(Request $request, $orderId)
    {
        $shipping = OrderTracking::where('order_id', $orderId)->firstOrFail();
        $shipping->tracking_history[] = [
            'status' => $request->input('status'),
            'location' => $request->input('location'),
            'timestamp' => now(),
            'description' => $request->input('description'),
        ];
        $shipping->save();
        return response()->json(['success' => true, 'shipping' => $shipping]);
    }
}
