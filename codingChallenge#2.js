/* 

CODING CHALLENGE #1

1) Store 2 Hieghts and Masses in variables
2) Calucluate their BMI
3) Check if 1 has higher BMI than 2 


4) Also print a message on whose BMI is higher.
5)
*/

const massMark = 78;
const hightMark = 1.69;
const massJohn = 92;
const hightJohn = 1.95;

const BMIMark = massMark / hightMark**2;
const BMIJohn = massJohn / hightJohn**2;
const markBMIjohn = BMIJohn < BMIMark;

if (markBMIjohn){
    console.log("Mark's BMI Is higher than John's");
}
else{
    console.log("John's BMI Is higher than Marks's");
}

console.log(BMIMark,BMIJohn); 

console.log(markBMIjohn);






