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
    // Delete Group API
    public function deleteGroup(Request $request){
        Group::where('id',$request->group_id)->delete();

        return response()->json([
            "Successfully Deleted",
        ], 200);
    }
}
