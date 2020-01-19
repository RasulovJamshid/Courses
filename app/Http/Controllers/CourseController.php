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
        ->where('name','LIKE','%'.$searchTerm.'%')
        ->orWhere("title",'LIKE','%'.$searchTerm.'%')
        ->get();
    
    
      return $course->toJson();
    // return response()->json(['message'=>$request->name],200);
    
  }

  public function imageUpload(Request  $request)

  {
      $request->validate([
        'file'=> 'mimes:jpeg,jpg,png,gif|required|max:2048'
      ]);  
    
        $image=$request->file("file"); 
      
      // return response()->json(['image'=>$image],200);

      $imageName = time().'.'.$image->getClientOriginalExtension();
      $image->move(public_path('images'), $imageName);
      return response()->json(['success_path'=>secure_asset('images/'.$imageName)],200);
  }


  public function searchtype($searchType,$type)
  { 
      // Course::truncate();
      $course = Course::query()
        ->where('type','=',$searchType)->where('typeS','=',$type)
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

