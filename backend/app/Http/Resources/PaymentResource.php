<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PaymentResource extends JsonResource
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
            'order_id' => $this->order_id,
            'payment_method' => $this->payment_method,
            'payment_gateway' => $this->payment_gateway,
            'transaction_id' => $this->transaction_id,
            'amount' => $this->amount,
            'payment_status' => $this->payment_status,
            'payment_proof' => $this->payment_proof,
            'validated_by' => $this->validated_by,
            'paid_at' => optional($this->paid_at)->toIso8601String(),
            'created_at' => optional($this->created_at)->toIso8601String(),
            'updated_at' => optional($this->updated_at)->toIso8601String(),
        ];
    }
}
