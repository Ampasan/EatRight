<?php

namespace App\Services\Ai;

use Illuminate\Support\Facades\Http;

class ClarifaiService
{
    protected $apiKey;
    protected $baseUrl = 'https://api.clarifai.com/v2/models';

    public function __construct()
    {
        $this->apiKey = config('clarifai.api_key');
    }

    /**
     * Analisa gambar menggunakan Clarifai API
     * @param string $imageUrl
     * @return array|null
     */
    public function analyzeImage(string $imageUrl): ?array
    {
        $response = Http::withHeaders([
            'Authorization' => 'Key ' . $this->apiKey,
            'Content-Type' => 'application/json',
        ])->post($this->baseUrl . '/general-image-recognition/outputs', [
            'inputs' => [[
                'data' => [
                    'image' => [
                        'url' => $imageUrl
                    ]
                ]
            ]]
        ]);

        if ($response->successful()) {
            return $response->json();
        }
        return null;
    }
}
