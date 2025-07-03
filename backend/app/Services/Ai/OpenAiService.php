<?php

namespace App\Services\Ai;

use Illuminate\Support\Facades\Http;

class OpenAiService
{
    protected $apiKey;
    protected $baseUrl = 'https://api.openai.com/v1';

    public function __construct()
    {
        $this->apiKey = config('openai.api_key');
    }

    /**
     * Kirim prompt ke OpenAI Chat API (model GPT-3.5 Turbo)
     * @param string $prompt
     * @return string|null
     */
    public function chat(string $prompt): ?string
    {
        $response = Http::withHeaders([
            'Authorization' => 'Bearer ' . $this->apiKey,
            'Content-Type' => 'application/json',
        ])->post($this->baseUrl . '/chat/completions', [
            'model' => 'gpt-3.5-turbo',
            'messages' => [
                ['role' => 'user', 'content' => $prompt]
            ],
        ]);

        if ($response->successful()) {
            return $response->json('choices.0.message.content');
        }
        return null;
    }
}
