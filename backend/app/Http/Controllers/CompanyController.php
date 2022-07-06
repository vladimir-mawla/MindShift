<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Company;

class CompanyController extends Controller
{
    //Add Company API
    public function addCompany(Request $request){
        $company = new Company;
        $company->name = $request->name;
        $company->description = $request->description;
        $company->location = $request->location;
        $company->employees_number = $request->employees_number;
        $company->save();

        return response()->json([
            "status" => "Success",
            "company" => $company,
        ], 200);
    }
    // Delete Company API
    public function deleteCompany(Request $request){
        Company::where('id',$request->company_id)->delete();

        return response()->json([
            "Successfully Deleted",
        ], 200);
    }
    // Edit Company API
    public function editCompany(Request $request){
    
        $company_id = $request->company_id;
        $name = $request->name;
        $location = $request->location;
        $employees_number = $request->employees_number;
        $description = $request->description;
        Company::where('id', $company_id)->update(['name'=>$name,
                                            'location'=>$location,
                                            'employees_number'=>$employees_number,
                                            'description'=>$description]);
        return response()->json([
            "status" => "Done",
        ], 200);
    }
    // Get Company API
    public function getCompanies(){
        $companies = Company::all();

        return response()->json([
            "status" => "success",
            "companies" => $companies,
        ], 200);
    }

}
