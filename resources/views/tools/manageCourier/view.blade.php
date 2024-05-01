<x-CRM-layout :pageTitle="$pageTitle" :pageDescription="$pageDescription">
    {{-- <h1>Manage Product Names</h1> --}}
    <div class="card card-custom">
        <div class="card-body">
            <!--begin::Wrapper-->
            <data-table-vue :parameters='@json($parameters)'></data-table-vue>
        </div>
    </div>
</x-CRM-layout>
