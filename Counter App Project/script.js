// Getting The HTML Elements //

const decrementBtn = document.getElementById("decrementBtn");
const incrementBtn = document.getElementById("incrementBtn");
const  resetBtn  = document.getElementById("resetBtn");
const  displayValue  = document.getElementById("displayValue");

// For Decrement Button Click //

decrementBtn.addEventListener("click", ()=>{
 const value = Number(displayValue.innerText);
 if ( value > 0 ) {
    displayValue.innerText = value - 1;
 }
 else{
    alert( " Negative Value does not allowed  " );
 }
}
);

// For Increment Button Click  //

incrementBtn.addEventListener("click",()=>{
    const value = Number(displayValue.innerText);
    if ( value >= 20 ) {
       alert("10+ values are not allowed");
    }
    else{
       displayValue.innerText = value + 1 ;
    }
   }
   );

//  Reset Button Click //    

resetBtn.addEventListener("Click",()=>{
 displayValue.innertext = 0 ;
}
);