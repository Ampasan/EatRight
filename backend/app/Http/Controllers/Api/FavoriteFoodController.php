<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\UserFavoriteFood;
use App\Http\Requests\FavoriteFoodRequest;

class FavoriteFoodController extends Controller
{
    // GET /users/favorites
    public function index(Request $request)
    {
        $user = auth('api')->user();
        $favorites = UserFavoriteFood::where('user_id', $user->_id)->get();
        return response()->json(['success' => true, 'favorites' => $favorites]);
    }

    // POST /users/favorites
    public function store(FavoriteFoodRequest $request)
    {
        $user = auth('api')->user();
        $data = $request->validated();
        $data['user_id'] = $user->_id;
        $favorite = UserFavoriteFood::firstOrCreate($data);
        return response()->json(['success' => true, 'favorite' => $favorite], 201);
    }

    // DELETE /users/favorites/:foodId
    public function destroy($foodId)
    {
        $user = auth('api')->user();
        $favorite = UserFavoriteFood::where('user_id', $user->_id)->where('food_id', $foodId)->firstOrFail();
        $favorite->delete();
        return response()->json(['success' => true, 'message' => 'Makanan favorit dihapus']);
    }
}
