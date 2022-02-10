/* 

Tip calculator
1) if price is between 50 - 300 tip 15% else 20;

2) Also print the complete statements 
*/



const bill = 275;

const tip = bill <= 300 && bill>=50 ? bill * 0.15 : bill * 0.20 ;
console.log(`THE BILL was ${bill} , and the tip was ${tip}, and the total value was ${bill + tip}`);
