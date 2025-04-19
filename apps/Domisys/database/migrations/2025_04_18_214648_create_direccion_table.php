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
        Schema::create('direccion', function (Blueprint $table) {
            $table->string('id', 10)->primary();
            $table->string('barrio', 20);
            $table->string('calle', 30);
            $table->string('detalles', 40)->nullable();
            $table->string('cliente_id', 10)->index('fk_direccion_cliente1_idx');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('direccion');
    }
};
