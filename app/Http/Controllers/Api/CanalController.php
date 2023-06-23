<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreCanalRequest;
use App\Http\Requests\UpdateCanalRequest;
use App\Http\Resources\CanalResource;
use App\Models\Canal;
use Illuminate\Http\Request;

class CanalController extends Controller
{
    public function index()
    {
        return CanalResource::collection(Canal::all());
    }

    public function show(Canal $canal)
    {
        return new CanalResource($canal);
    }


    public function store(StoreCanalRequest $request)
    {
        Canal::create($request->validated());
        return response()->json("created",);
    }

    public function update(StoreCanalRequest $request, Canal $canal)
    {

        $canal->update($request->validated());
        return response()->json("updated",);
    }

    public function destroy(Canal $canal)
    {
        $canal->delete();
        return response()->json("deleted",);
    }
}
