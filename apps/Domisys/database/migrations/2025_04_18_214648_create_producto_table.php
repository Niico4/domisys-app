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
        Schema::create('producto', function (Blueprint $table) {
            $table->string('id', 10)->unique('domisys_primary');
            $table->string('nombre_producto', 30);
            $table->integer('cantidad_disponible');
            $table->decimal('precio_unidad', 10);
            $table->string('unidad_medida', 15);
            $table->string('lote_id', 10)->index('domisys_idx_lote_id');
            $table->string('proveedor_id', 10)->index('domisys_idx_proveedor_id');
            $table->string('categoria_id', 10)->index('fk_producto_categoria1_idx');
            $table->string('impuesto_id', 10)->index('fk_producto_impuesto1_idx');
            $table->string('inventario_id', 10)->index('fk_producto_inventario1_idx');

            $table->primary(['id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('producto');
    }
};
