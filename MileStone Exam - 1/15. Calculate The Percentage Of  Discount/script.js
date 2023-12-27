let PercentageOfTheDiscount = (Products) => {

  let DiscountPercentage = [] ;
  for(let i = 0 ; i < Products.length ; i++ ) {
  let Product = Products[i];

    DiscountPercentage.push (
      Math.floor(
        ((Product.OriginalPrice - Product.DiscountedPrice) / 
          Product.OriginalPrice) * 
          100 
      ) + "%"
    );
  }
  return DiscountPercentage ;
}

let Products = [
  { OriginalPrice:50 , DiscountedPrice : 30 },
  { OriginalPrice:30 , DiscountedPrice : 15 },
  { OriginalPrice:150 , DiscountedPrice : 120 },
  { OriginalPrice:80 , DiscountedPrice : 50 },
];

console.log(PercentageOfTheDiscount(Products));

// Output:- [ '40%', '50%', '20%', '37%' ] //