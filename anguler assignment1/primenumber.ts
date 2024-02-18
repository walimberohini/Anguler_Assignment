function chkprime()
{
     var num : number = 11;
     var icnt : number = 1;
     
     for(icnt = 1;icnt<num; icnt++)
     {
        if(num % icnt == 0)
       
         
        {
            console.log("num = "+num+" is the prime");
          }
          else{
            console.log("num = "+num+" is the  not prime");
          }
     }
       
}

chkprime();