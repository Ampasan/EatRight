<?php

namespace App\Listeners;

use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use App\Models\Notification;

class SendOrderNotification
{
    /**
     * Handle the event.
     */
    public function handle(object $event): void
    {
        // Pastikan event memiliki properti order
        if (!isset($event->order)) {
            return;
        }
        $order = $event->order;
        Notification::create([
            'user_id' => $order->user_id,
            'title' => 'Pesanan Berhasil Dibuat',
            'message' => 'Pesanan Anda dengan nomor tracking ' . ($order->tracking_number ?? '-') . ' telah berhasil dibuat.',
            'type' => 'order',
            'created_at' => now(),
        ]);
    }
}
