<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class FoodResource extends JsonResource
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
            'food_name' => $this->food_name,
            'food_description' => $this->food_description,
            'food_image' => $this->food_image,
            'food_category' => $this->food_category,
            'nutrition' => $this->nutrition,
            'ingredients' => $this->ingredients,
            'preparation_time' => $this->preparation_time,
            'difficulty_level' => $this->difficulty_level,
            'recipe' => $this->recipe,
            'stock' => $this->stock,
            'min_order' => $this->min_order,
            'is_available' => $this->is_available,
            'discount_percentage' => $this->discount_percentage,
            'original_price' => $this->original_price,
            'final_price' => $this->final_price,
            'weight' => $this->weight,
            'total_sold' => $this->total_sold,
            'view_count' => $this->view_count,
            'created_by' => $this->created_by,
            'created_at' => optional($this->created_at)->toIso8601String(),
            'updated_at' => optional($this->updated_at)->toIso8601String(),
        ];
    }
}
