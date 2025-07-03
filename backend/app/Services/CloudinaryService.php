<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;

class CloudinaryService
{
    protected $cloudName;
    protected $apiKey;
    protected $apiSecret;
    protected $baseUrl = 'https://api.cloudinary.com/v1_1';

    public function __construct()
    {
        $this->cloudName = config('cloudinary.cloud_name');
        $this->apiKey = config('cloudinary.api_key');
        $this->apiSecret = config('cloudinary.api_secret');
    }

    /**
     * Upload gambar ke Cloudinary
     * @param string $filePath
     * @return array|null
     */
    public function uploadImage(string $filePath): ?array
    {
        $response = Http::attach(
            'file',
            fopen($filePath, 'r'),
            basename($filePath)
        )->post($this->baseUrl . "/{$this->cloudName}/image/upload", [
            'upload_preset' => config('cloudinary.upload_preset'),
        ]);

        if ($response->successful()) {
            return $response->json();
        }
        return null;
    }
}
