<?php

namespace App\App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Badge;

class BadgeController extends Controller
{
    // Get Badges API
    public function getBadges(){
        $badges = Badge::all();

        return response()->json([
            "status" => "success",
            "badges" => $badges,
        ], 200);
    }
}
