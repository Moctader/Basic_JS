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

function j01() {
    // read input data
    let year1 = Number(document.getElementById("year1").value);
    let year2 = Number(document.getElementById("year2").value);

    let today = new Date(); // current date
    let current_year = today.getFullYear();

    //calculations
    let age1 = current_year - year1;
    let age2 = current_year - year2;
    let difference = age1 - age2

    // print
    document.getElementById("age1").innerHTML="Person 1 age is " + age1;
    document.getElementById("age2").innerHTML="Person 2 age is " + age2;
    document.getElementById("difference").innerHTML="Person 1 is " + difference +" years older than person 2";


}

function j02() {

}

function j03() {

}

function j04() {
    const START = "Hello ";
    const MIDDLE = ", you are ";
    const END = " years of age.";
    
}

function j05() {

}

