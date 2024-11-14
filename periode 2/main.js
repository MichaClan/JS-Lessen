let maxPoints = 100;
let total = 0;

function calculateGrade(points, maxPoints){
    let total = (points / maxPoints)
    return total;
}

for(let i = 0; i < 3; i++){
    let grade = calculateGrade(prompt("Vul een getal"), maxPoints);
    console.log(grade);
    total += grade;
}

console.log(total / 3);