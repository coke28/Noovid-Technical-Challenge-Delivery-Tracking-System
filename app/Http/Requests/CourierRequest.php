<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use App\Rules\UniqueExceptCurrent;

class CourierRequest extends FormRequest
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
            'courier_name' => [
                'required',
                'string',
                // Use the UniqueExceptCurrent rule conditionally
                new UniqueExceptCurrent('couriers', 'courier_name', $this->route('courier')),
            ],
            'courier_description' => 'required|string',
            'status' => 'required|in:1,0',
        ];
    }
}
