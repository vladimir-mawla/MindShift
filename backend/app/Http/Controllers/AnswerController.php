<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Answer;
use App\Models\Question;


class AnswerController extends Controller
{
    // Add Answer API
    public function addAnswer(Request $request){
        $answer = new Answer;
        $answer->answer = $request->answer;
        $answer->question_id = $request->question_id;
        $answer->user_id = $request->user_id;
        $answer->game_id = $request->game_id;
        $answer->save();

        return response()->json([
            "status" => "Success",
        ], 200);
    }
    // Check Answer
    public function checkAnswer(Request $request){

        $user_id = $request->user_id;
        $game_id = $request->game_id;
        $question_id = $request->question_id;
        $question = Question::find($question_id);
        $correct_answer = $question->correct_answer;
        $points = $question->points;
        $answer = $request->answer;

        if ($answer == $correct_answer){

            return response()->json([
                "Status" => "True",
                "Points" => $points,

            ], 200);
        }else{

            return response()->json(
                "False"
            );
        }
        
    }
}
