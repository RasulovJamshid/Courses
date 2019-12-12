<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
  protected $fillable = ['name','cost','title','description','url','type','tNumber','recomended','brief','regionType'];
  protected $casts=[
    'type'=>'array',
    'regionType'=>'array'
  ];
   
}

