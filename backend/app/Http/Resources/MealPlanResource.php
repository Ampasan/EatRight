<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class MealPlanResource extends JsonResource
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
            'name' => $this->name,
            'plan_description' => $this->plan_description,
            'start_date' => optional($this->start_date)->toIso8601String(),
            'end_date' => optional($this->end_date)->toIso8601String(),
            'daily_plans' => $this->daily_plans,
            'status' => $this->status,
            'ai_prompt' => $this->ai_prompt,
            'created_at' => optional($this->created_at)->toIso8601String(),
            'updated_at' => optional($this->updated_at)->toIso8601String(),
        ];
    }
}
