<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Order;

class OrderController extends Controller
{
    // Add Order API
    public function addOrder(Request $request){
        $order = new Order;
        $order->request = $request->request;
        $order->reward_id = $request->question_id;
        $order->user_id = $request->user_id;
        $order->company_id = $request->company_id;
        $order->save();

        return response()->json([
            "status" => "Success"
        ], 200);
    }

    // Get Orders API
    public function getOrders(){
        $orders = Order::all()->where('accepted', 0);

        return response()->json([
            "status" => "success",
            "orders" => $orders,
        ], 200);
    }
}
