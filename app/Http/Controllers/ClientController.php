<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Client;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class ClientController extends Controller
{
    /**
     * Display a listing of clients
     */
    public function index(): JsonResponse
    {
        $clients = Client::with('pressing')
            ->where('actif', true)
            ->orderBy('date_creation', 'desc')
            ->paginate(15);
        
        return response()->json($clients);
    }

    /**
     * Store a newly created client
     */
    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'id_pressing' => 'required|exists:pressings,id_pressing',
            'nom' => 'required|string|max:255',
            'telephone' => 'required|string|max:20',
            'email' => 'nullable|email|max:255',
            'responsable' => 'nullable|string|max:255',
        ]);

        $validated['actif'] = true;
        $validated['date_creation'] = now();

        $client = Client::create($validated);
        
        return response()->json([
            'message' => 'Client créé avec succès',
            'data' => $client->load('pressing')
        ], 201);
    }

    /**
     * Display the specified client
     */
    public function show($id): JsonResponse
    {
        $client = Client::with(['pressing', 'commandes.camlecs', 'commandes.paiements'])
            ->findOrFail($id);
        
        return response()->json($client);
    }

    /**
     * Update the specified client
     */
    public function update(Request $request, $id): JsonResponse
    {
        $client = Client::findOrFail($id);

        $validated = $request->validate([
            'id_pressing' => 'sometimes|exists:pressings,id_pressing',
            'nom' => 'sometimes|string|max:255',
            'telephone' => 'sometimes|string|max:20',
            'email' => 'nullable|email|max:255',
            'responsable' => 'nullable|string|max:255',
            'actif' => 'sometimes|boolean',
        ]);

        $client->update($validated);
        
        return response()->json([
            'message' => 'Client modifié avec succès',
            'data' => $client->load('pressing')
        ]);
    }

    /**
     * Remove the specified client (soft delete)
     */
    public function destroy($id): JsonResponse
    {
        $client = Client::findOrFail($id);
        $client->update(['actif' => false]);
        
        return response()->json([
            'message' => 'Client désactivé avec succès'
        ]);
    }

    /**
     * Search clients
     */
    public function search(Request $request): JsonResponse
    {
        $query = Client::with('pressing')
            ->where('actif', true);

        if ($request->has('nom')) {
            $query->where('nom', 'like', '%' . $request->nom . '%');
        }

        if ($request->has('telephone')) {
            $query->where('telephone', 'like', '%' . $request->telephone . '%');
        }

        $clients = $query->paginate(15);
        
        return response()->json($clients);
    }
}