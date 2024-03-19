const DisplayResult = document.getElementById('result');
const Btn = document.getElementById('btn');
const Progess = document.getElementById('progess');

Btn.addEventListener("click", () => {
    setTimeout(() => {
    DisplayResult.innerText = Math.floor(Math.random() * 100);
    Progess.style.display ="none";
    },3000)
    DisplayResult.innerText = "" ;
    Progess.style.display = "block";
}
);


// ***************************** -: Dark Mode :- ******************************** //

document.querySelector('#dark-icon').addEventListener("click" , () => {
    document.body.classList.toggle('dark-theme');
    if(document.body.className == "dark-theme") {
        document.querySelector('#dark-icon').innerText ="Light Mode";
    }
    else{
        document.querySelector('#dark-icon').innerText ="Dark Mode";
      
    }
}
);