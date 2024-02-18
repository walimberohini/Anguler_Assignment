function chkprime() {
    var num = 11;
    var icnt = 1;
    for (icnt = 1; icnt < num; icnt++) {
        if (num % icnt == 0) {
            console.log("num = " + num + " is the prime");
        }
        else {
            console.log("num = " + num + " is the  not prime");
        }
    }
}
chkprime();
