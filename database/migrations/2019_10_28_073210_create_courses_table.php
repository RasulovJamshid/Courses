<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCoursesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('courses', function (Blueprint $table) {
            $table->string('name');
            $table->string('cost');
            // $table->string('location');
            $table->string('title');
            $table->string('description');
            // $table->string('file');
            $table->string('url');
            $table->json('type');
            $table->string('tNumber');
            $table->increments('id');
            $table->timestamps();
            $table->boolean('recomended');
            $table->string('brief');
            $table->json('regionType');
            
            
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('courses');
    }
}
