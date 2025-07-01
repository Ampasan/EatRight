<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Payment;

class AdminPaymentController extends Controller
{
    public function index(Request $request)
    {
        $payments = Payment::query();
        if ($request->has('payment_status')) {
            $payments->where('payment_status', $request->payment_status);
        }
        return response()->json(['success' => true, 'payments' => $payments->get()]);
    }

    public function show($id)
    {
        $payment = Payment::findOrFail($id);
        return response()->json(['success' => true, 'payment' => $payment]);
    }

    public function update(Request $request, $id)
    {
        $payment = Payment::findOrFail($id);
        $payment->payment_status = $request->input('payment_status', $payment->payment_status);
        $payment->validated_by = auth('api')->id();
        $payment->save();
        return response()->json(['success' => true, 'payment' => $payment]);
    }

    // GET /admin/payments/pending
    public function pending(Request $request)
    {
        $payments = Payment::where('payment_status', 'pending')->get();
        return response()->json(['success' => true, 'payments' => $payments]);
    }
}
