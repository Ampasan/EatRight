<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class IsAdmin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $user = auth('api')->user();
        if ($user && (isset($user->level_name) ? $user->level_name === 'admin' : (isset($user->level_id) && $user->level_id && $user->level_id == 'admin'))) {
            return $next($request);
        }
        return response()->json(['message' => 'Unauthorized. Admin only.'], 403);
    }
}
