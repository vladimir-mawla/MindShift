<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Achievement;


class AchievmentController extends Controller
{
    // Add Achievement API
    public function addAchievement(Request $request){

        $achievement = new Achievement;
        $achievement->name = $request->name;
        $achievement->points = $request->points;
        $achievement->img = $request->img;
        $achievement->save();

        return response()->json([
            "status" => "Success",
            "achievement" => $achievement,
        ], 200);
    }
}
