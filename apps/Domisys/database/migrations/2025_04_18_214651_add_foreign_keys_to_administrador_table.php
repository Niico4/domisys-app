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
        Schema::table('administrador', function (Blueprint $table) {
            $table->foreign(['inventario_id'], 'fk_administrador_inventario1')->references(['id'])->on('inventario')->onUpdate('no action')->onDelete('no action');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('administrador', function (Blueprint $table) {
            $table->dropForeign('fk_administrador_inventario1');
        });
    }
};
