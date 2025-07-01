<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\FoodReview;
use App\Http\Requests\ReviewRequest;

class ReviewController extends Controller
{
    // GET /foods/:id/reviews
    public function index($foodId)
    {
        $reviews = FoodReview::where('food_id', $foodId)->get();
        return response()->json(['success' => true, 'reviews' => $reviews]);
    }

    // POST /foods/:id/reviews
    public function store(ReviewRequest $request, $foodId)
    {
        $user = auth('api')->user();
        $data = $request->validated();
        $data['user_id'] = $user->_id;
        $data['food_id'] = $foodId;
        $review = FoodReview::create($data);
        return response()->json(['success' => true, 'review' => $review], 201);
    }

    // PATCH /reviews/:id
    public function update(ReviewRequest $request, $id)
    {
        $user = auth('api')->user();
        $review = FoodReview::where('_id', $id)->where('user_id', $user->_id)->firstOrFail();
        $review->update($request->validated());
        return response()->json(['success' => true, 'review' => $review]);
    }

    // DELETE /reviews/:id
    public function destroy($id)
    {
        $user = auth('api')->user();
        $review = FoodReview::where('_id', $id)->where('user_id', $user->_id)->firstOrFail();
        $review->delete();
        return response()->json(['success' => true, 'message' => 'Review dihapus']);
    }
} 