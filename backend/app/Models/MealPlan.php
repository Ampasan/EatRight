<?php

namespace App\Models;

use MongoDB\Laravel\Eloquent\Model;

class MealPlan extends Model
{
    protected $connection = 'mongodb';
    protected $collection = 'meal_plans';

    protected $fillable = [
        'user_id', 'name', 'plan_description', 'start_date', 'end_date', 'daily_plans', 'status', 'ai_prompt', 'created_at', 'updated_at'
    ];

    protected $casts = [
        'daily_plans' => 'array',
        'start_date' => 'datetime',
        'end_date' => 'datetime',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];
}
