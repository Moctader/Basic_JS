/* 
    Created on : May, 2019 
    Author     : Liisa Auer, Oulu University of Applied Sciences
    Licence    : CC-BY-4.0
*/
 
/*
 * Student name :
 * Started date :
 * Ended   date :
 * 
 */

function t01() {

    let text = document.getElementById("name").value;
    document.getElementById("welcome").innerHTML =text;


}

function t02() {        
    let secInMinutes = 60;
    let minInHours = 60;
    let hourInDay= 24;
    let dayInYear=365;


    let secInYear = secInMinutes * minInHours * hourInDay * dayInYear ;    
    document.getElementById("seconds").innerHTML=secInYear;
}

function t03() {
    let first = Number(document.getElementById("first").value);
    let second = Number(document.getElementById("second").value);
    let third = Number(document.getElementById("third").value);

    avg = (first + second + third)/3;

    document.getElementById("average").innerHTML =avg;


}

function t04() {
    let number1 = Number(document.getElementById("number1").value);
    let number2 = Number(document.getElementById("number2").value);

    let sum = number1 + number2;
    let diff = number1 - number2;
    let mul = number1 * number2;
    let div = number1 / number2;
    let rem = number1 % number2;

    document.getElementById("d1").innerHTML =number1;
    document.getElementById("d2").innerHTML =number2;
    document.getElementById("d3").innerHTML = sum;

    document.getElementById("d4").innerHTML =number1;
    document.getElementById("d5").innerHTML =number2;
    document.getElementById("d6").innerHTML = diff;

    document.getElementById("d7").innerHTML =number1;
    document.getElementById("d8").innerHTML =number2;
    document.getElementById("d9").innerHTML = mul;

    document.getElementById("d10").innerHTML =number1;
    document.getElementById("d11").innerHTML =number2;
    document.getElementById("d12").innerHTML = div;

    document.getElementById("d13").innerHTML =number1;
    document.getElementById("d14").innerHTML =number2;
    document.getElementById("d15").innerHTML = rem;
}


function t05() {        

}

function t06() {

}

function t07() {

}

function t08() {

}

function t09() {

}




