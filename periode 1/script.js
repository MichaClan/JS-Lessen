const myName = "Micha";
const myAge = "17 jaar oud";
const mySchool = "ROC Mondriaan";
const myCourse = "Software Developer";
const myClass = "B1K";
const myTeacher = "Mooiman";

function shoWDetails(){
    console.log("Hallo wereld ik ben " + myName + " en ik ben " + myAge);
}

function showSchoolDetails(){
    console.log("Ik volg de opleiding " + myCourse + " op " + mySchool + ". Ik zit in klas " + myClass + " en mijn mentor is " + myTeacher);
}

function showFullDescription(){
    shoWDetails();
    showSchoolDetails();
}

showFullDescription();

//Opdracht 2
function add(a, b){
    return a + b;
}

function substract(a, b){
    return a- b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b
}

console.log(add(3, 5));