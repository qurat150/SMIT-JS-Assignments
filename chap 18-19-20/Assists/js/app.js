// var courses = [];
// var course1 = prompt("course 1", "computer");
// var course2 = prompt("course 2", "web and app developing");
// var course3 = prompt("course 3", "cooking");
// var course4 = prompt("course 4", "baking");
// var course5 = prompt("course 5", "IT");
// courses.push(course1, course2, course3, course4, course5);

// for (var i = 0; i <= courses.length; i++) {
// }
// alert(courses);

// for (var i = 0; i<courses.length; i++){
//     var ValueToEdit = prompt("which value do you want for edit?" + (i + 1),courses[i]);
//     courses.splice(i , 1 , ValueToEdit)
// }
// console.log(courses);


var cities = []
var city1 = prompt("which one is your fvrtttttt city?")
var city2 = prompt("which one is your 2nd fvrt city?")
var city3 = prompt("which one is your 3rd fvrt city?")
if(city1=="karachi"){
    alert("It is one of the beautiful cities in the world")
    cities.push(city1 , city2 , city3)
} else{
    alert("OK")
}
console.log(cities)
for (var i=0 ; i<cities.length; i++){
    var cityEdit = prompt("which one is your fvrttt city now?" , (i + 1) , cities[i]);
    cities.splice(i , 1 , cityEdit)
}
console.log(cities)