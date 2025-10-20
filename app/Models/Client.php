<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    protected $table = 'clients';
    protected $primaryKey = 'id_client';
    public $timestamps = false;

    protected $fillable = [
        'id_pressing',
        'nom',
        'telephone',
        'email',
        'responsable',
        'actif',
        'date_creation'
    ];

    protected $casts = [
        'actif' => 'boolean',
        'date_creation' => 'datetime'
    ];

    public function pressing()
    {
        return $this->belongsTo(Pressing::class, 'id_pressing', 'id_pressing');
    }

    public function commandes()
    {
        return $this->hasMany(Commande::class, 'id_client', 'id_client');
    }
}