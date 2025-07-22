<?php

namespace App\Models;

use MongoDB\Laravel\Eloquent\Model;

class Notification extends Model
{
    protected $connection = 'mongodb';
    protected $collection = 'notifications';

    protected $fillable = [
        'user_id', 'title', 'message', 'type', 'scheduled_at', 'sent_at', 'created_at'
    ];

    protected $casts = [
        'scheduled_at' => 'datetime',
        'sent_at' => 'datetime',
        'created_at' => 'datetime',
    ];
}
