<?php

namespace App\App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\UserGame;
use App\Models\Game;

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
        $games = UserGame::with('games')->where('user_id', $user_id)->get();
        
        return response()->json([
            $games,
        ], 200);
    }
}
