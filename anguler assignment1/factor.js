function DisplayFactors() {
    var num = 20;
    var icnt = 1;
    for (icnt = 1; icnt <= num; icnt++)
        if (num % icnt == 0) {
            console.log(icnt);
        }
}
DisplayFactors();
