<?php

namespace App\Http\Requests\User;

use Illuminate\Foundation\Http\FormRequest;

class AddressRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'recipient_name' => 'required|string|max:100',
            'phone' => 'required|string|max:20',
            'address' => 'required|string|max:255',
            'city' => 'required|string|max:50',
            'postal_code' => 'required|string|max:10',
        ];
    }

    public function messages()
    {
        return [
            'recipient_name.required' => 'Nama penerima wajib diisi',
            'phone.required' => 'Nomor telepon wajib diisi',
            'address.required' => 'Alamat wajib diisi',
            'city.required' => 'Kota wajib diisi',
            'postal_code.required' => 'Kode pos wajib diisi',
        ];
    }
} 