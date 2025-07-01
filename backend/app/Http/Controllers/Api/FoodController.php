<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Food;
use App\Http\Requests\FoodRequest;

class FoodController extends Controller
{
    public function index()
    {
        $foods = Food::where('is_available', true)->get();
        return response()->json(['success' => true, 'foods' => $foods]);
    }

    public function show($id)
    {
        $food = Food::findOrFail($id);
        return response()->json(['success' => true, 'food' => $food]);
    }

    // GET /foods/search?name=xxx
    public function search(Request $request)
    {
        $query = $request->query('name');
        $foods = Food::where('food_name', 'like', "%$query%")
            ->where('is_available', true)
            ->get();
        return response()->json(['success' => true, 'foods' => $foods]);
    }

    // GET /foods/category/:category
    public function byCategory($category)
    {
        $foods = Food::where('food_category', $category)
            ->where('is_available', true)
            ->get();
        return response()->json(['success' => true, 'foods' => $foods]);
    }

    // GET /foods/recommendations
    public function recommendations(Request $request)
    {
        // Rekomendasi makanan: terlaris, terbaru, dsb (bisa pakai query param)
        $type = $request->query('type', 'terlaris');
        if ($type === 'terlaris') {
            $foods = Food::orderBy('total_sold', 'desc')->take(10)->get();
        } else {
            $foods = Food::orderBy('created_at', 'desc')->take(10)->get();
        }
        return response()->json(['success' => true, 'foods' => $foods]);
    }
}
