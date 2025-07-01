<?php

namespace App\Models;

use Jenssegers\Mongodb\Eloquent\Model;

class Order extends Model
{
    protected $connection = 'mongodb';
    protected $collection = 'orders';

    protected $fillable = [
        'user_id', 'order_items', 'order_summary', 'delivery_address', 'payment_method', 'payment_status',
        'order_status', 'tracking_number', 'courier', 'estimated_delivery', 'delivered_at', 'created_at', 'updated_at'
    ];

    protected $casts = [
        'order_items' => 'array',
        'order_summary' => 'array',
        'delivery_address' => 'array',
        'estimated_delivery' => 'datetime',
        'delivered_at' => 'datetime',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];
}
