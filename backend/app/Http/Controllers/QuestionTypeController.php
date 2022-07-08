<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\QuestionType;

class QuestionTypeController extends Controller
{
    //Add Question Type API
    public function addQuestionType(Request $request){

        $question_type = new QuestionType;
        $question_type->question_id = $request->question_id;
        $question_type->type = $request->type;
        $question_type->save();

        return response()->json([
            "status" => "Success",
        ], 200);
    }
}
