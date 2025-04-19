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
        Schema::create('tarjeta', function (Blueprint $table) {
            $table->string('id', 10)->unique('domisys_primary');
            $table->string('numero_tarjeta', 15);
            $table->dateTime('fecha_expiracion');
            $table->integer('codigo_seguridad');

            $table->primary(['id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tarjeta');
    }
};
