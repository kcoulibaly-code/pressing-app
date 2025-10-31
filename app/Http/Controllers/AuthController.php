<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    //

    public function login(Request $request)
    {
        $request->validate([
            'telephone' => 'required',
            'mot_de_passe' => 'required'
        ]);

        $employe = User::where('telephone', $request->telephone)->first();

        if (!$employe || !Hash::check($request->mot_de_passe, $employe->mot_de_passe)) {
            return response()->json(['message' => 'Identifiants incorrects.'], 401);
        }

        $token = $employe->createToken('presslink')->plainTextToken;

        return response()->json([
            'token' => $token,
            'user' => $employe->only(['id_employe', 'nom', 'role', 'id_pressing'])
        ]);
    }
}
