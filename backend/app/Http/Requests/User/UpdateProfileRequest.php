<?php

namespace App\Http\Requests\User;

use Illuminate\Foundation\Http\FormRequest;

class UpdateProfileRequest extends FormRequest
{
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
            'user_name' => [
                'required',
                'string',
            ],
            'user_email' => [
                'required',
                'string',
                'email',
            ],
            'profile_picture' => [
                'nullable',
                'string', // url
            ],
            'intro_name' => [
                'nullable',
                'string',
            ],
            'gender' => [
                'required',
                'in:pria,wanita,lainnya',
            ],
            'birth_date' => [
                'required',
                'date_format:d F Y', // contoh: 19 Desember 2005
            ],
            'height' => [
                'required',
                'numeric',
            ],
            'weight' => [
                'required',
                'numeric',
            ],
            'user_goal' => [
                'required',
                'in:diet,naikan_massa_otot,kontrol_diabetes,kontrol_kolesterol,vegan',
            ],
            'allergies' => [
                'nullable',
                'array',
            ],
            'allergies.*' => [
                'string',
                'in:telur,kacang,seafood,laktosa,kedelai,ikan',
            ],
        ];
    }

    public function messages(): array
    {
        return [
            'user_name.required' => 'Username wajib diisi.',
            'user_email.required' => 'Email wajib diisi.',
            'user_email.email' => 'Format email tidak valid.',
            'gender.required' => 'Jenis kelamin wajib diisi.',
            'gender.in' => 'Jenis kelamin harus salah satu dari: pria, wanita, lainnya.',
            'birth_date.required' => 'Tanggal lahir wajib diisi.',
            'birth_date.date_format' => 'Format tanggal lahir harus hari, bulan, tahun (misal: 19 Desember 2005).',
            'height.required' => 'Tinggi badan wajib diisi.',
            'height.numeric' => 'Tinggi badan harus berupa angka.',
            'weight.required' => 'Berat badan wajib diisi.',
            'weight.numeric' => 'Berat badan harus berupa angka.',
            'user_goal.required' => 'Tujuan wajib diisi.',
            'user_goal.in' => 'Tujuan tidak valid.',
            'allergies.array' => 'Alergi harus berupa array.',
            'allergies.*.in' => 'Alergi tidak valid.',
        ];
    }
}
