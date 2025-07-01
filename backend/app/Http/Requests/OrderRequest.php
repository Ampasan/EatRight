<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class OrderRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'order_items' => 'required|array|min:1',
            'order_items.*.food_id' => 'required|string',
            'order_items.*.quantity' => 'required|integer|min:1',
            'delivery_address.recipient_name' => 'required|string',
            'delivery_address.phone' => 'required|string',
            'delivery_address.address' => 'required|string',
            'delivery_address.city' => 'required|string',
            'delivery_address.postal_code' => 'required|string',
            'payment_method' => 'required|string|in:credit_card,bank_transfer,e_wallet,cod',
        ];
    }

    public function messages()
    {
        return [
            'order_items.required' => 'Item pesanan wajib diisi',
            'delivery_address.recipient_name.required' => 'Nama penerima wajib diisi',
            'payment_method.required' => 'Metode pembayaran wajib diisi',
        ];
    }
} 