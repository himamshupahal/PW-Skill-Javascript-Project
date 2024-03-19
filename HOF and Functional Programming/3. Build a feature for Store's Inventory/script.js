function USDToINR(Items){

  const ExchangeRate = 80 ;

  const ConvertedPrices = Object.entries(Items).map(([ItemsName ,PriceInUSD]) => {
      
    const PriceInRupees = PriceInUSD * ExchangeRate ;
    return[ ItemsName , PriceInRupees ] ;

  }
  );

  const PriceInRupees = Object.fromEntries(ConvertedPrices);
  console.log(PriceInRupees);

}

const Items = {
  "apple" : 2.99,
  "banana" : 1.50 ,
  "orange" : 3.25,
  "grapes" : 4.75
};

USDToINR(Items)

/*

// ***************** -: RESULT :- ******************* //

{ apple: 239.20000000000002, banana: 120, orange: 260, grapes: 380 }

 */