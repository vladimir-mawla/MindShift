<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Company;

class CompanyController extends Controller
{
    public function addCompany(Request $request){
        $company = new Company;
        $name = $request->name;
        $description = $request->description;
        $location = $request->location;
        $employees_number = $request->employees_number;
        $company->save();

        return response()->json([
            "status" => "Success",
            "compant" => $company,
        ], 200);
    }
}
