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
        Schema::table('pedido', function (Blueprint $table) {
            $table->foreign(['cliente_id'], 'pedido_cliente_id_fk')->references(['id'])->on('cliente')->onUpdate('no action')->onDelete('no action');
            $table->foreign(['metodo_pago_id'], 'pedido_id_metodo_pago_fk')->references(['id'])->on('metodo_pago')->onUpdate('no action')->onDelete('no action');
            $table->foreign(['repartidor_id'], 'pedido_id_repartidor_fk')->references(['id'])->on('repartidor')->onUpdate('no action')->onDelete('no action');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('pedido', function (Blueprint $table) {
            $table->dropForeign('pedido_cliente_id_fk');
            $table->dropForeign('pedido_id_metodo_pago_fk');
            $table->dropForeign('pedido_id_repartidor_fk');
        });
    }
};
