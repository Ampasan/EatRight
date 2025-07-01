<?php

namespace App\Models;

use Jenssegers\Mongodb\Eloquent\Model;

class OrderTracking extends Model
{
    protected $connection = 'mongodb';
    protected $collection = 'order_tracking';

    protected $fillable = [
        'order_id', 'courier', 'status', 'current_location', 'tracking_history', 'estimated_delivery', 'recipient_name', 'created_at', 'updated_at'
    ];

    protected $casts = [
        'tracking_history' => 'array',
        'estimated_delivery' => 'datetime',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];
}
