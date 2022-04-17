import {getDatePickerInstance, getAutocompleteInstance} from '../plugins/materialize';

class FormUi
{
	constructor(datePickerInstance, autocompleteInstance)
	{
		this._form = document.forms["locationsContol"];
		this.origin = document.getElementById('autocomplete-origin');
		this.destination = document.getElementById('autocomplete-destination');
		this.depart = document.getElementById('datepicker-depart');
		this.return = document.getElementById('datepicker-return');
		this.originAutocomplete = autocompleteInstance(this.origin);
		this.destinationAutocomplete = autocompleteInstance(this.destination);
		this.departDatePicker = datePickerInstance(this.depart);
		this.returnDatePicker = datePickerInstance(this.return);
	}

	get formUI()
	{
		return this._form;
	}

	//получение данных из инпутов
	get originValue()
	{
		return this.origin.value;
	}

	get destinationValue()
	{
		return this.destination.value;
	}

	get departDateValue()
	{
		return this.departDatePicker.toString();
	}

	get returnDateValue()
	{
		return this.returnDatePicker.toString();
	}

	setAutocompleteData(data)
	{
		this.originAutocomplete.updateData(data);
		this.destinationAutocomplete.updateData(data);
	}
}

const FormUI = new FormUi(getDatePickerInstance, getAutocompleteInstance);

export default FormUI;