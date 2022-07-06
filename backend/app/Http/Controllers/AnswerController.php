<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Answer;


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
    // Get Question's Answer
    public function getAnswerOfQuestion(Request $request){
        $question_id = $request->question_id;
        $answer = Answer::where('question_id', $question_id)->get();
        return response()->json(
            $answer
        );
    }
}
