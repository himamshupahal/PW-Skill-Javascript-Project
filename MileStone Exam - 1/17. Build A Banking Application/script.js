let Depoit = ( User , Amount ) => {
  User.Balance += Amount
}

let Withdraw = ( User , Amount ) => {
  if ( User.Balance >= Amount ) {
       User.Balance -= Amount
  }

  else{
    console.log("Insufficient Balance ");
  }
}

let User = { Name : " Himanshu " , Balance : 9 };
Depoit(User,2000)
console.log(User);

Withdraw(User,10)
console.log(User);