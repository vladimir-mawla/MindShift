<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Events\MyEvent;

class UserController extends Controller
{
    //Get Company Users
    public function getUsers(Request $request){
        $users = User::where('company_id', $request->company_id)->get();

        return response()->json([
            "status" => "success",
            "users" => $users,
        ], 200);
    }
    // Increment points API
    public function pointsControl(Request $request){
        
        $user_id = $request->user_id;
        $points = $request->points;
        User::where('id', $user_id)->increment('points', $points);
        return response()->json([
            "status" => "Done",
        ], 200);
    }
        //Get Users Info
        public function getUser(Request $request){
            $user = User::with('gainedRewards', 'games')->where('id', $request->user_id)->get();
    
            return response()->json([
                "status" => "success",
                "users" => $user,
            ], 200);
        }

    public function getColleagues(Request $request){
        $company_id = $request->company_id;
        $users = User::with('gainedRewards', 'games')->where('company_id', $company_id)->get();

        // $rewards = Reward::where('id', $users->gained_rewards->reward_id);
        return response()->json([
            "status" => "success",
            "users" => $users,
        ], 200);
    }
    // Add Badge API
    public function addBadge(Request $request){
        $user_id = $request->user_id;
        $badge = $request->badge;
        User::where('id', $user_id)->update(['badge'=>$badge]);
        return response()->json([
            "status" => "Done",
        ], 200);
    }
    // Edit User API
    public function editUser(Request $request){
        
        $user_id = $request->user_id;
        $name = $request->name;
        $email = $request->email;
        $country = $request->country;
        $city = $request->city;
        $profile_img = $request->profile_img;
        $job_title = $request->job_title;
        $description = $request->description;
        User::where('id', $user_id)->update(['name'=>$name,
                                            'email'=>$email,
                                            'profile_img'=>$profile_img,
                                            'country'=>$country,
                                            'city'=>$city,
                                            'job_title'=>$job_title,
                                            'description'=>$description]);
        return response()->json([
            "status" => "Done",
        ], 200);
    }
    // Delete User API
    public function deleteUser(Request $request){
        User::where('id',$request->user_id)->delete();

        return response()->json([
            "Successfully Deleted",
        ], 200);
    }
    // Get Users' points API
    public function test(Request $request){
        $message = $request->message;
        $users = User::where('company_id', $message)->get();
        $users->makeHidden(['email', 'badge', 'profile_img', "country", "city", "description", "email_verified_at", "user_type","job_title", "created_at","updated_at", "level", "id", "company_id"]);
        //echo $users;
        event(new MyEvent([$users]));
    }
}
