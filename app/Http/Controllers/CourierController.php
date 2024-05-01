<?php

namespace App\Http\Controllers;

use App\Http\Requests\CourierRequest;
use App\Services\CourierService;
use App\Models\Courier;
use Illuminate\Http\Request;

class CourierController extends Controller
{
    //
    private CourierService $CourierService;

    public function __construct(CourierService $CourierService)
    {
        $this->CourierService = $CourierService;
    }

    public function courierTB(Request $request)
    {
        try {
            //code...
            $result = $this->CourierService->courierTB($request);
        } catch (\Exception $exception) {
            //throw $ex;
            return response()->json(['error' => $exception->getMessage()], 422);
        }
        return json_encode($result, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);
    }
    // //Using backend courier validation and insertion
    public function courierAdd(CourierRequest $request)
    {
        try {
            //code...
            $this->CourierService->courierAdd($request->validated());
        } catch (\Exception $exception) {
            //throw $ex;
            return response()->json(['error' => $exception->getMessage()], 422);
        }
        return json_encode(array(
            'success' => true,
            'message' => 'Courier added successfully.'
        ));
    }
    //Using route model binding
    public function courierGet(Courier $courier)
    {
        return json_encode($courier);
    }

    public function courierEdit(CourierRequest $request, Courier $courier)
    {

        try {
            //code...
            $this->CourierService->courierEdit($request->validated(), $courier);
        } catch (\Exception $exception) {
            //throw $ex;
            return response()->json(['error' => $exception->getMessage()], 422);
        }
        return json_encode(array(
            'success' => true,
            'message' => 'Courier edited successfully.'
        ));
    }
    // public function courierGetActiveCount()
    // {
    //     return json_encode(array(
    //         'success' => true,
    //         'courierActiveCount' => courier::where('status', '1')->count()
    //     ));
    // }

    public function courierDelete(Courier $courier)
    {
        try {
            //code...
            $this->CourierService->courierDelete($courier);
        } catch (\Exception $exception) {
            //throw $ex;
            return response()->json(['error' => $exception->getMessage()], 422);
        }

        return json_encode(array(
            'success' => true,
            'message' => 'Courier Deleted successfully.'
        ));
    }
}
