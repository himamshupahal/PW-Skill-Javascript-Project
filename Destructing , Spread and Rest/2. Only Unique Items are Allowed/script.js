function UniqueElements(Arr){
    return new Set(Arr)
}

console.log(UniqueElements([1,2,2,3,3,4]));
// RESULT :- Set(4) { 1, 2, 3, 4 } //

console.log(UniqueElements([5,6,7,7,8,8]));
// RESULT :- Set(4) { 5, 6, 7, 8 }   //