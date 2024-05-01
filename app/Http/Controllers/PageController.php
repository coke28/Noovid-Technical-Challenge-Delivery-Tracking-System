<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Artisan;

class PageController extends Controller
{
  public function indexPage()
  {
    if (Auth::check()) {
      // The user is logged in...
      return redirect()->route('user.dash');
    } else {
      return redirect()->route('get.login');
    }
  }

  public function loginPage()
  {
    return view('auth.login');
  }

  public function dashboardPage()
  {
    Artisan::call('command:updateDeliveryStatus');

    return view(
      'dashboard.view',
      array(
        'pageTitle' => 'Dashboard',
        'pageDescription' => 'Manage Active and Inactive Deliveries',
        'activeDeliveryTB' => [
          'tb_api' => 'api/delivery/deliveryActiveTB',
          'model' => 'Delivery',
          'customFormComponent' => 'DeliveryForm',
          'page_display' => [5, 10, 25, 50],
          'table_columns' => [
            array('header_name' => 'Tracking ID', 'header_value' => 'id', 'orderable' => true),
            array('header_name' => 'Courier', 'header_value' => 'courier_name', 'orderable' => true),
            array('header_name' => 'Delivery Note', 'header_value' => 'delivery_note', 'orderable' => true),
            array('header_name' => 'Status', 'header_value' => 'status', 'orderable' => true),
            array('header_name' => 'Arrival Date', 'header_value' => 'date_to_be_delivered', 'orderable' => true),
            array('header_name' => 'Created At', 'header_value' => 'created_at', 'orderable' => true),
          ],
          'tools' => [
            array('tool_name' => 'delete', 'tool_api' => 'api/form/delete/'),
            array('tool_name' => 'edit'),
            array('tool_name' => 'refresh status', 'redirect_url' => '/dashboard'),
          ]
        ],
        'inactiveDeliveryTB' => [
          'tb_api' => 'api/delivery/deliveryInactiveTB',
          'model' => 'Delivery',
          // 'customFormComponent' => 'DeliveryForm',
          'page_display' => [5, 10, 25, 50],
          'table_columns' => [
            array('header_name' => 'Tracking ID', 'header_value' => 'id', 'orderable' => true),
            array('header_name' => 'Courier', 'header_value' => 'courier_name', 'orderable' => true),
            array('header_name' => 'Delivery Note', 'header_value' => 'delivery_note', 'orderable' => true),
            array('header_name' => 'Status', 'header_value' => 'status', 'orderable' => true),
            array('header_name' => 'Arrival Date', 'header_value' => 'date_to_be_delivered', 'orderable' => true),
            array('header_name' => 'Created At', 'header_value' => 'created_at', 'orderable' => true),
          ],
          'tools' => [
            array('tool_name' => 'delete', 'tool_api' => 'api/form/delete/'),
            array('tool_name' => 'edit'),
            array('tool_name' => 'redirect', 'redirect_url' => '/user'),
          ]
        ],
      )
    );
  }
  public function manageCourier()
  {
    return view(
      'tools.manageCourier.view',
      array(
        'pageTitle' => 'Manage Courier',
        'pageDescription' => 'Create, Edit and Update Couriers',
        'parameters' => [
          'tb_api' => 'api/courier/courierTB',
          'model' => 'Courier',
          'customFormComponent' => 'CourierForm',
          'renderModal' => true,
          'page_display' => [5, 10, 25, 50],
          'table_columns' => [
            array('header_name' => 'ID', 'header_value' => 'id', 'orderable' => true),
            array('header_name' => 'Courier Name', 'header_value' => 'courier_name', 'orderable' => true),
            array('header_name' => 'Courier Description', 'header_value' => 'courier_description', 'orderable' => true),
            array('header_name' => 'Status', 'header_value' => 'status', 'orderable' => false),
            array('header_name' => 'Created At', 'header_value' => 'created_at', 'orderable' => true),
          ],
          'tools' => [
            array('tool_name' => 'edit'),
            array('tool_name' => 'delete', 'tool_api' => 'api/courier/delete/'),
          ]
        ],
      )
    );
  }

  public function manageCrmLog()
  {

    return view(
      'tools.manageCrmLogs.view',
      array(
        'pageTitle' => 'Manage CRM Logs',
        'pageDescription' => 'View database changes in the CRM.',
        'parameters' => [
          'tb_api' => 'api/crmLog/table',
          'model' => 'CRM Log',
          'renderModal' => false,
          'page_display' => [5, 10, 25, 50],
          'table_columns' => [
            array('header_name' => 'ID', 'header_value' => 'id', 'orderable' => true),
            array('header_name' => 'Module Name', 'header_value' => 'module_name', 'orderable' => true),
            array('header_name' => 'action', 'header_value' => 'action', 'orderable' => true),
            array('header_name' => 'Username', 'header_value' => 'user_name', 'orderable' => true),
            array('header_name' => 'affected_row_copy', 'header_value' => 'affected_row_copy', 'orderable' => false),
            array('header_name' => 'Created At', 'header_value' => 'created_at', 'orderable' => true),
          ],
          //tool_name either delete or edit only
          'tools' => [
            array('tool_name' => 'delete', 'tool_api' => 'api/crmLog/delete/'),
          ]
        ],
      )
    );
  }
}
