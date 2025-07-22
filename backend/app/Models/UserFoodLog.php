<?php

namespace App\Models;

use MongoDB\Laravel\Eloquent\Model;

class UserFoodLog extends Model
{
    protected $connection = 'mongodb';
    protected $collection = 'user_food_logs';

    protected $fillable = [
        'user_id', 'food_id', 'consumption_date', 'meal_type', 'portion_size', 'actual_nutrition',
        'source', 'scan_image_url', 'created_at'
    ];

    protected $casts = [
        'actual_nutrition' => 'array',
        'consumption_date' => 'datetime',
        'created_at' => 'datetime',
    ];
}
