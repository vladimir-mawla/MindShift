<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Group;
use App\Models\Member;

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
    // Get Groups API
    public function getGroups(){
        $groups = Group::all();

        return response()->json([
            "status" => "success",
            "groups" => $groups,
        ], 200);
    }
    // Get Specific Group API
    public function getSpecificGroup(Request $request){
        $group_id = $request->group_id;
        $group = Group::find($group_id);
        return response()->json([
            $group['name'] => $group,
        ], 200);
    }
    // Get Group Members API
    public function getGroupMembers(Request $request){
        $group_id = $request->group_id;
        $members = Group::find(1)->members->where('group_id', $group_id);
        
        foreach ($members as $member) {
            $users = User::all()->where('id', $member['user_id']);
            foreach ($users as $user){
                echo $user;
            }
        }
    }
}
