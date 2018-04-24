var students = [
	{ name: "Martin", 
	  points: 76  
	},
{
	name: "Thomas", 
	points: 85 
},

{
	name: "Klaus",
	points: 65 
},

{
	name: "Maria", 
	points: 93
},

{
	name: "David",
	points: 81
}

]; 

sum = 0; 

for (var i=0; i< students.length; i++) {

	sum = sum + students.points[i];  
	return sum; 
}

result = sum / students.length; 

console.log(result); 