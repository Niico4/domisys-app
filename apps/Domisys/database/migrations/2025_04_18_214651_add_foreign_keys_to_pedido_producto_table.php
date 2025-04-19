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
        Schema::table('pedido_producto', function (Blueprint $table) {
            $table->foreign(['pedido_id'], 'pedido_producto_pedido_id_fk')->references(['id'])->on('pedido')->onUpdate('no action')->onDelete('no action');
            $table->foreign(['producto_id'], 'pedido_producto_product_id_fk')->references(['id'])->on('producto')->onUpdate('no action')->onDelete('no action');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('pedido_producto', function (Blueprint $table) {
            $table->dropForeign('pedido_producto_pedido_id_fk');
            $table->dropForeign('pedido_producto_product_id_fk');
        });
    }
};
