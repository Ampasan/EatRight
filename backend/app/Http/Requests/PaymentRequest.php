<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PaymentRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'order_id' => 'required|string',
            'payment_method' => 'required|string',
            'payment_gateway' => 'required|string',
            'amount' => 'required|numeric|min:0',
            'payment_proof' => 'nullable|url',
        ];
    }

    public function messages()
    {
        return [
            'order_id.required' => 'ID order wajib diisi',
            'payment_method.required' => 'Metode pembayaran wajib diisi',
            'payment_gateway.required' => 'Gateway pembayaran wajib diisi',
            'amount.required' => 'Jumlah pembayaran wajib diisi',
        ];
    }
} 