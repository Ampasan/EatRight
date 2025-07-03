<?php

namespace App\Services\Ai;

use App\Services\Ai\OpenAiService;

class MealPlanService
{
    protected $openAiService;

    public function __construct(OpenAiService $openAiService)
    {
        $this->openAiService = $openAiService;
    }

    /**
     * Generate meal plan berbasis preferensi user menggunakan OpenAI
     * @param array $preferences
     * @return string|null
     */
    public function generateMealPlan(array $preferences): ?string
    {
        $prompt = "Buatkan meal plan sehat selama 7 hari berdasarkan preferensi berikut: ".json_encode($preferences);
        return $this->openAiService->chat($prompt);
    }
}
