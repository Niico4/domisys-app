<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('direccion', function (Blueprint $table) {
            $table->foreign(['cliente_id'], 'fk_direccion_cliente1')->references(['id'])->on('cliente')->onUpdate('no action')->onDelete('no action');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('direccion', function (Blueprint $table) {
            $table->dropForeign('fk_direccion_cliente1');
        });
    }
};
