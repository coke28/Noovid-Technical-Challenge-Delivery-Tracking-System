<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;
use DB;

class VerifyID implements Rule
{
    /**
     * Create a new rule instance.
     *
     * @return void
     */

    protected $table;
    protected $column;
    protected $model;

    public function __construct($table, $column)
    {
        $this->table = $table;
        $this->column = $column;
    }

    public function passes($attribute, $value)
    {
        $query = DB::table($this->table)->where($this->column, $value);

        if(!$query){
            return false;
        }
        return true;
    }

    public function message()
    {
        return 'The invalid courier.';
    }
}

