<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class FoodLogResource extends JsonResource
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
            'food_id' => $this->food_id,
            'consumption_date' => optional($this->consumption_date)->toIso8601String(),
            'meal_type' => $this->meal_type,
            'portion_size' => $this->portion_size,
            'actual_nutrition' => $this->actual_nutrition,
            'source' => $this->source,
            'scan_image_url' => $this->scan_image_url,
            'created_at' => optional($this->created_at)->toIso8601String(),
        ];
    }
}
