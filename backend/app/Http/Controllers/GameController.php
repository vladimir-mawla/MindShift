<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class GameController extends Controller
{
    public function addGame(Request $request){

        $game = new Game;
        $game->name = $request->name;
        $game->description = $request->description;
        $game->points = $request->points;
        $game->img = $request->img;
        $game->save();

        return response()->json([
            "status" => "Success",
            "game" => $game,
        ], 200);
    }
}
