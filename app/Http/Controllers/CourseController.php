<?php

namespace App\Http\Controllers;

use App\Course;
use Illuminate\Http\Request;

class CourseController extends Controller
{
    public function index()
  {
     $data= Course::query()->orderBy('id','desc')->get();
     return $data->toJson();
  }

 

  public function store(Request $request)
  { 
      // Course::truncate();
      $course = Course::create($request->all());
    
    
      return $course->toJson();
    // return response()->json(['message'=>$request->name],200);
    
  }


  public function search($searchTerm)
  { 
      // Course::truncate();
      $course = Course::query()
        ->where('name','LIKE',$searchTerm)
        ->get();
    
    
      return $course->toJson();
    // return response()->json(['message'=>$request->name],200);
    
  }

  public function show($id)
  {
    $course = Course::query()->where('id',$id)->get();

    return $course->toJson();
  }

//   public function markAsCompleted(Course $course)
//   {
//     $course->is_completed = true;
//     $course->update();

//     return response()->json('course updated!');
//   }
}

