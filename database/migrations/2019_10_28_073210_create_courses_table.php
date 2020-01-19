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
            $table->text('description');
            $table->string('imageRef');
            $table->string('url');
            $table->string('type');
            $table->integer('typeS');
            $table->string('tNumber');
            $table->increments('id');
            $table->timestamps();
            $table->boolean('recomended');
            $table->text('brief');
            $table->string('regionType');
            $table->integer('regionTypeS');
            
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
