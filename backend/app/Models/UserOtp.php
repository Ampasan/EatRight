<?php

namespace App\Models;

use Jenssegers\Mongodb\Eloquent\Model;

class UserOtp extends Model
{
    protected $connection = 'mongodb';
    protected $collection = 'user_otps';

    protected $fillable = [
        'user_id', 'user_email', 'otp_code', 'otp_expires_at', 'otp_type', 'otp_attempts', 'created_at', 'verified_at'
    ];

    protected $casts = [
        'otp_expires_at' => 'datetime',
        'created_at' => 'datetime',
        'verified_at' => 'datetime',
    ];
}
