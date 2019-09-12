// Variables

//let temperature;


// Methods

$("#submit").on("click", function(){
	let temperature = parseInt( $("#temperature").val() );
	let newtemp = convertFa(temperature);
	$('p').html(newtemp);

	if (newtemp <= 30) {
		$('body').css('background-image', 'url(images/winter.jpg)');

	} else if (newtemp >= 31 && newtemp < 60) {
		$('body').css('background-image', 'url(images/fall.jpg)');

	} else if (newtemp >= 60 && newtemp < 90) {
		$('body').css('background-image', 'url(images/spring.jpg)');

	} else {
		$('body').css('background-image', 'url(images/summer.jpg)');
	};
	
	console.log(temperature, convertFa(temperature));
});


// Functions

function convertFa(celcius) {
	let converted_temp = (celcius * 9/5) + 32;	
	return converted_temp;
}