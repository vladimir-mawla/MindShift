<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Leaderboard;
use App\Models\User;

class LeaderboardController extends Controller
{
    //Add Users API
    public function addUser(Request $request){
        $leaderboard = new Leaderboard;
        $leaderboard->user_id = $request->user_id;
        $leaderboard->save();

        return response()->json([
            "status" => "Success",
            "leaderboard" => $leaderboard,
        ], 200);
    }
    // Get Leaderboard API
    public function getLeaderboard(){
        $users = User::all()->sortByDesc('points')->take(10);

        return response()->json([
            "status" => "success",
            "users" => $users,
        ], 200);
    }
}
