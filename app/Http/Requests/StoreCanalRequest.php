<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreCanalRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {

        $id = $this->canal->id ?? 0;

        return [
            'name' => ['required','min:3','max:255', Rule::unique('canals') ->ignore($id,'id')],
            'amount' => ['required','integer','min:0'],
        ];
    }
}
