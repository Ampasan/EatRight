<?php

namespace App\Models;

use MongoDB\Laravel\Eloquent\Model;

class Cart extends Model
{
    protected $connection = 'mongodb';
    protected $collection = 'carts';

    protected $fillable = [
        'user_id', 'items', 'created_at', 'updated_at'
    ];

    protected $casts = [
        'items' => 'array',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];
}
