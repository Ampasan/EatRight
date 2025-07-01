<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Payment;
use App\Http\Requests\PaymentRequest;

class PaymentController extends Controller
{
    public function index(Request $request)
    {
        $user = auth('api')->user();
        $payments = Payment::where('user_id', $user->_id)->get();
        return response()->json(['success' => true, 'payments' => $payments]);
    }

    public function store(PaymentRequest $request)
    {
        $user = auth('api')->user();
        $data = $request->validated();
        $data['user_id'] = $user->_id;
        $payment = Payment::create($data);
        return response()->json(['success' => true, 'payment' => $payment], 201);
    }

    public function show($id)
    {
        $user = auth('api')->user();
        $payment = Payment::where('_id', $id)->where('user_id', $user->_id)->firstOrFail();
        return response()->json(['success' => true, 'payment' => $payment]);
    }
}
