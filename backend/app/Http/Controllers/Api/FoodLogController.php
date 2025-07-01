<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\UserFoodLog;
use App\Http\Requests\FoodLogRequest;
use Carbon\Carbon;

class FoodLogController extends Controller
{
    public function index(Request $request)
    {
        $user = auth('api')->user();
        $period = $request->query('period', 'daily');
        $query = UserFoodLog::where('user_id', $user->_id);
        if ($period === 'weekly') {
            $query->where('consumption_date', '>=', Carbon::now()->startOfWeek());
        } elseif ($period === 'monthly') {
            $query->where('consumption_date', '>=', Carbon::now()->startOfMonth());
        } else {
            $query->where('consumption_date', '>=', Carbon::today());
        }
        $logs = $query->get();
        return response()->json(['success' => true, 'logs' => $logs]);
    }

    public function store(FoodLogRequest $request)
    {
        $user = auth('api')->user();
        $data = $request->validated();
        $data['user_id'] = $user->_id;
        $log = UserFoodLog::create($data);
        return response()->json(['success' => true, 'log' => $log], 201);
    }

    public function update(FoodLogRequest $request, $id)
    {
        $user = auth('api')->user();
        $log = UserFoodLog::where('_id', $id)->where('user_id', $user->_id)->firstOrFail();
        $log->update($request->validated());
        return response()->json(['success' => true, 'log' => $log]);
    }

    public function destroy($id)
    {
        $user = auth('api')->user();
        $log = UserFoodLog::where('_id', $id)->where('user_id', $user->_id)->firstOrFail();
        $log->delete();
        return response()->json(['success' => true, 'message' => 'Log makanan berhasil dihapus']);
    }

    // GET /food-logs/analytics
    public function analytics(Request $request)
    {
        $user = auth('api')->user();
        $period = $request->query('period', 'daily');
        $query = UserFoodLog::where('user_id', $user->_id);
        if ($period === 'weekly') {
            $query->where('consumption_date', '>=', Carbon::now()->startOfWeek());
        } elseif ($period === 'monthly') {
            $query->where('consumption_date', '>=', Carbon::now()->startOfMonth());
        } else {
            $query->where('consumption_date', '>=', Carbon::today());
        }
        $logs = $query->get();
        $summary = [
            'calories' => $logs->sum('actual_nutrition.calories'),
            'protein' => $logs->sum('actual_nutrition.protein'),
            'carbs' => $logs->sum('actual_nutrition.carbs'),
            'fat' => $logs->sum('actual_nutrition.fat'),
        ];
        return response()->json(['success' => true, 'analytics' => $summary]);
    }
}
