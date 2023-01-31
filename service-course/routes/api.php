<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MentorController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\ChapterController;
use App\Http\Controllers\LessonController;
use App\Http\Controllers\ImageCourseController;

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

Route::get('mentors', [MentorController::class, 'index']);
Route::get('mentors/{id}', [MentorController::class, 'show']);
Route::post('mentors', [MentorController::class, 'create']);
Route::put('mentors/{id}', [MentorController::class, 'update']);
Route::delete('mentors/{id}', [MentorController::class, 'destroy']);

Route::get('courses', [CourseController::class, 'index']);
Route::post('courses', [CourseController::class, 'create']);
Route::put('courses/{id}', [CourseController::class, 'update']);
Route::delete('courses/{id}', [CourseController::class, 'destroy']);

Route::get('chapter', [ChapterController::class, 'index']);
Route::get('chapter/{id}', [ChapterController::class, 'show']);
Route::post('chapter', [ChapterController::class, 'create']);
Route::put('chapter/{id}', [ChapterController::class, 'update']);
Route::delete('chapter/{id}', [ChapterController::class, 'destroy']);

Route::get('lesson', [LessonController::class, 'index']);
Route::get('lesson/{id}', [LessonController::class, 'show']);
Route::post('lesson', [LessonController::class, 'create']);
Route::put('lesson/{id}', [LessonController::class, 'update']);
Route::delete('lesson/{id}', [LessonController::class, 'destroy']);

Route::post('image-courses', [ImageCourseController::class, 'create']);
Route::delete('image-courses/{id}', [ImageCourseController::class, 'destroy']);