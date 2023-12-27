const ProgessBar = document.getElementById("progress-bar");
const WindowHeight = window.innerHeight;
const FullHeight = document.body.clientHeight - WindowHeight ;

window.addEventListener("scroll" , () => {
    const Distance = window.pageYOffset ;
    const Progress = (Distance / FullHeight) * 100 ;
    ProgessBar.style.width = `${Progress}%` ;
}
);