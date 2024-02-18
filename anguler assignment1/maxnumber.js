function Maximum() {
    if (num1 > num2 && num1 > num3) {
        console.log("num1 = " + num1 + " is the greatest");
    }
    else if (num3 > num1 && num3 > num2) {
        console.log("num3 = " + num3 + " is the greatest");
    }
    else {
        console.log("num2 = " + num2 + " is the greatest");
    }
}
var num1 = 23;
var num2 = 89;
var num3 = 6;
Maximum();
