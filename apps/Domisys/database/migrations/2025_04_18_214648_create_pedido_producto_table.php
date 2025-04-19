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
        Schema::create('pedido_producto', function (Blueprint $table) {
            $table->string('id', 10)->unique('domisys_primary');
            $table->integer('cantidad_producto');
            $table->decimal('subtotal', 10);
            $table->string('pedido_id', 10)->index('domisys_idx_pedido_id');
            $table->string('producto_id', 10)->index('domisys_idx_product_id');

            $table->primary(['id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pedido_producto');
    }
};
