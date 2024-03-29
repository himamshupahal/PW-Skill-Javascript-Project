function MaxMin(Arr){
    return {
        max : Math.max(...Arr),
        min : Math.min(...Arr),
    }
}

const Array = [3,7,2,9,4,1];
console.log(MaxMin(Array));
// RESULT :- { max: 9, min: 1 } //