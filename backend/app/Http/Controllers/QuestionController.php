<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Question;

class QuestionController extends Controller
{
        // Add Question API
        public function addQuestion(Request $request){

            $question = new Question;
            $question->question = $request->question;
            $question->correct_answer = $request->correct_answer;
            $question->points = $request->points;
            $question->game_id = $request->game_id;
            $question->question_type = $request->question_type;
            $question->save();
    
            return response()->json([
                "status" => "Success",
                "question" => $question,
            ], 200);
        }
        // Delete Question API
        public function deleteQuestion(Request $request){
            Question::where('id',$request->question_id)->delete();

            return response()->json([
                "Successfully Deleted",
            ], 200);
        }
        // Get Questions API
        public function getQuestions(Request $request){
            $questions = Question::where('game_id', $request->game_id)->get();

            return response()->json([
                "status" => "success",
                "questions" => $questions,
            ], 200);
        }
}
