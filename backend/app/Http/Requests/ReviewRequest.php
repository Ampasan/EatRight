<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ReviewRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'food_id' => 'required|string',
            'rating' => 'required|integer|min:1|max:5',
            'review_text' => 'nullable|string',
        ];
    }

    public function messages()
    {
        return [
            'food_id.required' => 'ID makanan wajib diisi',
            'rating.required' => 'Rating wajib diisi',
            'rating.min' => 'Rating minimal 1',
            'rating.max' => 'Rating maksimal 5',
        ];
    }
} 