<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Company;

class CompanyController extends Controller
{
    //Add Company API
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
    // Delete Company API
    public function deleteCompany(Request $request){
        Company::where('id',$request->company_id)->delete();

        return response()->json([
            "Successfully Deleted",
        ], 200);
    }
}
