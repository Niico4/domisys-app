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
        Schema::table('historial_pedidos', function (Blueprint $table) {
            $table->foreign(['pedido_id'], 'fk_historial_pedidos_pedido1')->references(['id'])->on('pedido')->onUpdate('no action')->onDelete('no action');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('historial_pedidos', function (Blueprint $table) {
            $table->dropForeign('fk_historial_pedidos_pedido1');
        });
    }
};
