<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ChatSession;
use App\Services\Ai\OpenAiService;

class ChatController extends Controller
{
    // GET /chat/sessions
    public function index(Request $request)
    {
        $user = auth('api')->user();
        $sessions = ChatSession::where('user_id', $user->_id)->get();
        return response()->json(['success' => true, 'sessions' => $sessions]);
    }

    // GET /chat/sessions/:id
    public function show($id)
    {
        $user = auth('api')->user();
        $session = ChatSession::where('_id', $id)->where('user_id', $user->_id)->firstOrFail();
        return response()->json(['success' => true, 'session' => $session]);
    }

    // POST /chat/sessions
    public function store(Request $request)
    {
        $user = auth('api')->user();
        $session = ChatSession::create([
            'user_id' => $user->_id,
            'session_name' => $request->input('session_name', 'Chat Session'),
            'messages' => [],
            'created_at' => now(),
            'updated_at' => now(),
        ]);
        return response()->json(['success' => true, 'session' => $session], 201);
    }

    // PATCH /chat/sessions/:id
    public function update(Request $request, $id)
    {
        $user = auth('api')->user();
        $session = ChatSession::where('_id', $id)->where('user_id', $user->_id)->firstOrFail();
        $session->session_name = $request->input('session_name', $session->session_name);
        $session->save();
        return response()->json(['success' => true, 'session' => $session]);
    }

    // DELETE /chat/sessions/:id
    public function destroy($id)
    {
        $user = auth('api')->user();
        $session = ChatSession::where('_id', $id)->where('user_id', $user->_id)->firstOrFail();
        $session->delete();
        return response()->json(['success' => true, 'message' => 'Session dihapus']);
    }

    // POST /chat/sessions/:id/messages
    public function sendMessage(Request $request, $id)
    {
        $user = auth('api')->user();
        $session = ChatSession::where('_id', $id)->where('user_id', $user->_id)->firstOrFail();
        $message = [
            'sender' => 'user',
            'content' => $request->input('content'),
            'message_type' => $request->input('message_type', 'text'),
            'chat_image' => $request->input('chat_image'),
            'timestamp' => now(),
        ];
        $session->messages[] = $message;
        $session->save();
        // Kirim ke AI
        $aiResponse = app(OpenAiService::class)->chat($message['content'], $user);
        $session->messages[] = [
            'sender' => 'ai',
            'content' => $aiResponse,
            'message_type' => 'text',
            'timestamp' => now(),
        ];
        $session->save();
        return response()->json(['success' => true, 'session' => $session]);
    }

    // PATCH /chat/messages/:id
    public function updateMessage(Request $request, $id)
    {
        // Implementasi update pesan jika diperlukan
        return response()->json(['success' => true, 'message' => 'Update pesan belum diimplementasikan']);
    }
}
