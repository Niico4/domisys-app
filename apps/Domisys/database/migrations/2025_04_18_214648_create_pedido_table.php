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
        Schema::create('pedido', function (Blueprint $table) {
            $table->string('id', 10)->unique('domisys_primary');
            $table->dateTime('fecha_creacion');
            $table->decimal('monto_total', 10);
            $table->string('cliente_id', 10)->index('domisys_idx_cliente_id');
            $table->string('metodo_pago_id', 10)->index('pedido_id_metodo_pago_fk');
            $table->string('repartidor_id', 10)->index('pedido_id_repartidor_fk');

            $table->primary(['id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pedido');
    }
};
