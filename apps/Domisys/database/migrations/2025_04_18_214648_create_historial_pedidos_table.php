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
        Schema::create('historial_pedidos', function (Blueprint $table) {
            $table->string('id', 10)->primary();
            $table->enum('estado', ['completado', 'cancelado']);
            $table->string('pedido_id', 10)->index('fk_historial_pedidos_pedido1_idx');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('historial_pedidos');
    }
};
