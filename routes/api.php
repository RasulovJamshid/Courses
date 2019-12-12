<?php

use Illuminate\Http\Request;

// Route::get('/', function () {
//     return 'Hello World';
// });
Route::get('courses', 'CourseController@index');
Route::post('courses', 'CourseController@store');
Route::get('courses/{id}', 'CourseController@show');
Route::get('search/{searchTerm}', 'CourseController@search');
// Route::put('courses/{courses}', 'CoursesController@markAsCompleted');
Route::post('properties', 'PropertyController@store');
Route::get('properties', function(Request $request){
    echo $request->url();
});
// Route::put('properties/{properties}', 'PropertiesController@markAsCompleted');
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
