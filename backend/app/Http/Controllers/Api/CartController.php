<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Cart;
use App\Http\Requests\CartRequest;

class CartController extends Controller
{
    public function index(Request $request)
    {
        $user = auth('api')->user();
        $cart = Cart::where('user_id', $user->_id)->first();
        return response()->json(['success' => true, 'cart' => $cart]);
    }

    // POST /cart/items
    public function addItem(CartRequest $request)
    {
        $user = auth('api')->user();
        $cart = Cart::firstOrCreate(['user_id' => $user->_id]);
        $data = $request->validated();
        $itemIndex = collect($cart->items)->search(fn($item) => $item['food_id'] == $data['food_id']);
        if ($itemIndex !== false) {
            $cart->items[$itemIndex]['quantity'] += $data['quantity'];
        } else {
            $cart->items[] = [
                'food_id' => $data['food_id'],
                'quantity' => $data['quantity'],
                'added_at' => now(),
            ];
        }
        $cart->save();
        return response()->json(['success' => true, 'cart' => $cart]);
    }

    // PATCH /cart/items/:itemId
    public function updateItem(CartRequest $request, $itemId)
    {
        $user = auth('api')->user();
        $cart = Cart::where('user_id', $user->_id)->firstOrFail();
        $data = $request->validated();
        $itemIndex = collect($cart->items)->search(fn($item) => $item['food_id'] == $itemId);
        if ($itemIndex === false) {
            return response()->json(['success' => false, 'message' => 'Item tidak ditemukan'], 404);
        }
        $cart->items[$itemIndex]['quantity'] = $data['quantity'];
        $cart->save();
        return response()->json(['success' => true, 'cart' => $cart]);
    }

    // DELETE /cart/items/:itemId
    public function removeItem($itemId)
    {
        $user = auth('api')->user();
        $cart = Cart::where('user_id', $user->_id)->firstOrFail();
        $cart->items = collect($cart->items)->reject(fn($item) => $item['food_id'] == $itemId)->values()->all();
        $cart->save();
        return response()->json(['success' => true, 'cart' => $cart]);
    }
}
