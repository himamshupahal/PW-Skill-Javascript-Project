function checkCapitalornot() {
    const FirstName = document.getElementById("user-name").value ;
    const Result = document.getElementById("result") ;
    Result.innerText = FirstName.charAt(0).toUpperCase() + FirstName.slice(1);
    console.log(Result.innerText);

};