<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
  protected $fillable = ['name','imageRef','cost','title','description','url','type','typeS','tNumber','recomended','brief','regionType','regionTypeS'];
  
   
}

