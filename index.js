 //prompt function to ask for input on terminal
const prompt = require('prompt-sync')();

//prompt a user to input data on terminal
const marks = parseInt(prompt('Enter a value between 0 and 100: '));

//Function ('studentGradeGenerator') to determine a student's grade
function studentGradeGenerator() {

    //condition checking with if, else if, else to check if the marks corresponds to the grade to be assigned
    if(marks >= 79 && marks < 100) {
        console.log("Grade: A");
    }
    
    else if(marks <= 79 && marks >= 60) {
        console.log("Grade: B");
    }

    else if(marks <= 59 && marks >= 49) {
        console.log("Grade: C");
    }

    else if(marks < 49 && marks >= 40) {
        console.log("Grade: D");
    }

    else if(marks > 0 && marks < 40){
        console.log("Grade: E");
    }

    else {
        console.log("Invalid marks")
    }

}

//calling  the function
studentGradeGenerator();