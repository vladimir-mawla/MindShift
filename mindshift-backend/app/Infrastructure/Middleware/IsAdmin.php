<?php

namespace App\Infrastructure\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

use Illuminate\Http\Request;

class IsAdmin 
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */

      //  if (Auth::user() &&  Auth::user()->user_type == 1) {

    public function handle(Request $request, Closure $next)
    {
        if (Auth::user() &&  Auth::user()->user_type == 1 ) {
            return $next($request);
        }else{
            return response()->json('Your account is inactive');
        }
            
 
    }
}
