<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class GroupController extends Controller
{
    //Create Group API
    public function createGroup(Request $request){
        $group = new Group;
        $group->name = $request->name;
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
    // Rename Group API
    public function renameGroup(Request $request){
    
        $group_id = $request->group_id;
        $name = $request->name;
        Group::where('id', $group_id)->update(['name'=>$name]);
        return response()->json([
            "status" => "Done",
        ], 200);
    }
}
