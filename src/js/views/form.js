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
		this.originAutocoplite = autocompleteInstance(this.origin);
		this.destinationAutocomplit = autocompleteInstance(this.destination);
		this.departDatePicker = datePickerInstance(this.depart);
		this.departDatePicker = datePickerInstance(this.return);
	}

	get formUI()
	{
		return this.$form;
	}
	setAutocompleteData(data)
	{
		this.originAutocoplite.updateData(data);
		this.destinationAutocomplit.updateData(data);
	}
}

const FormUI = new FormUi(getDatePickerInstance, getAutocompleteInstance);

export default FormUI;