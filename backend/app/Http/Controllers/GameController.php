<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Game;


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
