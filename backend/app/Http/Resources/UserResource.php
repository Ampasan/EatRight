<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => (string) $this->_id,
            'level_id' => $this->level_id,
            'user_name' => $this->user_name,
            'user_email' => $this->user_email,
            'profile_picture' => $this->profile_picture,
            'intro_name' => $this->intro_name,
            'gender' => $this->gender,
            'birth_date' => optional($this->birth_date)->toIso8601String(),
            'height' => $this->height,
            'weight' => $this->weight,
            'user_goal' => $this->user_goal,
            'allergies' => $this->allergies,
            'social_login' => $this->social_login,
            'created_at' => optional($this->created_at)->toIso8601String(),
            'updated_at' => optional($this->updated_at)->toIso8601String(),
        ];
    }
}
