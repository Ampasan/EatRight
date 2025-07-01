<?php

namespace App\Models;

use Jenssegers\Mongodb\Eloquent\Model;

class Food extends Model
{
    protected $connection = 'mongodb';
    protected $collection = 'foods';

    protected $fillable = [
        'food_name', 'food_description', 'food_image', 'food_category', 'nutrition', 'ingredients',
        'preparation_time', 'difficulty_level', 'recipe', 'stock', 'min_order', 'is_available',
        'discount_percentage', 'original_price', 'final_price', 'weight', 'total_sold', 'view_count',
        'created_by', 'created_at', 'updated_at'
    ];

    protected $casts = [
        'nutrition' => 'array',
        'ingredients' => 'array',
        'recipe' => 'array',
        'is_available' => 'boolean',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];
}
