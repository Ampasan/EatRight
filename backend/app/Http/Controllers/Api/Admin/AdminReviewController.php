<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\FoodReview;

class AdminReviewController extends Controller
{
    public function index(Request $request)
    {
        $reviews = FoodReview::all();
        return response()->json(['success' => true, 'reviews' => $reviews]);
    }

    public function destroy($id)
    {
        $review = FoodReview::findOrFail($id);
        $review->delete();
        return response()->json(['success' => true, 'message' => 'Review berhasil dihapus']);
    }
}
