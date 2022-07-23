<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\UserGame;

class UserGameController extends Controller
{
    // Add Played Game API
    public function addPlayedGame(Request $request){

        $played_game = new UserGame;
        $played_game->user_id = $request->user_id;
        $played_game->game_id = $request->game_id;
        $played_game->save();

        return response()->json([
            "status" => "Success",
        ], 200);
    }
}
