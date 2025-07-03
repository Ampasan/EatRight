<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class OrderResource extends JsonResource
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
            'order_items' => $this->order_items,
            'order_summary' => $this->order_summary,
            'delivery_address' => $this->delivery_address,
            'payment_method' => $this->payment_method,
            'payment_status' => $this->payment_status,
            'order_status' => $this->order_status,
            'tracking_number' => $this->tracking_number,
            'courier' => $this->courier,
            'estimated_delivery' => optional($this->estimated_delivery)->toIso8601String(),
            'delivered_at' => optional($this->delivered_at)->toIso8601String(),
            'created_at' => optional($this->created_at)->toIso8601String(),
            'updated_at' => optional($this->updated_at)->toIso8601String(),
        ];
    }
}
