console.log("Hello, Aashritha!");

for (var noth = 1; noth<21; noth++) {
    if ((noth == 3) || (noth == 6) || (noth == 9) || (noth == 12) || (noth == 18) ) {
        console.log("Fizz");
    } else {
        if ((noth == 5) || (noth == 10) || (noth == 20)) {
            console.log("Buzz")
        } else {
            if (noth == 15) {
                console.log("Fizz Buzz")
            } else {
                console.log(noth)
            }
        }
    }
}


