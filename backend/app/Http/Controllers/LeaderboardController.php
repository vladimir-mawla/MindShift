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
    public function getLeaderboard(Request $request){
        $company_id = $request->company_id;
        $users = User::all()->where("company_id", $company_id)->take(5);

        return response()->json([
            "status" => "success",
            "users" => $users,
        ], 200);
    }
    // Get Leaderboard's points API
    public function pushLeader(){
        $leaders = User::all();
        $leaders->makeHidden(['email', 'badge', 'profile_img', "country", "city", "description", "email_verified_at", "user_type","job_title", "created_at","updated_at", "level", "id", "company_id"]);
        event(new MyEvent([$leaders]));
    }
}
