<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Course;
use App\Models\Review;
use Validator;

class ReviewController extends Controller
{

    public function show($id){
        $course = Course::find($id);
        if(!$course){
            return response()->json([
                'status' => 'error',
                'message' => 'course not found'
            ], 404);
        }

        $reviews = Review::where('course_id', '=', $id)->get()->toArray();

        if(count($reviews) > 0){
            $userIds = array_column($reviews, 'user_id');
            $users = getUserByIds($userIds);
            if($users['status'] == 'error'){
                $reviews = [];
            } else {
                foreach ($reviews as $key => $review) {
                    $userIndex = array_search($review['user_id'], array_column($users['data'], 'id'));
                    $reviews[$key]['users'] = $users['data'][$userIndex];
                    unset($reviews[$key]['user_id']);
                }
            }
        }

        return response()->json([
            'status' => 'success',
            'data' => $reviews
        ]);
    }

    public function create(Request $request)
    {
        $rules = [
            'user_id' => 'required|integer',
            'course_id' => 'required|integer',
            'rating' => 'required|integer|min:1|max:5',
            'note' => 'string'
        ];

        $data = $request->all();

        $validator = Validator::make($data, $rules);

        if($validator->fails()){
            return response()->json([
                'status' => 'error',
                'message' => $validator->errors()
            ], 400);
        }

        $courseId = $request->input('course_id');
        $course = Course::find($courseId);

        if(!$course){
            return response()->json([
                'status' => 'error',
                'message' => 'course not found'
            ], 404);
        }

        $userId = $request->input('user_id');
        $user = getUser($userId);

        if($user['status'] == 'error'){
            return response()->json([
                'status' => $user['status'],
                'message' => $user['message']
            ], $user['http_code']);
        }

        $isExistReview = Review::where('course_id', '=', $courseId)
                                ->where('user_id', '=', $userId)
                                ->exists();

        if($isExistReview){
            return response()->json([
                'status' => 'error',
                'message' => 'review already exist'
            ], 409);
        }

        $review = Review::create($data);

        return response()->json([
            'status' => 'success',
            'data' => $review
        ]);
    }

    public function update(Request $request, $id)
    {
        $rules = [
            'rating' => 'integer|min:1|max:5',
            'note' => 'string'
        ];

        $data = $request->except('user_id', 'course_id');

        $validator = Validator::make($data, $rules);

        if($validator->fails()){
            return response()->json([
                'status' => 'error',
                'message' => $validator->errors()
            ], 400);
        }

        $review = Review::find($id);
        if(!$review){
            return response()->json([
                'status' => 'error',
                'message' => 'review not found'
            ], 404);
        }

        $review->fill($data);
        $review->save();

        return response()->json([
            'status' => 'success',
            'data' => $review
        ]);
    }

    public function destroy($id)
    {
        $review = Review::find($id);
        if(!$review){
            return response()->json([
                'status' => 'error',
                'message' => 'review not found'
            ], 404);
        }

        $review->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'review deleted'
        ]);
    }
}
