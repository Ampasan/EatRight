<?php

namespace App\Models;

use Jenssegers\Mongodb\Eloquent\Model;

class UserPreference extends Model
{
    protected $connection = 'mongodb';
    protected $collection = 'user_preferences';

    protected $fillable = [
        'user_id', 'notification_settings', 'ai_settings', 'created_at', 'updated_at'
    ];

    protected $casts = [
        'notification_settings' => 'array',
        'ai_settings' => 'array',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];
}
