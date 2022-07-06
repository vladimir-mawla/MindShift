<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\GameController;
use App\Http\Controllers\QuestionController;
use App\Http\Controllers\AnswerController;
use App\Http\Controllers\CompanyController;

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
        Route::post('/delete_game', [GameController::class, 'deleteGame']);
        Route::get('/get_games', [GameController::class, 'getGames']);
        Route::post('/get_specific_game', [GameController::class, 'getGameById']);
        Route::post('/edit_game', [GameController::class, 'editGame']);
    });

    Route::group(['prefix' => 'questions'], function(){
        Route::post('/add_question', [QuestionController::class, 'addQuestion']);
        Route::post('/delete_question', [QuestionController::class, 'deleteQuestion']);
        Route::post('/get_questions', [QuestionController::class, 'getQuestions']);
        Route::post('/edit_question', [QuestionController::class, 'editQuestion']);

    });

    Route::group(['prefix' => 'answers'], function(){
        Route::post('/add_answer', [AnswerController::class, 'addAnswer']);
        Route::post('/get_question_answer', [AnswerController::class, 'getAnswerOfQuestion']);
        Route::post('/get_user_answer', [AnswerController::class, 'getAnswerOfUserOnQuestion']);
        Route::post('/check_answer', [AnswerController::class, 'checkAnswer']);

    });

    Route::group(['prefix' => 'companies'], function(){
        Route::post('/add_company', [CompanyController::class, 'addCompany']);
        Route::post('/delete_company', [CompanyController::class, 'deleteCompany']);
        Route::post('/edit_company', [CompanyController::class, 'editCompany']);
        Route::get('/get_companies', [CompanyController::class, 'getCompanies']);

    });

});