<?php

namespace App\Http\Controllers;

use App\Http\Requests\DeliveryRequest;
use App\Services\DeliveryService;
use Illuminate\Http\Request;
use App\Models\Delivery;

class DeliveryController extends Controller
{
    //
    private DeliveryService $deliveryService;

    public function __construct(DeliveryService $deliveryService)
    {
        $this->deliveryService = $deliveryService;
    }

    public function deliveryActiveTB(Request $request)
    {
        try {
            //code...
            $result = $this->deliveryService->deliveryActiveTB($request);
        } catch (\Exception $exception) {
            //throw $ex;
            return response()->json(['error' => $exception->getMessage()], 422);
        }
        return json_encode($result, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);
    }
    public function deliveryInactiveTB(Request $request)
    {
        try {
            //code...
            $result = $this->deliveryService->deliveryInactiveTB($request);
        } catch (\Exception $exception) {
            //throw $ex;
            return response()->json(['error' => $exception->getMessage()], 422);
        }
        return json_encode($result, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);
    }
    public function deliveryAdd(DeliveryRequest $request)
    {
        try {
            //code...
            $this->deliveryService->deliveryAdd($request->validated());
        } catch (\Exception $exception) {
            //throw $ex;
            return response()->json(['error' => $exception->getMessage()], 422);
        }
        // Event::dispatch(new DeliveryEvent());
        return json_encode(
            array(
                'success' => true,
                'message' => 'Delivery added successfully.'
            )
        );
    }
    //Using route model binding
    public function deliveryGet(Delivery $delivery)
    {
        return json_encode($delivery);
    }

    public function deliveryEdit(DeliveryRequest $request, Delivery $delivery)
    {

        try {
            //code...
            $this->deliveryService->deliveryEdit($request->validated(), $delivery);
        } catch (\Exception $exception) {
            //throw $ex;
            return response()->json(['error' => $exception->getMessage()], 422);
        }
        // Event::dispatch(new DeliveryEvent());
        return json_encode(
            array(
                'success' => true,
                'message' => 'Delivery edited successfully.'
            )
        );
    }
    public function deliveryGetActiveCount()
    {
        return json_encode(
            array(
                'success' => true,
                'deliveryActiveCount' => Delivery::where('status', '1')->count()
            )
        );
    }

    public function deliveryDelete(Delivery $delivery)
    {
        try {
            //code...
            $this->deliveryService->deliveryDelete($delivery);
        } catch (\Exception $exception) {
            //throw $ex;
            return response()->json(['error' => $exception->getMessage()], 422);
        }

        return json_encode(
            array(
                'success' => true,
                'message' => 'Delivery Deleted successfully.'
            )
        );
    }
}
