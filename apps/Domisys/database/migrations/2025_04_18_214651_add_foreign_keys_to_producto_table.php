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
        Schema::table('producto', function (Blueprint $table) {
            $table->foreign(['categoria_id'], 'fk_producto_categoria1')->references(['id'])->on('categoria')->onUpdate('no action')->onDelete('no action');
            $table->foreign(['impuesto_id'], 'fk_producto_impuesto1')->references(['id'])->on('impuesto')->onUpdate('no action')->onDelete('no action');
            $table->foreign(['inventario_id'], 'fk_producto_inventario1')->references(['id'])->on('inventario')->onUpdate('no action')->onDelete('no action');
            $table->foreign(['lote_id'], 'producto_lote_id_fk')->references(['id'])->on('lote')->onUpdate('no action')->onDelete('no action');
            $table->foreign(['proveedor_id'], 'producto_proveedor_id_fk')->references(['id'])->on('proveedor')->onUpdate('no action')->onDelete('no action');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('producto', function (Blueprint $table) {
            $table->dropForeign('fk_producto_categoria1');
            $table->dropForeign('fk_producto_impuesto1');
            $table->dropForeign('fk_producto_inventario1');
            $table->dropForeign('producto_lote_id_fk');
            $table->dropForeign('producto_proveedor_id_fk');
        });
    }
};
