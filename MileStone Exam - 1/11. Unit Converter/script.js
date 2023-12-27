function temperature() {

    const Celicus = document.getElementById('celcius').value ;
    const Result = document.getElementById('result');

    console.log(Result);

    const Farenheit = ( Celicus * 9 / 5 ) + 32 ;
    Result.innerText = Farenheit ;

} ;

document.getElementById('btn').addEventListener("click",temperature)