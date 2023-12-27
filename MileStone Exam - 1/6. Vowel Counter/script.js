function calcVowel() {
    const Name = document.getElementById('user-name').value;
    const Result = document.getElementById('result') ;

    let count = 0 ;

    for( let i = 0 ; i < Name.length ; i++ ) {
        if(Name[i] == 'a' || Name[i] == 'e' || Name[i] == 'i' || Name[i] == 'u' || Name[i] == 'o' ) {
            count++ ;
        }
    }

   Result.innerText = count ;
}

document.getElementById("submit-btn").addEventListener("click",calcVowel);