<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class NotificationRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'user_id' => 'required|string',
            'title' => 'required|string|max:100',
            'message' => 'required|string',
            'type' => 'required|string|in:meal_reminder,consumption exceeds calorie limit.,health_tip,promotion',
            'scheduled_at' => 'nullable|date',
        ];
    }

    public function messages()
    {
        return [
            'user_id.required' => 'ID user wajib diisi',
            'title.required' => 'Judul notifikasi wajib diisi',
            'message.required' => 'Pesan notifikasi wajib diisi',
            'type.required' => 'Tipe notifikasi wajib diisi',
        ];
    }
} 