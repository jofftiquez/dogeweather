$(document).ready(function() {
	getLocation(); 
});

$('#browser_geo').one('click', function(){
   	getLocation();
});

function getWeather(link) {
	$.getJSON(link, function(data){

		//set weather id & icon 
		let id = data.weather[0].id;
		let icon = data.weather[0].icon;

		$('#weather-id').text(id);
		$('#weather-icon').text(icon);

		let doge_img = 'url(./img/doge/' + icon + '.png)';
		$('.doge-image').css('background-image', doge_img);

		let sky_img = 'url(./img/sky-img/' + icon + '.png)';
		$('.bg').css('background-image', sky_img);

		//get weather description
		let tempCelcius = data.main.temp - 273.15;
		let tempFahrenheit = tempCelcius * 9 / 5 + 32;
		let description = data.weather[0].description;

		$('#weather-desc').text("wow " + description);
		$('#location').text(data.name);

		$('#degreesCelsius .number').text(Math.round(tempCelcius));
		$('#degreesCelsius .cel').text('°C ');
		$('#degreesFahrenheit').text(Math.round(tempFahrenheit) + '°F');

		$('.suchlikes').show();
		$('.ourinfo').show();

		// much initialise such doge
		$($.doge);
	});
}
	   
function getLocation() {
    if (!navigator.geolocation) 
		return $('#browser_geo').text('Geolocation is not supported by this browser.');

	navigator.geolocation.getCurrentPosition(showPosition, function(error) {
		$('#browser_geo').text('use my location');	
		getWeather("./weather.php");
	});
}

function showPosition(position) {
	let url = 'http://api.openweathermap.org/data/2.5/weather';
    url += '?lat=' + position.coords.latitude + '&lon=' + position.coords.longitude + '&&callback=?';

    getWeather(url);

    $('#browser_geo')
		.text('wow, located!')
		.css({
			cursor: 'auto',
			color: '#FF5CFF'
		});
}