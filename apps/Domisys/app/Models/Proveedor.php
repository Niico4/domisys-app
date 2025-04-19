<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Proveedor extends Model
{
    protected $table = 'proveedor';
    protected $primaryKey = 'id';
    protected $fillable = ['id', 'nombre_empresa', 'numero_contacto', 'direccion', 'correo_electronico'
    ];

}


