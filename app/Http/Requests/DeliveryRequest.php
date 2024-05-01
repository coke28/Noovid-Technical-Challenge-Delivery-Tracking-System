<?php

namespace App\Http\Requests;

use App\Rules\VerifyID;
use Illuminate\Foundation\Http\FormRequest;

class DeliveryRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'courier_id' => [
                'required',
                'numeric',
                new VerifyID('couriers', 'id'),
            ],
            'delivery_note' => 'required|string',
            'date_to_be_delivered' => 'required|date|after_or_equal:today',
            'status' => 'required|in:1,0',
        ];
    }
}
