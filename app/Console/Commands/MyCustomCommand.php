<?php

namespace App\Console\Commands;

use App\Events\UpdateDeliveryStatus;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Event;
use DB;
use Carbon\Carbon;

class MyCustomCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'command:updateDeliveryStatus';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Check deadline date of delivery and update the status';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $this->info('COMMAND IS RUNNING');
        $deliveries = DB::table('deliveries')
            ->join('couriers', 'deliveries.courier_id', '=', 'couriers.id')->selectRaw('
            deliveries.id,
            deliveries.delivery_note,
            deliveries.date_to_be_delivered,
            couriers.courier_name,
            CASE deliveries.status WHEN 0 THEN "INACTIVE" WHEN 1 THEN "ACTIVE" END as status,
            deliveries.created_at
        ')
            ->where('deliveries.deleted', '0')
            ->where('deliveries.status', '1')
            ->get();

        // Filter deliveries that need to be updated
        $deliveriesToUpdate = $deliveries->filter(function ($delivery) {
            $this->info('COMPARING NOW' . Carbon::now() . 'COMPARING DELIVER DATE' . Carbon::parse($delivery->date_to_be_delivered));
            return Carbon::parse(Carbon::now())->gte($delivery->date_to_be_delivered);
        });
        // Extract IDs of deliveries to update
        $deliveryIdsToUpdate = $deliveriesToUpdate->pluck('id')->toArray();

        // Perform bulk update
        if (!empty($deliveryIdsToUpdate)) {
            DB::table('deliveries')
                ->whereIn('id', $deliveryIdsToUpdate)
                ->update(['status' => 0]);
            Event::dispatch(new UpdateDeliveryStatus());
            $this->info('SENDING EVENT');
        }
        return 0;
    }
}
