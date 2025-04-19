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
        Schema::create('transferencia_bancaria', function (Blueprint $table) {
            $table->string('id', 10)->unique('domisys_primary');
            $table->string('numero_cuenta', 20);
            $table->string('banco', 30);

            $table->primary(['id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('transferencia_bancaria');
    }
};
