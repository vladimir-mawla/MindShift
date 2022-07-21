<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    //Get Company Users
    public function getUsers(Request $request){
        $users = User::all()->where('company_id', $request->company_id);

        return response()->json([
            "status" => "success",
            "users" => $users,
        ], 200);
    }
    // Increment points API
    public function pointsControl(Request $request){
        
        $user_id = $request->user_id;
        $points = $request->points;
        User::where('id', $user_id)->increment('points', $points);
        return response()->json([
            "status" => "Done",
        ], 200);
    }
        //Get Users Info
        public function getUser(Request $request){
            $user = User::find(1)->where('id', $request->user_id)->get();
    
            return response()->json([
                "status" => "success",
                "users" => $user,
            ], 200);
        }
}
