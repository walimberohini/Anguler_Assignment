function DisplayFactors()
{
     var num : number = 20;
     var icnt : number = 1;

    for(icnt = 1;icnt<=num; icnt++)
      if(num % icnt==0)
      {
        console.log(icnt);
      }
}
DisplayFactors();