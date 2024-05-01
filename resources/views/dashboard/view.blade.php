<x-CRM-layout :pageTitle="$pageTitle" :pageDescription="$pageDescription">
    <div class="container-fluid">
        <div class="row">

            <div class="row">
                <div class="col-md-6 mb-4">
                    <div class="card h-100">
                        <div class="card-body text-center">
                            <h5 class="card-title text-primary">Active Deliveries</h5>
                            <data-table-vue :parameters='@json($activeDeliveryTB)'></data-table-vue>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 mb-4">
                    <div class="card h-100">
                        <div class="card-body text-center">
                            <h5 class="card-title text-primary">Past Deliveries</h5>
                            <data-table-vue :parameters='@json($inactiveDeliveryTB)'></data-table-vue>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</x-CRM-layout>
