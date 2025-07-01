<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CartRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'food_id' => 'required|string',
            'quantity' => 'required|integer|min:1',
        ];
    }

    public function messages()
    {
        return [
            'food_id.required' => 'ID makanan wajib diisi',
            'quantity.required' => 'Jumlah wajib diisi',
            'quantity.min' => 'Jumlah minimal 1',
        ];
    }
} 