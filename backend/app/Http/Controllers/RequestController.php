<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class RequestController extends Controller
{
    // Add Request API
    public function addRequest(Request $request){
        $request = new Request;
        $request->request = $request->request;
        $request->reward_id = $request->question_id;
        $request->user_id = $request->user_id;
        $request->game_id = $request->game_id;
        $request->company_id = $request->company_id;
        $request->save();

        return response()->json([
            "status" => "Success"
        ], 200);
    }

    // Get Requests API
    public function getRequests(){
        $requests = Request::all();

        return response()->json([
            "status" => "success",
            "requests" => $requests,
        ], 200);
    }
}
