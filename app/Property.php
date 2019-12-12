<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Property extends Model
{
    protected $fillable = ['name','cost','location','description','url','type','tNumber'];
}
