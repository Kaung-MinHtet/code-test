<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;

class AYASompoAPIController extends Controller
{
    public function getProposalPage(Request $request)
    {
        $request->validate([
            'isDomestic' => 'required|boolean',
            'location' => 'nullable',
            'fromDate' => 'required',
            'toDate' => 'required',
            'travellerType' => 'required',
            'adults' => 'required',
            'children' => 'nullable',
            'mobileNumber' => 'nullable'
        ]);
    
        return Inertia::render('Proposal', [
            'formData' => [
                'isDomestic' => $request->isDomestic,
                'location' => $request->location,
                'fromDate' => $request->fromDate,
                'toDate' => $request->toDate,
                'travellerType' => $request->travellerType,
                'adults' => $request->adults,
                'children' => $request->children,
                'mobileNumber' => $request->mobileNumber,
            ]
        ]);
    }

    public function postAPI(Request $request)
    {
        try {
            // Check if token exists in cache
            $token = Cache::get('aya_sompo_access_token');

            if (!$token) {
                // Make the request since token is not available
                $authResponse = Http::post(env('AYA_SOMPO_AUTH_URL'), [
                    'username' => 'user1',
                    'password' => 'user@123'
                ]);
        
                // Check if request is successful
                if ($authResponse->successful()) {
                    $token = $authResponse['access_token'];
        
                    // Store token in cache for 6 hours
                    Cache::put('aya_sompo_access_token', $token, now()->addHours(6));
                }
            }

    
            // return dd($authResponse->json());
    
            $fromDate = Carbon::parse($request->fromDate); // Start date
            $toDate = Carbon::parse($request->toDate);   // End date
    
            $data = [
                "referenceNo" => "NTV/UAT/000010",
                "travelType" => $request->isDomestic ? "AYAGO" : "AYAJOY",
                "travelGroupPlan" => $request->travellerType == "Individual/Group" ? "TP0001" : "TP0002",
                "fromDate" => $request->fromDate,
                "toDate" => $request->toDate,
                "day" => $fromDate->diffInDays($toDate),
                "package" => $request->isDomestic ? "AYAGO" : "AYAJOY",
                "noOfTraveller" => $request->travellerType == "Individual/Group" ? $request->adults : ($request->adults + $request->children),
                "destinationFrom" => "Within Myanmar",
                "destinationTo" => $request->isDomestic ? "Within Myanmar" : $request->location,
                "adult" => $request->adults,
                "child" => $request->travellerType == "Individual/Group" ? "0" : $request->children,
                "basicAmountFlag" => true,
                "educationFlag" => true,
                "medicalAllowanceFlag" => false,
                "flightDelayFlag" => false,
                "baggageDelayFlag" => false,
                "lossBaggageFlag" => false,
                "premium" => "1000",
                "totalPremium" => "2000",
                "paymentDate" => "2025/4/10",
                "paymentChannel" => "MPU",
                "paymentStatus" => "Success",
                "currency" => "MMK",
                "TravellerInfos" => []
            ];
    
            if ($request->travellerType == "Individual/Group") {
                foreach ($request->adultsInfo as $info) {
                    // return dd($info);
                    $adultInfo = [
                        'name' => $info['name'],
                        'nrc' => $info['nrc'] ?? $info['passport'],
                        "mobileNumber" => $info['policyHolderMobileNumber'],
                        "emailAddress" => $info['email'],
                        "beneficiaryName" => $info['beneficiaryName'],
                        "beneficiaryContact" => $info['beneficiaryContact'],
                        "relationship" => "",
                        "employmentStatus" => "",
                        "birthDate" => "",
                        "whom" => "policyholder"
    
                    ];
    
                    array_push($data['TravellerInfos'], $adultInfo);
                }
            } else { // family with children
                $adultInfo = [
                    "name" => $request->spouseName,
                    "nrc" => $request->spouseNrc ?? $request->spousePassport,
                    "relationship" => "Spouse",
                    "employmentStatus" => "Employed",
                    "whom" => "adult"
                ];
    
                array_push($data['TravellerInfos'], $adultInfo);
    
                $spouseInfo = [
                    'name' => $request->spouseName,
                    'nrc' => $request->spouseNrc ?? $request->spousePassport,
                    "mobileNumber" => $request->policyHolderMobileNumber,
                    "emailAddress" => $request->email,
                    "beneficiaryName" => $request->beneficiaryName,
                    "beneficiaryContact" => $request->beneficiaryContact,
                    "relationship" => "",
                    "employmentStatus" => "",
                    "birthDate" => "",
                    "whom" => "policyholder"
    
                ];
    
                array_push($data['TravellerInfos'], $spouseInfo);
    
                foreach ($request->childrenInfo as $info) {
                    $childInfo = [
                        "name" => $info['name'],
                        "nrc" => $info['nrc'],
                        "relationship" => $info['relationship'],
                        "employmentStatus" => $info['isEmployed'] ? "Employed" : "UnEmployed",
                        "birthDate" => $info['birthDate'],
                        "whom" => "child"
                    ];
    
                    array_push($data['TravellerInfos'], $childInfo);
                }
            }
    
            // return dd($data);
    
            $postTripResponse = Http::withHeaders([
                'Authorization' => 'Bearer ' . $token,
                'Accept' => 'application/json',
            ])->post(env('AYA_SOMPO_POST_TRIP_URL'), $data);
    
            if ($postTripResponse['returnCode'] == "A0001") {
                return Inertia::render('ProposalStatus', [
                    'status' => 'success'
                ]);
            } else {
                return Inertia::render('ProposalStatus', [
                    'status' => $postTripResponse['returnMsg']
                ]);
            }
        } catch (\Exception $e) {
            // dd($e);
            return Inertia::render('ProposalStatus', [
                'status' => $e
            ]);
        }
    }
}
