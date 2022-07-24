<?php

namespace App\Http\Middleware;

use Closure;
use Auth;

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

    public function handle($request, Closure $next)
    {
        if (Auth::user() &&  Auth::user()->user_type == 1) {
            return $next($request);
        }else{return response()->json('Your account is inactive');}
            
 
    }
}
