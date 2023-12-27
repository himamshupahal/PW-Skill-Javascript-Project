function BillSplitter(DishCost,NumPeople) {
  let TotalCost = 0 ;

  for(let cost of DishCost ) {
    TotalCost += cost ;
  }

  const CostPerPerson = TotalCost / NumPeople ;

  return {
    TotalBill : TotalCost ,
    BillPerPerson : CostPerPerson ,
  }
}

  const DishCost = [ 10 , 15 , 20 , 5 ] ;
  const NumPeople = 5 ;

  const Bill = BillSplitter(DishCost,NumPeople);
  console.log(Bill);

// Output :- { TotalBill: 50, BillPerPerson: 10 }  