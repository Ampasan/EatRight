<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class MealPlanRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'name' => 'required|string|max:100',
            'plan_description' => 'nullable|string',
            'start_date' => 'required|date',
            'end_date' => 'required|date|after_or_equal:start_date',
            'daily_plans' => 'required|array|min:1',
            'daily_plans.*.day' => 'required|integer|min:1|max:7',
            'daily_plans.*.plan_date' => 'required|date',
            'daily_plans.*.meals' => 'required|array|min:1',
            'daily_plans.*.meals.*.meal_type' => 'required|string|in:sarapan,makan_siang,makan_malam,snack',
            'daily_plans.*.meals.*.food_id' => 'required|string',
            'daily_plans.*.meals.*.portion_size' => 'required|numeric|min:1',
            'daily_plans.*.meals.*.planned_time' => 'required|string',
            'daily_plans.*.daily_target.calories' => 'required|numeric|min:0',
            'daily_plans.*.daily_target.protein' => 'required|numeric|min:0',
            'daily_plans.*.daily_target.carbs' => 'required|numeric|min:0',
            'daily_plans.*.daily_target.fat' => 'required|numeric|min:0',
            'status' => 'required|string|in:active,completed,paused',
            'ai_prompt' => 'nullable|string',
        ];
    }

    public function messages()
    {
        return [
            'name.required' => 'Nama rencana makan wajib diisi',
            'start_date.required' => 'Tanggal mulai wajib diisi',
            'end_date.required' => 'Tanggal akhir wajib diisi',
            'daily_plans.required' => 'Rencana harian wajib diisi',
            'status.required' => 'Status wajib diisi',
        ];
    }
} 