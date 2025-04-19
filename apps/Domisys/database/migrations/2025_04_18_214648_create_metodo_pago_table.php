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
        Schema::create('metodo_pago', function (Blueprint $table) {
            $table->string('id', 10)->unique('domisys_primary');
            $table->string('tarjeta_id', 10)->nullable()->index('domisys_metodo_pago_tarjeta_id_fk');
            $table->string('transferencia_bancaria_id', 10)->nullable()->index('domisys_metodo_pago_transferencia_bancaria_id_fk');
            $table->string('efectivo_id', 10)->nullable()->index('domisys_metodo_pago_efectivo_id_fk');

            $table->primary(['id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('metodo_pago');
    }
};
