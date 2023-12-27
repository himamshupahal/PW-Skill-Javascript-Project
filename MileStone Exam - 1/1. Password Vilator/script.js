const firstpassword = document.getElementById("password");
const confirmpassword = document.getElementById("c-password");
const submitBtn = document.getElementById("submit-btn");

// Adding  A Event Listener in below this //

submitBtn.addEventListener("click" ,  () => {
  if(firstpassword.value === confirmpassword.value ) {
  alert("Password Matched. Password validation Successful.")
  }

  else{
    alert("Password didn't match. Password validation unsuccessful")
  }
}
)
