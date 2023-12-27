let TotalCostOfItem = (CartObject) => {
    
  let TotalCost = 0 ;
  
   for (let i = 0 ; i < CartObject.length ; i++ ) {
    let Item = CartObject[i] ;
    let ItemCost = Item.UnitPrice * Item.Quantity ;

    TotalCost += ItemCost
   }
   return TotalCost;
}

let CartObject = [
  { UnitPrice : 10 , Quantity : 6 },
  { UnitPrice : 6 , Quantity : 3 },
  { UnitPrice : 4 , Quantity : 2 },
];

let Cost = TotalCostOfItem(CartObject);
console.log(Cost);

// Output : 86 //
