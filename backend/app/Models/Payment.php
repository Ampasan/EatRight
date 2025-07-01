<?php

namespace App\Models;

use Jenssegers\Mongodb\Eloquent\Model;

class Payment extends Model
{
    protected $connection = 'mongodb';
    protected $collection = 'payments';

    protected $fillable = [
        'order_id', 'payment_method', 'payment_gateway', 'transaction_id', 'amount', 'payment_status',
        'payment_proof', 'validated_by', 'paid_at', 'created_at', 'updated_at'
    ];

    protected $casts = [
        'amount' => 'float',
        'paid_at' => 'datetime',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];
}
