<?php

namespace App\App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Game;


class GameController extends Controller
{
    // Add Game API
    public function addGame(Request $request){

        $game = new Game;
        $game->name = $request->name;
        $game->description = $request->description;
        $game->points = $request->points;
        $game->save();

        return response()->json([
            "status" => "Success",
            "game" => $game,
        ], 200);
    }
    // Delete Game API
    public function deleteGame(Request $request){
        Game::where('id',$request->game_id)->delete();

        return response()->json([
            "Successfully Deleted",
        ], 200);
    }
    // Get Games API
    public function getGames(){
        $games = Game::all();

        return response()->json([
            "status" => "success",
            "games" => $games,
        ], 200);
    }
    // Increment Game Points API
    public function addGamePoints(Request $request){
        
        $game_id = $request->game_id;
        $points = $request->points;
        Game::where('id', $game_id)->increment('points', $points);
        return response()->json([
            "status" => "Done",
        ], 200);
    }
    // Increment Game Questions API
    public function addGameQuestions(Request $request){
        
        $game_id = $request->game_id;
        Game::where('id', $game_id)->increment('questions_count', 1);
        return response()->json([
            "status" => "Done",
        ], 200);
    }
}
