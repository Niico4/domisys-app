<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Cliente extends Mode{
    protected $table = 'cliente';
    protected $primaryKey = 'id';
    protected $fillable = ['id', 'nombre', 'correo_electronico', 'telefono','password'
    ];
        
}
