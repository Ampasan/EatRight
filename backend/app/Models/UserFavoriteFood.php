<?php

namespace App\Models;

use Jenssegers\Mongodb\Eloquent\Model;

class UserFavoriteFood extends Model
{
    protected $connection = 'mongodb';
    protected $collection = 'user_favorite_foods';

    protected $fillable = [
        'user_id', 'food_id', 'added_at'
    ];

    protected $casts = [
        'added_at' => 'datetime',
    ];
}
