<?php

namespace App\Services;

use App\Models\courier;
use DB;
use Hash;
use Illuminate\Http\Request;

class CourierService
{
    private CrmLogService $crmLogService;
 
    public function __construct(CrmLogService $crmLogService)
    {
        $this->crmLogService = $crmLogService;
    }

    public function courierTB(Request $request)
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

        $couriers = DB::table('couriers')->selectRaw('
            id,
            courier_name,
            courier_description,
            CASE status WHEN 0 THEN "INACTIVE" WHEN 1 THEN "ACTIVE" END as status,
            created_at
        ')->where('deleted','0');

        if($request->status){
            $couriers = $couriers->where('status', $request->status);
        }

        $couriers = $couriers->where(function ($query) use ($search) {
            return $query->where('id', 'like', '%' . $search . '%')
                ->orWhere('courier_name', 'like', '%' . $search . '%')
                ->orWhere('courier_description', 'like', '%' . $search . '%')
                ->orWhere(DB::raw('CASE status WHEN 0 THEN "INACTIVE" WHEN 1 THEN "ACTIVE" END'), 'like', '%' . $search . '%')
                ->orWhere('created_at', 'like', '%' . $search . '%');
        });
        if ($request->sort) {
            $couriers->orderBy($request->sort, $request->order);
        }

        if($request->paginate_display){
            $paginated = $couriers->paginate($request->paginate_display);
        }else{
            $paginated = $couriers->paginate(10);
        }
        

        $result = [
            'data'            => $paginated->items(),
            'pagination' => [
                'total' => $paginated->total(),
                'per_page' => $paginated->perPage(),
                'current_page' => $paginated->currentPage(),
                'last_page' => $paginated->lastPage(),]
        ];

        return $result;
    }
    public function courierAdd($validatedData): void
    {
        $courier = new courier();
        $courier->courier_name = $validatedData['courier_name'];
        $courier->courier_description = $validatedData['courier_description'];
        $courier->status = $validatedData['status'];
        $courier->save();

        $this->crmLogService->addCrmLog($courier,"Manage couriers","courierAdd");
    }
    public function courierEdit($validatedData, courier $courier): void
    {
        $courier->courier_name = $validatedData['courier_name'];
        $courier->courier_description = $validatedData['courier_description'];
        $courier->status = $validatedData['status'];
        $courier->save();

        $this->crmLogService->addCrmLog($courier,"Manage couriers","courierEdit");

    }
    public function courierDelete(courier $courier)
    {
        $courier->deleted = "1";
        $courier->save();

        $this->crmLogService->addCrmLog($courier,"Manage couriers","courierDelete");

    }
}
