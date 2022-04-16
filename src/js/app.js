import './plugins';
import '../css/style.css';
import locations from './store/locations';
import  fromUI from './views/form';

document.addEventListener('DOMContentLoaded', () =>
{
	initApp();
	const form = formUI.form;

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
		fromUI.setAutocompleteData(locations.shortCitiesList)
	}

	async function onFormSubmit()
	{
		//собрать данные из инпутов
		
	}
})

