
let student1 = {
    name: "Reshma Saujani",
    attendance: 90,
    examScore: 65,
    hasPassed: false
};

let student2 = {
    name: "Lisa Su",
    attendance: 86,
    examScore: 75,
    hasPassed: false
};

let student3 = {
    name: "Susan Wojcicki",
    attendance: 95,
    examScore: 55,
    hasPassed: false
};
function passName(student) {                                       // Write a function which takes a student Object as an input parameter
    if (student.attendance >= 90 && student.examScore >= 60) {    // If attendance is equal or greater than 90 AND exam score is above 60,
        student.examScore = true;                                // set hasPassed to true and return the String 
        return "Student " + student.name + " has passed.";       // "Student " + name + " has passed"
    }else {
        return "Student " + student.name + " has failed.";     // Otherwise return the String "Student " + name + " has failed"
    }
}
   console.log(passName(student1));                         // Call the function for each student and console.log the results
   console.log(passName(student2));
   console.log(passName(student3));








