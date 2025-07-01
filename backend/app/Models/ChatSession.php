<?php

namespace App\Models;

use Jenssegers\Mongodb\Eloquent\Model;

class ChatSession extends Model
{
    protected $connection = 'mongodb';
    protected $collection = 'chat_sessions';

    protected $fillable = [
        'user_id', 'session_name', 'messages', 'created_at', 'updated_at'
    ];

    protected $casts = [
        'messages' => 'array',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];
}
