<?php

namespace App\Services\Payment;

use Illuminate\Support\Facades\Http;

class MidtransService
{
    protected $serverKey;
    protected $baseUrl = 'https://api.sandbox.midtrans.com/v2';

    public function __construct()
    {
        $this->serverKey = config('midtrans.server_key');
    }

    /**
     * Membuat transaksi pembayaran di Midtrans
     * @param array $params
     * @return array|null
     */
    public function createTransaction(array $params): ?array
    {
        $response = Http::withBasicAuth($this->serverKey, '')
            ->withHeaders([
                'Content-Type' => 'application/json',
                'Accept' => 'application/json',
            ])->post($this->baseUrl . '/charge', $params);

        if ($response->successful()) {
            return $response->json();
        }
        return null;
    }
}
