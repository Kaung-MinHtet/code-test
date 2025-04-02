<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::post('/post-trip', function() {
    $response = Http::post(env('AYA_SOMPO_AUTH_URL'), [
        'username' => 'user1',
        'password' => 'user@123'
    ]);
    return response()->json($response['access_token']);
})->name('post-trip');
