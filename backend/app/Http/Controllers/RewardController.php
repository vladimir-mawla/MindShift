<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Reward;

class RewardController extends Controller
{
    //Add Reward API
    public function addReward(Request $request){
        $reward = new Reward;
        $reward->name = $request->name;
        $reward->description = $request->description;
        $reward->needed_points = $request->needed_points;
        $reward->save();

        return response()->json([
            "status" => "Success",
            "reward" => $reward,
        ], 200);
    }
}
