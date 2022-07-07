<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class GroupController extends Controller
{
    //Create Group API
    public function createGroup(Request $request){
        $group = new Group;
        $group->name = $request->name;
        $group->description = $request->description;
        $group->save();

        return response()->json([
            "status" => "Success",
            "group" => $group,
        ], 200);
    }
}
