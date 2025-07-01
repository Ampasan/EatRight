<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\{
    AuthController,
    UserController,
    AddressController,
    FoodController,
    FoodLogController,
    MealPlanController,
    CartController,
    OrderController,
    PaymentController,
    NotificationController,
    FavoriteFoodController,
    ReviewController,
    AiController,
    ChatController
};
use App\Http\Controllers\Api\Admin\{
    AdminUserController,
    AdminFoodController,
    AdminOrderController,
    AdminPaymentController,
    AdminReviewController,
    AdminShippingController
};

// AUTH
Route::post('/auth/register', [AuthController::class, 'register']);
Route::post('/auth/login', [AuthController::class, 'login']);
Route::post('/auth/logout', [AuthController::class, 'logout'])->middleware('is_user');
Route::post('/auth/send-otp', [AuthController::class, 'sendOtp']);
Route::post('/auth/verify-otp', [AuthController::class, 'verifyOtp']);
Route::post('/auth/resend-otp', [AuthController::class, 'resendOtp']);
Route::post('/auth/forgot-password', [AuthController::class, 'forgotPassword']);
Route::post('/auth/reset-password', [AuthController::class, 'resetPassword']);
Route::patch('/auth/change-password', [AuthController::class, 'changePassword'])->middleware('is_user');

// USER PROFILE & ACCOUNT
Route::middleware('is_user')->group(function () {
    Route::get('/users/profile', [UserController::class, 'profile']);
    Route::patch('/users/profile', [UserController::class, 'update']);
    Route::post('/users/profile/personal-info', [UserController::class, 'setPersonalInfo']);
    Route::delete('/users/account', [UserController::class, 'deleteAccount']);

    // Address
    Route::get('/addresses', [AddressController::class, 'index']);
    Route::post('/addresses', [AddressController::class, 'store']);
    Route::patch('/addresses/{id}', [AddressController::class, 'update']);
    Route::delete('/addresses/{id}', [AddressController::class, 'destroy']);

    // Food Log
    Route::get('/food-logs', [FoodLogController::class, 'index']);
    Route::post('/food-logs', [FoodLogController::class, 'store']);
    Route::patch('/food-logs/{id}', [FoodLogController::class, 'update']);
    Route::delete('/food-logs/{id}', [FoodLogController::class, 'destroy']);
    Route::get('/food-logs/analytics', [FoodLogController::class, 'analytics']);

    // Meal Plan
    Route::get('/meal-plans', [MealPlanController::class, 'index']);
    Route::get('/meal-plans/{id}', [MealPlanController::class, 'show']);
    Route::post('/meal-plans', [MealPlanController::class, 'store']);
    Route::patch('/meal-plans/{id}', [MealPlanController::class, 'update']);
    Route::delete('/meal-plans/{id}', [MealPlanController::class, 'destroy']);

    // Cart
    Route::get('/cart', [CartController::class, 'index']);
    Route::post('/cart/items', [CartController::class, 'addItem']);
    Route::patch('/cart/items/{itemId}', [CartController::class, 'updateItem']);
    Route::delete('/cart/items/{itemId}', [CartController::class, 'removeItem']);

    // Order
    Route::get('/orders', [OrderController::class, 'index']);
    Route::get('/orders/{id}', [OrderController::class, 'show']);
    Route::post('/orders', [OrderController::class, 'store']);
    Route::patch('/orders/{id}/cancel', [OrderController::class, 'cancel']);
    Route::get('/orders/{id}/tracking', [OrderController::class, 'tracking']);

    // Payment
    Route::get('/payments', [PaymentController::class, 'index']);
    Route::get('/payments/{id}', [PaymentController::class, 'show']);
    Route::post('/payments', [PaymentController::class, 'store']);

    // Notification
    Route::get('/notifications', [NotificationController::class, 'index']);
    Route::delete('/notifications/{id}', [NotificationController::class, 'destroy']);
    Route::post('/notifications/schedule', [NotificationController::class, 'schedule']);
    Route::patch('/notifications/schedule/{id}', [NotificationController::class, 'updateSchedule']);

    // Favorite Food
    Route::get('/users/favorites', [FavoriteFoodController::class, 'index']);
    Route::post('/users/favorites', [FavoriteFoodController::class, 'store']);
    Route::delete('/users/favorites/{foodId}', [FavoriteFoodController::class, 'destroy']);

    // Review
    Route::get('/foods/{id}/reviews', [ReviewController::class, 'index']);
    Route::post('/foods/{id}/reviews', [ReviewController::class, 'store']);
    Route::patch('/reviews/{id}', [ReviewController::class, 'update']);
    Route::delete('/reviews/{id}', [ReviewController::class, 'destroy']);

    // AI
    Route::post('/ai/scan-food', [AiController::class, 'scanFood']);
    Route::post('/ai/analyze-nutrition', [AiController::class, 'analyzeNutrition']);
    Route::post('/ai/generate-meal-plan', [AiController::class, 'generateMealPlan']);
    Route::post('/ai/meal-recommendations', [AiController::class, 'mealRecommendations']);

    // Chat
    Route::get('/chat/sessions', [ChatController::class, 'index']);
    Route::get('/chat/sessions/{id}', [ChatController::class, 'show']);
    Route::post('/chat/sessions', [ChatController::class, 'store']);
    Route::patch('/chat/sessions/{id}', [ChatController::class, 'update']);
    Route::delete('/chat/sessions/{id}', [ChatController::class, 'destroy']);
    Route::post('/chat/sessions/{id}/messages', [ChatController::class, 'sendMessage']);
    Route::patch('/chat/messages/{id}', [ChatController::class, 'updateMessage']);
});

// FOOD PUBLIC
Route::get('/foods', [FoodController::class, 'index']);
Route::get('/foods/{id}', [FoodController::class, 'show']);
Route::get('/foods/search', [FoodController::class, 'search']);
Route::get('/foods/category/{category}', [FoodController::class, 'byCategory']);
Route::get('/foods/recommendations', [FoodController::class, 'recommendations']);

// ADMIN
Route::prefix('admin')->middleware('is_admin')->group(function () {
    // User
    Route::get('/users', [AdminUserController::class, 'index']);
    Route::get('/users/{id}', [AdminUserController::class, 'show']);
    Route::patch('/users/{id}', [AdminUserController::class, 'update']);
    Route::delete('/users/{id}', [AdminUserController::class, 'destroy']);
    Route::get('/users/{id}/orders', [AdminUserController::class, 'orders']);
    Route::get('/users/{id}/food-logs', [AdminUserController::class, 'foodLogs']);
    Route::get('/users/{id}/activities', [AdminUserController::class, 'activities']);

    // Food
    Route::get('/foods', [AdminFoodController::class, 'index']);
    Route::get('/foods/{id}', [AdminFoodController::class, 'show']);
    Route::post('/foods', [AdminFoodController::class, 'store']);
    Route::patch('/foods/{id}', [AdminFoodController::class, 'update']);
    Route::delete('/foods/{id}', [AdminFoodController::class, 'destroy']);

    // Order
    Route::get('/orders', [AdminOrderController::class, 'index']);
    Route::get('/orders/{id}', [AdminOrderController::class, 'show']);
    Route::patch('/orders/{id}', [AdminOrderController::class, 'update']);

    // Payment
    Route::get('/payments', [AdminPaymentController::class, 'index']);
    Route::get('/payments/{id}', [AdminPaymentController::class, 'show']);
    Route::patch('/payments/{id}', [AdminPaymentController::class, 'update']);
    Route::get('/payments/pending', [AdminPaymentController::class, 'pending']);

    // Review
    Route::get('/reviews', [AdminReviewController::class, 'index']);
    Route::delete('/reviews/{id}', [AdminReviewController::class, 'destroy']);

    // Shipping
    Route::get('/shipping', [AdminShippingController::class, 'index']);
    Route::get('/shipping/{orderId}', [AdminShippingController::class, 'show']);
    Route::patch('/shipping/{orderId}', [AdminShippingController::class, 'update']);
    Route::post('/shipping/{orderId}/ship', [AdminShippingController::class, 'ship']);
}); 