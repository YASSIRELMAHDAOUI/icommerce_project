<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Commande extends Model
{
    use HasFactory;

    protected $fillable = [
        'produit_id',
        'firstName',
        'lastName',
        'email',
        'phone',
        'address',
        'quantity'
    ];

    public function produit()
    {
        return $this->belongsTo(Produit::class);
    }
}

