<?php

namespace App\Models;

use MongoDB\Laravel\Eloquent\Model;

class FoodReview extends Model
{
    protected $connection = 'mongodb';
    protected $collection = 'food_reviews';

    protected $fillable = [
        'user_id', 'food_id', 'rating', 'review_text', 'created_at'
    ];

    protected $casts = [
        'created_at' => 'datetime',
    ];
}
