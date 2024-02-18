function Fibonacci() {
    var num = 20;
    var No1 = 0;
    var No2 = 1;
    var nextnum = No1 + No2;
    //  console.log(No1);
    while (nextnum <= num) {
        console.log(nextnum);
        nextnum = No1 + No2;
        No1 = No2;
        No2 = nextnum;
    }
}
Fibonacci();
