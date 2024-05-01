<?php

namespace App\Services;

use App\Models\delivery;
use DB;
use Hash;
use Illuminate\Http\Request;

class DeliveryService
{
    private CrmLogService $crmLogService;

    public function __construct(CrmLogService $crmLogService)
    {
        $this->crmLogService = $crmLogService;
    }

    public function deliveryActiveTB(Request $request)
    {
        header('Content-Type: application/json');
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
        header('Access-Control-Allow-Headers: *');

        // searchText
        $search = '';
        if (isset($request->search) && isset($request->search)) {
            $search = $request->search;
        }

        $deliveries = DB::table('deliveries')
            ->join('couriers', 'deliveries.courier_id', '=', 'couriers.id')->selectRaw('
            deliveries.id,
            deliveries.delivery_note,
            deliveries.date_to_be_delivered,
            couriers.courier_name,
            CASE deliveries.status WHEN 0 THEN "INACTIVE" WHEN 1 THEN "ACTIVE" END as status,
            deliveries.created_at
        ')->where('deliveries.deleted', '0')->where('deliveries.status', '1');

        $deliveries = $deliveries->where(function ($query) use ($search) {
            return $query->where('deliveries.id', 'like', '%' . $search . '%')
                ->orWhere('deliveries.delivery_note', 'like', '%' . $search . '%')
                ->orWhere('deliveries.date_to_be_delivered', 'like', '%' . $search . '%')
                ->orWhere('couriers.courier_name', 'like', '%' . $search . '%')
                ->orWhere(DB::raw('CASE deliveries.status WHEN 0 THEN "INACTIVE" WHEN 1 THEN "ACTIVE" END'), 'like', '%' . $search . '%')
                ->orWhere('deliveries.created_at', 'like', '%' . $search . '%');
        });
        if ($request->sort) {
            $deliveries->orderBy($request->sort, $request->order);
        }

        if ($request->paginate_display) {
            $paginated = $deliveries->paginate($request->paginate_display);
        } else {
            $paginated = $deliveries->paginate(10);
        }


        $result = [
            'data' => $paginated->items(),
            'pagination' => [
                'total' => $paginated->total(),
                'per_page' => $paginated->perPage(),
                'current_page' => $paginated->currentPage(),
                'last_page' => $paginated->lastPage(),
            ]
        ];

        return $result;
    }

    public function deliveryInactiveTB(Request $request)
    {
        header('Content-Type: application/json');
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
        header('Access-Control-Allow-Headers: *');

        // searchText
        $search = '';
        if (isset($request->search) && isset($request->search)) {
            $search = $request->search;
        }

        $deliveries = DB::table('deliveries')
            ->join('couriers', 'deliveries.courier_id', '=', 'couriers.id')->selectRaw('
            deliveries.id,
            deliveries.delivery_note,
            deliveries.date_to_be_delivered,
            couriers.courier_name,
            CASE deliveries.status WHEN 0 THEN "INACTIVE" WHEN 1 THEN "ACTIVE" END as status,
            deliveries.created_at
        ')->where('deliveries.deleted', '0')->where('deliveries.status', '0');

        $deliveries = $deliveries->where(function ($query) use ($search) {
            return $query->where('deliveries.id', 'like', '%' . $search . '%')
                ->orWhere('deliveries.delivery_note', 'like', '%' . $search . '%')
                ->orWhere('deliveries.date_to_be_delivered', 'like', '%' . $search . '%')
                ->orWhere('couriers.courier_name', 'like', '%' . $search . '%')
                ->orWhere(DB::raw('CASE deliveries.status WHEN 0 THEN "INACTIVE" WHEN 1 THEN "ACTIVE" END'), 'like', '%' . $search . '%')
                ->orWhere('deliveries.created_at', 'like', '%' . $search . '%');
        });
        if ($request->sort) {
            $deliveries->orderBy($request->sort, $request->order);
        }

        if ($request->paginate_display) {
            $paginated = $deliveries->paginate($request->paginate_display);
        } else {
            $paginated = $deliveries->paginate(10);
        }


        $result = [
            'data' => $paginated->items(),
            'pagination' => [
                'total' => $paginated->total(),
                'per_page' => $paginated->perPage(),
                'current_page' => $paginated->currentPage(),
                'last_page' => $paginated->lastPage(),
            ]
        ];

        return $result;
    }
    public function deliveryAdd($validatedData): void
    {
        $delivery = new Delivery();
        $delivery->courier_id = $validatedData['courier_id'];
        $delivery->date_to_be_delivered = $validatedData['date_to_be_delivered'];
        $delivery->delivery_note = $validatedData['delivery_note'];
        $delivery->status = $validatedData['status'];
        $delivery->save();

        $this->crmLogService->addCrmLog($delivery, "Manage deliveries", "deliveryAdd");
    }
    public function deliveryEdit($validatedData, Delivery $delivery): void
    {
        $delivery->courier_id = $validatedData['courier_id'];
        $delivery->date_to_be_delivered = $validatedData['date_to_be_delivered'];
        $delivery->delivery_note = $validatedData['delivery_note'];
        $delivery->status = $validatedData['status'];
        $delivery->save();


        $this->crmLogService->addCrmLog($delivery, "Manage deliveries", "deliveryEdit");

    }
    public function deliveryDelete(Delivery $delivery)
    {
        $delivery->deleted = "1";
        $delivery->save();
        $this->crmLogService->addCrmLog($delivery, "Manage deliveries", "deliveryDelete");

    }
}
