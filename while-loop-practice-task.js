/***

"I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.

 */

let num = 1;
while (num <= 60) {
    console.log ('Count:', num,'I will invest at least 6 hrs every single day for next 60 days!');
    num++
}

/***

Subtask-1:

Find all the odd numbers from 61 to 100.

 */


/***

Subtask-2:

Find all the even numbers from 78 to 98.

 */

let num = 61; // Odd Numbers Finder

while (num <= 100) {
    if (num % 2 === 1){
        console.log ('Odd Number:', num);
    }
    console.log (num);
    num++
}


let num = 68 // Even Numbers Finder

while (num <= 78) {
    if (num % 2 === 0) {
        console.log ('Even Number:', num);
    }
    console.log (num);
    num++
}
