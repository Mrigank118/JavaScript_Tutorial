/* 

1) calculate average score
2) compare teams average sore there can also be a draw.
3) Print a statement.


BONUS 
1) Team only wins if the score is higher than other team and >= 100.

BONUS
2) Apply Bonus to the Draw
*/



const scoreDolphines = (96 + 108 + 89)/3;
const scoreKolas = (88 + 91 + 90)/3;
console.log(scoreDolphines , scoreKolas);

if ( scoreDolphines > scoreKolas && scoreDolphines >= 100){
    console.log("DOLPHINES WIN THE TROPHY");
}
else if ( scoreDolphines < scoreKolas && scoreKolas >= 100  ){
    console.log("KOALAS WIN THE TROPHY");
}
else if(scoreDolphines == scoreKolas && scoreDolphines>=100 && scoreKolas >= 100 ){
    console.log("THERE HAS BEEN A TIE BOTH WIN THE TROPHY");
}
else{
    console.log("THERE HAS BEEN A TIE NO ONE WINS THE TROPHY");
}
