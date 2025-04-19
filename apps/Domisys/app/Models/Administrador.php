<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Administrador extends Model
{
    protected $table = 'administrador';
    protected $primaryKey = 'id';
    protected $fillable = ['id', 'primer_nombre','primer_apellido','numero_contacto', 'correo_electronico', 'password'];
}
