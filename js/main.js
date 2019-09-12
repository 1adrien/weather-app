// Variables

//let temperature;


// Methods

$("#submit").on("click", function(){
	let temperature = parseInt( $("#temperature").val() );
	let newtemp = convertFa(temperature);
	$('p').html(newtemp);

	if (newtemp <= 30) {
		$('body').css('background-color', 'blue');

	} else if (newtemp >= 31 && newtemp < 50) {
		$('body').css('background-color', 'red');

	} else if (newtemp >= 50 && newtemp < 70) {
		$('body').css('background-color', 'green');
		
	} else {
		$('body').css('background-color', 'yellow');
	};
	
	console.log(temperature, convertFa(temperature));
});


// Functions

function convertFa(celcius) {
	let converted_temp = (celcius * 9/5) + 32;	
	return converted_temp;
}