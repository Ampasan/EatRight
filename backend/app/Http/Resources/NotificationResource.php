<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class NotificationResource extends JsonResource
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
            'user_id' => $this->user_id,
            'title' => $this->title,
            'message' => $this->message,
            'type' => $this->type,
            'scheduled_at' => optional($this->scheduled_at)->toIso8601String(),
            'sent_at' => optional($this->sent_at)->toIso8601String(),
            'created_at' => optional($this->created_at)->toIso8601String(),
        ];
    }
}
