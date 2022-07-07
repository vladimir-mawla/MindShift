<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MemebrController extends Controller
{
        // Add Member API
        public function addMember(Request $request){

            $member = new Member;
            $member->user_id = $request->user_id;
            $member->group_id = $request->group_id;
            $member->save();
    
            return response()->json([
                "status" => "Success",
                "member" => $member,
            ], 200);
        }
}
