<?php

namespace App\Models;

use MongoDB\Laravel\Eloquent\Model;

class UserLevel extends Model
{
    protected $connection = 'mongodb';
    protected $collection = 'user_levels';

    protected $fillable = [
        'level_name', 'created_at'
    ];

    protected $casts = [
        'created_at' => 'datetime',
    ];
}
