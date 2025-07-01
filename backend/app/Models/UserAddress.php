<?php

namespace App\Models;

use Jenssegers\Mongodb\Eloquent\Model;

class UserAddress extends Model
{
    protected $connection = 'mongodb';
    protected $collection = 'user_addresses';

    protected $fillable = [
        'user_id', 'recipient_name', 'phone', 'address', 'city', 'postal_code', 'created_at', 'updated_at'
    ];

    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];
}
