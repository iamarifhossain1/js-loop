// Continue --- Skip rest of the code for this iteration
// Break --- I am Done with This Loop

for (let i = 1; i < 10; i ++){
    if (i % 2 === 1) {
        continue;
    }

    console.log (i);
}


// While Loop-------

let i = 1;
while (i < 20) {
     i++
    if (i % 2 === 1) {
        continue;
    }
    console.log (i);
}

let i = 0;

while (i < 50) {
     i++
     if (i % 5 !== 0) {
        continue;
     }
     
     console.log (i);
}