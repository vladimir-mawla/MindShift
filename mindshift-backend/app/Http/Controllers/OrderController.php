<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Order;

class OrderController extends Controller
{
    // Add Order API
    public function addOrder(Request $request){
        $order = new Order;
        $order->order = $request->order;
        $order->reward_id = $request->reward_id;
        $order->user_id = $request->user_id;
        $order->company_id = $request->company_id;
        $order->save();

        return response()->json([
            "status" => "Success"
        ], 200);
    }

    // Get Orders API
    public function getOrders(Request $request){
        $user_id = $request->user_id;
        $orders = Order::where('accepted', 0)->where('user_id', $user_id)->get();

        return response()->json([
            "status" => "success",
            "orders" => $orders,
        ], 200);
    }
    // Mark Order Done API
    public function markDone(Request $request){
        $order_id = $request->order_id;
        Order::where('id', $order_id)->update(['accepted'=> 1 ]);

        return response()->json([
            "status" => "success",
        ], 200);
    }
}
