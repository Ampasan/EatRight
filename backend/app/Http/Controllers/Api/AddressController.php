<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\UserAddress;
use App\Http\Requests\User\AddressRequest;

class AddressController extends Controller
{
    // GET /addresses
    public function index(Request $request)
    {
        $user = auth('api')->user();
        $addresses = UserAddress::where('user_id', $user->_id)->get();
        return response()->json(['success' => true, 'addresses' => $addresses]);
    }

    // POST /addresses
    public function store(AddressRequest $request)
    {
        $user = auth('api')->user();
        $data = $request->validated();
        $data['user_id'] = $user->_id;
        $address = UserAddress::create($data);
        return response()->json(['success' => true, 'address' => $address], 201);
    }

    // PATCH /addresses/:id
    public function update(AddressRequest $request, $id)
    {
        $user = auth('api')->user();
        $address = UserAddress::where('_id', $id)->where('user_id', $user->_id)->firstOrFail();
        $address->update($request->validated());
        return response()->json(['success' => true, 'address' => $address]);
    }

    // DELETE /addresses/:id
    public function destroy($id)
    {
        $user = auth('api')->user();
        $address = UserAddress::where('_id', $id)->where('user_id', $user->_id)->firstOrFail();
        $address->delete();
        return response()->json(['success' => true, 'message' => 'Alamat berhasil dihapus']);
    }
} 