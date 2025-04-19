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
        Schema::create('impuesto', function (Blueprint $table) {
            $table->string('id', 10)->unique('domisys_primary');
            $table->string('tipo_impuesto', 20);
            $table->decimal('porcentaje', 5);

            $table->primary(['id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('impuesto');
    }
};
