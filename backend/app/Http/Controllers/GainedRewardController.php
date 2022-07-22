<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\GainedReward;

class GainedRewardController extends Controller
{
    // Get Gained Rewards API
    public function getColleaguesGainedRewards(Request $request){
        $company_id = $request->company_id;
        $colleagues = GainedReward::find(1)->users->where('company_id', $company_id);
        $rewards = GainedReward::all();

        return response()->json([
            "status" => "success",
            $colleagues => $rewards,
        ], 200);
    }
}
