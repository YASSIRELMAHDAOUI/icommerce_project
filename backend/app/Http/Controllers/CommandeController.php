<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Commande;

class CommandeController extends Controller
{
    // Liste toutes les commandes
    public function index()
    {
        // Récupère toutes les commandes avec le produit associé
        $commandes = Commande::with('produit')->get();
        return response()->json($commandes);
    }

    // Créer une commande
    public function store(Request $request)
    {
        // Validation
        $request->validate([
            'produit_id' => 'required|exists:produits,id',
            'firstName'  => 'required|string|max:255',
            'lastName'   => 'required|string|max:255',
            'email'      => 'required|email|max:255',
            'phone'      => 'nullable|string|max:20',
            'address'    => 'required|string|max:255',
            'quantity'   => 'required|integer|min:1',
        ]);

        // Création de la commande
        $commande = Commande::create($request->all());

        return response()->json([
            'message' => 'Commande enregistrée avec succès',
            'commande' => $commande
        ]);
    }

    // Afficher une commande
    public function show($id)
    {
        $commande = Commande::with('produit')->findOrFail($id);
        return response()->json($commande);
    }

    // Supprimer une commande
    public function destroy($id)
    {
        $commande = Commande::findOrFail($id);
        $commande->delete();

        return response()->json(['message' => 'Commande supprimée avec succès']);
    }
}
