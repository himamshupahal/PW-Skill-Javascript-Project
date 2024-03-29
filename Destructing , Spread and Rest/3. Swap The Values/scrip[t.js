function Swap(a,b){
    [a,b] = [b,a];
    return [a,b];
}

let x = 1 ;
let y = 2 ;
[x,y] = Swap(x,y)
console.log(x,y);
// RESULT :- 2 1 //