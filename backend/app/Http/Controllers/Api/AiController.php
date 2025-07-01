<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Services\Ai\ClarifaiService;
use App\Services\Ai\OpenAiService;

class AiController extends Controller
{
    // POST /ai/scan-food
    public function scanFood(Request $request)
    {
        $request->validate(['image' => 'required|image']);
        $image = $request->file('image');
        $result = app(ClarifaiService::class)->scanFood($image);
        return response()->json(['success' => true, 'result' => $result]);
    }

    // POST /ai/analyze-nutrition
    public function analyzeNutrition(Request $request)
    {
        $request->validate(['image' => 'required|image']);
        $image = $request->file('image');
        $result = app(ClarifaiService::class)->analyzeNutrition($image);
        return response()->json(['success' => true, 'result' => $result]);
    }

    // POST /ai/generate-meal-plan
    public function generateMealPlan(Request $request)
    {
        $request->validate([
            'bmi' => 'required|numeric',
            'age' => 'required|integer',
            'goal' => 'required|string',
        ]);
        $params = $request->only(['bmi', 'age', 'goal']);
        $result = app(OpenAiService::class)->generateMealPlan($params);
        return response()->json(['success' => true, 'meal_plan' => $result]);
    }

    // POST /ai/meal-recommendations
    public function mealRecommendations(Request $request)
    {
        $request->validate(['history' => 'required|array']);
        $result = app(OpenAiService::class)->mealRecommendations($request->input('history'));
        return response()->json(['success' => true, 'recommendations' => $result]);
    }
}
