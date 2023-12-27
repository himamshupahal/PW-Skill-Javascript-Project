const Result = document.getElementsByClassName('result');
const Button = document.getElementById("btn");

const RandomColor = () => {
    let Val = "0123456789ABCDEF" ;
    let Cons = "#" ;
    for(let i = 0 ; i < 6 ; i++ ) {
        Cons = Cons + Val [Math.floor(Math.random() * 16 )];
    }
    return Cons ;
} ;

// console.log(randomColor()) ;

function ChangeRandomColor() {
    Result[0].style.backgroundColor = RandomColor();
    Result[1].style.backgroundColor = RandomColor() ;
}

Button.addEventListener("click" , ChangeRandomColor) ;