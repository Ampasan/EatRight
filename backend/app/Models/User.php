<?php

namespace App\Models;

use Illuminate\Notifications\Notifiable;
use MongoDB\Laravel\Eloquent\Model;
use MongoDB\Laravel\Eloquent\SoftDeletes;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;

class User extends Model implements AuthenticatableContract, JWTSubject
{
    use Notifiable, SoftDeletes;

    protected $connection = 'mongodb';
    protected $collection = 'users';

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'level_id', 'user_name', 'user_email', 'user_password', 'profile_picture', 'intro_name',
        'gender', 'birth_date', 'height', 'weight', 'user_goal', 'allergies', 'social_login',
        'created_at', 'updated_at', 'deleted_at'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'user_password',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'allergies' => 'array',
            'social_login' => 'array',
            'birth_date' => 'datetime',
            'created_at' => 'datetime',
            'updated_at' => 'datetime',
            'deleted_at' => 'datetime',
        ];
    }

    // Relationships
    public function level()
    {
        return $this->belongsTo(UserLevel::class, 'level_id', '_id');
    }

    // JWT implementation
    public function getJWTIdentifier() { return $this->getKey(); }
    public function getJWTCustomClaims() { return []; }

    // AuthenticatableContract implementation
    public function getAuthIdentifierName() { return '_id'; }
    public function getAuthIdentifier() { return $this->getKey(); }
    public function getAuthPassword() { return $this->user_password; }
    public function getAuthPasswordName() { return 'user_password'; }
    public function getRememberToken() { return $this->remember_token ?? null; }
    public function setRememberToken($value) { $this->remember_token = $value; }
    public function getRememberTokenName() { return 'remember_token'; }
}
