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
    // Delete Achievement API
    public function deleteAchievement(Request $request){
        Achievement::where('id',$request->achievement_id)->delete();

        return response()->json([
            "Successfully Deleted",
        ], 200);
    }
    // Get Achievements API
    public function getAchievements(){
        $achievements = Achievement::all();

        return response()->json([
            "status" => "success",
            "achievements" => $achievements,
        ], 200);
    }
    // Edit Achievement API
    public function editAchievement(Request $request){
        
        $achievement_id = $request->achievement_id;
        $name = $request->name;
        $points = $request->points;
        $img = $request->img;
        $description = $request->description;
        Achievement::where('id', $achievement_id)->update(['name'=>$name,
                                            'points'=>$points,
                                            'img'=>$img,
                                            'description'=>$description]);
        return response()->json([
            "status" => "Done",
        ], 200);
    }
}
