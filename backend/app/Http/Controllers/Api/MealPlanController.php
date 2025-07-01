<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\MealPlan;
use App\Http\Requests\MealPlanRequest;

class MealPlanController extends Controller
{
    public function index(Request $request)
    {
        $user = auth('api')->user();
        $plans = MealPlan::where('user_id', $user->_id)->get();
        return response()->json(['success' => true, 'meal_plans' => $plans]);
    }

    public function store(MealPlanRequest $request)
    {
        $user = auth('api')->user();
        $data = $request->validated();
        $data['user_id'] = $user->_id;
        $plan = MealPlan::create($data);
        return response()->json(['success' => true, 'meal_plan' => $plan], 201);
    }

    public function show($id)
    {
        $user = auth('api')->user();
        $plan = MealPlan::where('_id', $id)->where('user_id', $user->_id)->firstOrFail();
        return response()->json(['success' => true, 'meal_plan' => $plan]);
    }

    public function update(MealPlanRequest $request, $id)
    {
        $user = auth('api')->user();
        $plan = MealPlan::where('_id', $id)->where('user_id', $user->_id)->firstOrFail();
        $plan->update($request->validated());
        return response()->json(['success' => true, 'meal_plan' => $plan]);
    }

    public function destroy($id)
    {
        $user = auth('api')->user();
        $plan = MealPlan::where('_id', $id)->where('user_id', $user->_id)->firstOrFail();
        $plan->delete();
        return response()->json(['success' => true, 'message' => 'Rencana makan berhasil dihapus']);
    }
}
