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


var x = 0;
var array = Array();

function add_element_to_array()
{
 array[x] = document.getElementById("text1").value;
 alert("Element: " + array[x] + " Added at index " + x);
 x++;
 document.getElementById("text1").value = "";
}


function display_array()
{
   var p = 1;   
    
   for (var y=0; y<array.length; y++)
   {
     p *= array [y];
   }
   document.getElementById("Result").innerHTML = p;
}


/*Basic Exercise 4 */


function uppercase(str) {

var str = "the perfect problem solver"; 
var array1 = str.split(" ");
var newarray1 = []; 

for (var i = 0; i < array1.length; i++) {
	newarray1.push(array1[i].charAt(0).toUpperCase()+array1[i].slice(1));	
}

return newarray1.join(" "); 

}

console.log(uppercase());

