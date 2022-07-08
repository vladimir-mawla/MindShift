<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\QuestionOption;

class QuestionOptionController extends Controller
{
    //Add Question Option API
    public function addQuestionOption(Request $request){

        $question_option = new QuestionOption;
        $question_option->question_id = $request->question_id;
        $question_option->option = $request->option;

        $question_option->save();

        return response()->json([
            "status" => "Success",
        ], 200);
    }
}
