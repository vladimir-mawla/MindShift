<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\GameController;

Route::group(['prefix' => 'v1'], function(){

    Route::controller(AuthController::class)->group(function () {
        Route::post('login', 'login');
        Route::post('register', 'register');
        Route::post('logout', 'logout');
        Route::post('refresh', 'refresh');

    });

    Route::group(['prefix' => 'games'], function(){
        Route::post('/add_game', [GameController::class, 'addGame']);
        Route::post('/search_game', [GameController::class, 'searchGame']);
    });

});