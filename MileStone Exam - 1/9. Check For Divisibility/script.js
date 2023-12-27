 let arr = [ 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 ]

// Print The Number that Divisible By 3 not by 2

for(let i = 0 ; i < arr.length ; i++ ) {
    if(arr[i] % 3 === 0 && arr[i] % 2 !== 0 ) {
        console.log(arr[i]);
    }
}

// Output After Run Code  :- 3 , 9