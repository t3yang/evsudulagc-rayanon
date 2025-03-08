<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    public function getUsers(Request $request)
    {
        $this->validate($request, [
            'username' => 'required|string',
            'password' => 'required|string'
        ]);

        $user = DB::table('users')->where('username', $request->username)->first();

        if (!$user) {
            return response()->json([
                'message' => 'User not found'
            ], 404);
        }

        if (!$user || $request->password !== $user->password) {
            return response()->json([
                'message' => 'Invalid username or password'
            ], 401);
        }

        return response()->json([
            'message' => 'Success',
            'user' => [
                'id' => $user->id,
                'username' => $user->username,
                'name' => $user->name,
                'age' => $user->age
            ]
        ]);
    }
}
