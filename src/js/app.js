import './plugins';
import '../css/style.css';
import locations from './store/locations';
import  formUI from './views/form';
import currencyUI from './views/currency';

document.addEventListener('DOMContentLoaded', () =>
{
	initApp();
	const form = formUI._form;

	//events
	form.addEventListener('submit', (e) =>
	{
		e.preventDefault();
		onFormSubmit();
	})

	//hendlers
	async function initApp()
	{
		await locations.init();
		formUI.setAutocompleteData(locations.shortCitiesList);
	}

	async function onFormSubmit()
	{
		//собрать данные из инпутов
		const origin = locations.getCityCodeByKey(formUI.originValue);
		const destination = locations.getCityCodeByKey(formUI.destinationValue);
		const depart_date = formUI.departDateValue;
		const return_date = formUI.returnDateValue;
		const currency = currencyUI.currencyValue;
		// code code 2022-04, 2022-05
		console.log(origin, destination, depart_date, return_date);
		await locations.fetchTickets({
			origin,
			destination,
			depart_date,
			return_date,
			currency
		})
	}
})

