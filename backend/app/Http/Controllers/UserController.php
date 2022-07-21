<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    //Get Company Users
    public function getUsers(Request $request){
        $users = User::all()->where('company_id', $request->company_id);

        return response()->json([
            "status" => "success",
            "users" => $users,
        ], 200);
    }
}
