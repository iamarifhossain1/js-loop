// let sum = 0; // While Loop
// let num = 1;

// while (num < 500) {
//     if (sum >= 200) {
//         break;
//     }
//     sum = sum + num;
//     num++
//     console.log ('Final Sum:', sum);
// }


// let sum = 0;

// for (let n = 1; n < 200; n++) {
//     if (sum >= 100) {
//         break;
//     }
//     sum = sum + n;
// }

// console.log (sum);

// for (let i = 1; i <= 200; i++) {
//     if (i % 2 === 1) {
//         continue;
//     }
//     console.log (i);
// }

let i = 1;
while (i < 300) {
    i++;
    if (i % 2 === 1) {
        continue;
    }
    console.log (i);
}