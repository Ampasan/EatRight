<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Food;
use App\Http\Requests\FoodRequest;

class AdminFoodController extends Controller
{
    public function index(Request $request)
    {
        $foods = Food::all();
        return response()->json(['success' => true, 'foods' => $foods]);
    }

    public function store(FoodRequest $request)
    {
        $data = $request->validated();
        $food = Food::create($data);
        return response()->json(['success' => true, 'food' => $food], 201);
    }

    public function show($id)
    {
        $food = Food::findOrFail($id);
        return response()->json(['success' => true, 'food' => $food]);
    }

    public function update(FoodRequest $request, $id)
    {
        $food = Food::findOrFail($id);
        $food->update($request->validated());
        return response()->json(['success' => true, 'food' => $food]);
    }

    public function destroy($id)
    {
        $food = Food::findOrFail($id);
        $food->delete();
        return response()->json(['success' => true, 'message' => 'Makanan berhasil dihapus']);
    }
}
