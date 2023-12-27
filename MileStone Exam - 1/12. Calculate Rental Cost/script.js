let CalculateRentalCost = (days,carType) => {

    switch (carType) {
      case "Economy" :
        console.log( " Rental Cost is :" + 4000 * days );
        break ;

      case "MidSize" :
        console.log( " Rental Cost is :" + 10000 * days );
        break ;

      case "Luxury" :
        console.log( " Rental Cost is :" + 20000 * days );
        break ;
      
        default:
         console.log("Invalid Car Type ");

         break;

        }
};

 let days = 10 ;
 let carType = "MidSize";
 CalculateRentalCost(days,carType);

 // Output is :- Rental Cost is : 100000