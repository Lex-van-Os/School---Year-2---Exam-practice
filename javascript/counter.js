var starting_string = document.getElementById("count").innerHTML = "Aantal Pangolins gered: 11438";
var starting_num = starting_string.replace( /^\D+/g, '');
starting_num = parseInt(starting_num);

setInterval(function() { count(starting_string);}, 1000);

function count(starting_string) {
    console.log("count");
    console.log(starting_num);
    starting_num = starting_num + Math.floor((Math.random() * 10) + 8);
    console.log(starting_num);
    starting_string = document.getElementById("count").innerHTML = "Aantal Pangolins gered: " + starting_num;
}
