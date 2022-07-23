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
    // Get Played Games API
    public function getPlayedGames(Request $request){
        $user_id = $request->user_id;
        $game_id = $request->game_id;
        $game = UserGame::where('user_id', $user_id)->where('game_id', $game_id)->get();
        return response()->json([
            $game,
        ], 200);
    }
}
