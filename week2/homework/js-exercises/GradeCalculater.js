'use strict';


//this function calculates grades
function calculatesGrade(score){

    if(score >= 0 && score <= 49 ){

        console.log("You got a F (%s%)!",score);

    }else if(score >= 50 && score <= 59){

        console.log("You got a E (%s%)!",score);

    }else if(score >= 60 && score <= 69){

        console.log("You got a D (%s%)!",score);

    }else if(score >= 70 && score <= 79){

        console.log("You got a C (%s%)!",score);

    }else if(score >= 80 && score <= 89){

        console.log("You got a B (60%)!");

    }else if(score >= 90 && score <= 100){

        console.log("You got a A (%s%)!",score);
    }

}

calculatesGrade(65);
calculatesGrade(75);
calculatesGrade(85);