/* Basic Exercise 1 Temperature */


function exercise1() {
var temperature = Math.floor((Math.random() * 25) - 5);
document.getElementById("outputTemperature").innerHTML = temperature;

if (temperature <= 10) {
	document.getElementById("outputTemperature").innerHTML = "The weather is cold" + " " + temperature ;
} else if (temperature >=11) {
	document.getElementById("outputTemperature").innerHTML = "The weather is moderate" + " " + temperature;
}

}


/*Basic Exercise 2 */

function highvalue() {
	const werte = [1,7,3,9];
	document.getElementById("highvalues").innerHTML = Math.max(... werte);

	/*document.getElementById("highvalues").innerHTML = werte; */
}


/*Basic Exercise 3 */
