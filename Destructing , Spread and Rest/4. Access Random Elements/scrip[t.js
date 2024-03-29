function Extract(Arr){

    const [first,second, , ,last] = Arr ;
    return [first,second,last];
}

let Array = [1,2,3,4,5,6];
console.log(Extract(Array));
// RESULT :- [1,2,5] //