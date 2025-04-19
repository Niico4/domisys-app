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
        Schema::create('administrador', function (Blueprint $table) {
            $table->string('id', 10)->unique('domisys_primary');
            $table->string('primer_nombre', 20);
            $table->string('primer_apellido', 20);
            $table->string('numero_contacto', 15);
            $table->string('correo_electronico', 30);
            $table->string('password', 20);
            $table->string('inventario_id', 10)->index('fk_administrador_inventario1_idx');

            $table->primary(['id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('administrador');
    }
};
