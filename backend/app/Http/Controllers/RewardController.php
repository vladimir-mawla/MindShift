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
    // Delete Reward API
    public function deleteReward(Request $request){
        Reward::where('id',$request->reward_id)->delete();

        return response()->json([
            "Successfully Deleted",
        ], 200);
    }
    // Edit Reward API
    public function editReward(Request $request){
    
        $reward_id = $request->reward_id;
        $reward->name = $request->name;
        $reward->description = $request->description;
        $reward->needed_points = $request->needed_points;
        Reward::where('id', $reward_id)->update(['name'=>$name,
                                            'needed_points'=>$needed_points,
                                            'description'=>$description]);
        return response()->json([
            "status" => "Done",
        ], 200);
    }
    // Get Reward API
    public function getRewards(){
        $rewards = Reward::all();

        return response()->json([
            "status" => "success",
            "rewards" => $rewards,
        ], 200);
    }
    // Get Specific Reward API
    public function getOneReward(Request $request){
        $reward_id = $request->reward_id;
        $reward = Reward::find($reward_id);
        return response()->json([
            $reward['name'] => $reward,
        ], 200);
    }
}
