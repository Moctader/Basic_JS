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

    let price = Number(document.getElementById("price").value);
    let pros = Number(document.getElementById("percent").value);

    let newPrice = (1-(pros/100))*price
    document.getElementById("newprice").innerHTML=newPrice;
}

function t06() {
    let today = new Date(); // current date
    let current_year = today.getFullYear();

    let birth = Number(document.getElementById("year").value)
    let age = current_year - birth;
    document.getElementById("age").innerHTML=age;

}

function t07() {
    let seats = Number(document.getElementById("seats").value);
    let guests = Number(document.getElementById("guests").value);

    let remain = seats- guests;
    document.getElementById('remaining').innerHTML=remain


}

function t08() {
    let plants = Number(document.getElementById("plants").value);
    let distance = Number(document.getElementById('distance').value)

    let length1 = plants * distance //cm
    let length2 = length1/100 //m
    document.getElementById("length_cm").innerHTML=length1
    document.getElementById("length_m").innerHTML=length2

}

function t09() {
//  3 sausages, 5 bottles of drink, 2 tomatoes and 1 egg for each guest
let guests = Number(document.getElementById("participant").value);

let sausages = 3*guests
let drinks = 5 * guests
let tomatoes = 2* guests
let eggs = 1 * guests


document.getElementById("sausages").innerHTML=sausages
document.getElementById("drinks").innerHTML=drinks
document.getElementById("tomatoes").innerHTML=tomatoes
document.getElementById("eggs").innerHTML=eggs


}




