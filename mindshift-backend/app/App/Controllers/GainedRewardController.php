<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\GainedReward;

class GainedRewardController extends Controller
{
    // Add Gained Reward API
    public function addGainedReward(Request $request){

        $gained_reward = new GainedReward;
        $gained_reward->user_id = $request->user_id;
        $gained_reward->reward_id = $request->reward_id;
        $gained_reward->save();

        return response()->json([
            "status" => "Success",
        ], 200);
    }
}
