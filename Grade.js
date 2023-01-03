let score;
function gradeOperator(score){
if(score > 79 && score <= 100){
    return "grade: A"
}
else if(score > 60 && score < 79){

    return "grade: B"
    }
else if (score > 50 && score < 59){
   return "grade: C"
    }
else if(score > 40 && score < 49){
    return "grade: D"
    }
else if(score < 40 && score > 0){
     return "grade: E"
    }    
} 
    console.log(gradeOperator(79))