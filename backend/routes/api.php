<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\GameController;
use App\Http\Controllers\QuestionController;
use App\Http\Controllers\AnswerController;
use App\Http\Controllers\CompanyController;
use App\Http\Controllers\RewardController;
use App\Http\Controllers\QuestionOptionController;
use App\Http\Controllers\LeaderboardController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\GainedRewardController;
use App\Http\Controllers\UserGameController;
use App\Http\Controllers\BadgeController;

Route::group(['prefix' => 'v1'], function(){

    Route::controller(AuthController::class)->group(function () {
        Route::post('login', 'login')->name('home');
        Route::post('register', 'register');
        Route::post('logout', 'logout');

    });
    
    Route::group(['prefix' => 'games'], function(){
        Route::post('/add_game', [GameController::class, 'addGame']);
        Route::post('/delete_game', [GameController::class, 'deleteGame']);
        Route::get('/get_games', [GameController::class, 'getGames']);
        Route::post('/add_game_points', [GameController::class, 'addGamePoints']);
        Route::post('/add_game_questions', [GameController::class, 'addGameQuestions']);
    });

    Route::group(['prefix' => 'questions'], function(){
        Route::post('/add_question', [QuestionController::class, 'addQuestion']);
        Route::post('/get_questions', [QuestionController::class, 'getQuestions']);

    });

    Route::group(['prefix' => 'answers'], function(){
        Route::post('/add_answer', [AnswerController::class, 'addAnswer']);
        Route::post('/check_answer', [AnswerController::class, 'checkAnswer']);

    });

    Route::group(['prefix' => 'rewards'], function(){
        Route::post('/add_reward', [RewardController::class, 'addReward']);
        Route::post('/delete_reward', [RewardController::class, 'deleteReward']);
        Route::get('/get_rewards', [RewardController::class, 'getRewards']);

    });

    Route::group(['prefix' => 'question_options'], function(){
        Route::post('/add_option', [QuestionOptionController::class, 'addOption']);
        Route::post('/get_options', [QuestionOptionController::class, 'getOptions']);

    });

    Route::group(['prefix' => 'leaderboards'], function(){
        Route::post('/get_leaderboard', [LeaderboardController::class, 'getLeaderboard']);
        Route::get('/leader_pusher', [LeaderboardController::class, 'pushLeader']);

    });

    Route::group(['prefix' => 'orders'], function(){
        Route::post('/add_order', [OrderController::class, 'addOrder']);
        Route::post('/get_orders', [OrderController::class, 'getOrders']);
        Route::post('/mark_order_done', [OrderController::class, 'markDone']);

    });

    Route::group(['prefix' => 'users'], function(){
        Route::post('/get_users', [UserController::class, 'getUsers']);
        Route::post('/points_control', [UserController::class, 'pointsControl']);
        Route::post('/get_user', [UserController::class, 'getUser']);
        Route::post('/add_badge', [UserController::class, 'addBadge']);
        Route::post('/edit_user', [UserController::class, 'editUser']);
        Route::post('/delete_user', [UserController::class, 'deleteUser']);
        Route::post('/get_colleagues', [UserController::class, 'getColleagues']);
        Route::post('/test', [UserController::class, 'test']);

    });

    Route::group(['prefix' => 'gained_rewards'], function(){
        Route::post('/add_gained_reward', [GainedRewardController::class, 'addGainedReward']);
        
    });

    Route::group(['prefix' => 'played_games'], function(){
        Route::post('/add_played_game', [UserGameController::class, 'addPlayedGame']);
        Route::post('/get_played_games', [UserGameController::class, 'getPlayedGames']);

    });

    Route::group(['prefix' => 'badges'], function(){
        Route::get('/get_badges', [BadgeController::class, 'getBadges']);

    });

    // Route::middleware('isAdmin')->group (function(){
    //     Route::group(['prefix' => 'games'], function(){
    //         Route::post('/add_game', [GameController::class, 'addGame']);
    //         Route::post('/delete_game', [GameController::class, 'deleteGame']);
    //         Route::post('/add_game_points', [GameController::class, 'addGamePoints']);
    //         Route::post('/add_game_questions', [GameController::class, 'addGameQuestions']);
    //     });
    
    //     Route::group(['prefix' => 'questions'], function(){
    //         Route::post('/add_question', [QuestionController::class, 'addQuestion']);
    
    //     });
    
    //     Route::group(['prefix' => 'rewards'], function(){
    //         Route::post('/add_reward', [RewardController::class, 'addReward']);
    //         Route::post('/delete_reward', [RewardController::class, 'deleteReward']);
    
    //     });
    
    //     Route::group(['prefix' => 'question_options'], function(){
    //         Route::post('/add_option', [QuestionOptionController::class, 'addOption']);
    
    //     });
    
    //     Route::group(['prefix' => 'orders'], function(){
    //         Route::post('/get_orders', [OrderController::class, 'getOrders']);
    //         Route::post('/mark_order_done', [OrderController::class, 'markDone']);
    
    //     });
    
    //     Route::group(['prefix' => 'users'], function(){
    //         Route::post('/add_badge', [UserController::class, 'addBadge']);
    //         Route::post('/delete_user', [UserController::class, 'deleteUser']);
    
    //     });
    
    //     Route::group(['prefix' => 'badges'], function(){
    //         Route::get('/get_badges', [BadgeController::class, 'getBadges']);
    
    //     });
    // });
    // // Auth Middleware
    // Route::middleware('auth')->group (function(){
    //     Route::group(['prefix' => 'games'], function(){
    //         Route::get('/get_games', [GameController::class, 'getGames']);
    //     });
    
    //     Route::group(['prefix' => 'questions'], function(){
    //         Route::post('/add_question', [QuestionController::class, 'addQuestion']);
    //         Route::post('/get_questions', [QuestionController::class, 'getQuestions']);
    
    //     });
    
    //     Route::group(['prefix' => 'answers'], function(){
    //         Route::post('/add_answer', [AnswerController::class, 'addAnswer']);
    //         Route::post('/check_answer', [AnswerController::class, 'checkAnswer']);
    
    //     });
    
    //     Route::group(['prefix' => 'rewards'], function(){
    //         Route::get('/get_rewards', [RewardController::class, 'getRewards']);
    
    //     });
    
    //     Route::group(['prefix' => 'question_options'], function(){
    //         Route::post('/get_options', [QuestionOptionController::class, 'getOptions']);
    
    //     });
    
    //     Route::group(['prefix' => 'leaderboards'], function(){
    //         Route::post('/get_leaderboard', [LeaderboardController::class, 'getLeaderboard']);
    //         Route::get('/leader_pusher', [LeaderboardController::class, 'pushLeader']);
    
    //     });
    
    //     Route::group(['prefix' => 'orders'], function(){
    //         Route::post('/add_order', [OrderController::class, 'addOrder']);
    
    //     });
    
    //     Route::group(['prefix' => 'users'], function(){
    //         Route::post('/get_users', [UserController::class, 'getUsers']);
    //         Route::post('/points_control', [UserController::class, 'pointsControl']);
    //         Route::post('/get_user', [UserController::class, 'getUser']);
    //         Route::post('/edit_user', [UserController::class, 'editUser']);
    //         Route::post('/get_colleagues', [UserController::class, 'getColleagues']);
    //         Route::post('/test', [UserController::class, 'test']);
    
    //     });
    
    //     Route::group(['prefix' => 'gained_rewards'], function(){
    //         Route::post('/add_gained_reward', [GainedRewardController::class, 'addGainedReward']);
            
    //     });
    
    //     Route::group(['prefix' => 'played_games'], function(){
    //         Route::post('/add_played_game', [UserGameController::class, 'addPlayedGame']);
    
    //     });
    // });

});