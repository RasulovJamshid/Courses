<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Property;

class PropertyController extends Controller
{
    public function store(Request $request)
      {
        $validatedData = $request->validate([
            'title' => 'required',
            'cost' => 'required',
            'location' => 'required',
            'name' => 'required',
            'description' => 'required',
            'type' => 'required',
            'url' => 'required',
            ]);

        $property = Property::create([
          'title' => $validatedData['title'],
          'description' => $validatedData['description'],
          'name' => $validatedData['name'],
          'cost' => $validatedData['cost'],
          'location' => $validatedData['location'],
          'type' => $validatedData['type'],
          'url' => $validatedData['url'],
          // 'property_id' => $request->property_id,
        ]);

        return $property->toJson();
      }

    //   public function markAsCompleted(Task $property)
    //   {
    //     $property->is_completed = true;
    //     $property->update();

    //     return response()->json('Task updated!');
    //   }
}
