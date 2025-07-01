<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class FavoriteFoodRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'food_id' => 'required|string',
        ];
    }

    public function messages()
    {
        return [
            'food_id.required' => 'ID makanan wajib diisi',
        ];
    }
} 