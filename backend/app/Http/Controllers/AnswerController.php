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
    // Get User's Answer on question
    public function getAnswerOfUserOnQuestion(Request $request){
        $user_id = $request->user_id;
        $question_id = $request->question_id;

        $answer = Answer::where('question_id', $question_id)->where('user_id', $user_id)->get();
        return response()->json(
            $answer
        );
    }
    // Check Answer
    public function checkAnswer(Request $request){

        $user_id = $request->user_id;
        $game_id = $request->game_id;
        $question_id = $request->question_id;
        $correct_answer = Answer::find(1)->questions->where('id', $question_id)->where('game_id', $game_id)->get();
        $answer = Answer::where('question_id', $question_id)->where('user_id', $user_id)->get();

        if ($answer[0]['answer'] == $correct_answer[0]['correct_answer']){

            return response()->json(
                "True"
            );
        }else{

            return response()->json(
                "False"
            );
        }
        
    }
}
