<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class FoodLogRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'food_id' => 'required|string',
            'consumption_date' => 'required|date',
            'meal_type' => 'required|string|in:sarapan,makan_siang,makan_malam,snack',
            'portion_size' => 'required|numeric|min:1',
            'actual_nutrition.calories' => 'required|numeric|min:0',
            'actual_nutrition.protein' => 'required|numeric|min:0',
            'actual_nutrition.carbs' => 'required|numeric|min:0',
            'actual_nutrition.fat' => 'required|numeric|min:0',
            'source' => 'required|string|in:manual,scan,recommendation',
            'scan_image_url' => 'nullable|url',
        ];
    }

    public function messages()
    {
        return [
            'food_id.required' => 'ID makanan wajib diisi',
            'consumption_date.required' => 'Tanggal konsumsi wajib diisi',
            'meal_type.required' => 'Tipe makan wajib diisi',
            'portion_size.required' => 'Porsi wajib diisi',
            'actual_nutrition.calories.required' => 'Kalori wajib diisi',
            'actual_nutrition.protein.required' => 'Protein wajib diisi',
            'actual_nutrition.carbs.required' => 'Karbohidrat wajib diisi',
            'actual_nutrition.fat.required' => 'Lemak wajib diisi',
            'source.required' => 'Sumber wajib diisi',
        ];
    }
} 