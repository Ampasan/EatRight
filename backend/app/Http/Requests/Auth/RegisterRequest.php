<?php

namespace App\Http\Requests\Auth;

use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'level_id' => [
                'required',
                'integer'
            ],
            'user_name' => [
                'required',
                'string',
            ],
            'user_email' => [
                'required',
                'string',
                'email',
            ],
            'user_password' => [
                'required',
                'string',
                'min:8',
                'regex:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/', // huruf kecil, kapital, angka
            ],
            'intro_name' => [
                'nullable',
                'string',
            ],
            'gender' => [
                'nullable',
                'string',
            ],
            'birth_date' => [
                'nullable',
                'date',
            ],
            'height' => [
                'nullable',
                'numeric',
            ],
            'weight' => [
                'nullable',
                'numeric',
            ],
            'user_goal' => [
                'nullable',
                'string',
            ],
            'allergies' => [
                'nullable',
            ],
        ];
    }

    public function messages(): array
    {
        return [
            'user_name.required' => 'Username wajib diisi.',
            'user_email.required' => 'Email wajib diisi.',
            'user_email.email' => 'Format email tidak valid.',
            'user_password.required' => 'Password wajib diisi.',
            'user_password.min' => 'Password minimal 8 karakter.',
            'user_password.regex' => 'Password harus mengandung huruf kecil, huruf kapital, dan angka.',
        ];
    }
}
