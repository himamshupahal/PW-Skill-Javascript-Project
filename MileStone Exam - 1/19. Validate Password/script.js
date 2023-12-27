function validate() {

    const Email = document.getElementById('email').value ;
    const Password = document.getElementById('password').value ;
    const DisplayValidate = document.getElementById('validate');

    // DisplayValidate.innerText = " 12 " //

    if(Email.includes("@gmail.com") && Password.length >= 8 ) {
        DisplayValidate.innerText = " Valid Email and Password ! " ;
        DisplayValidate.style.color = "black" ;
    }

    else {
        DisplayValidate.innerText = " Invalid Email or Password ! " ;
        DisplayValidate.style.color = "red" ;
    }
}

document.getElementById('submit-btn').addEventListener("click",validate);