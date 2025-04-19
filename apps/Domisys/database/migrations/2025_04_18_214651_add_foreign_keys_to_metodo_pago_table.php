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
        Schema::table('metodo_pago', function (Blueprint $table) {
            $table->foreign(['efectivo_id'], 'metodo_pago_efectivo_id_fk')->references(['id'])->on('efectivo')->onUpdate('no action')->onDelete('no action');
            $table->foreign(['tarjeta_id'], 'metodo_pago_tarjeta_id_fk')->references(['id'])->on('tarjeta')->onUpdate('no action')->onDelete('no action');
            $table->foreign(['transferencia_bancaria_id'], 'metodo_pago_transferencia_bancaria_id_fk')->references(['id'])->on('transferencia_bancaria')->onUpdate('no action')->onDelete('no action');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('metodo_pago', function (Blueprint $table) {
            $table->dropForeign('metodo_pago_efectivo_id_fk');
            $table->dropForeign('metodo_pago_tarjeta_id_fk');
            $table->dropForeign('metodo_pago_transferencia_bancaria_id_fk');
        });
    }
};
