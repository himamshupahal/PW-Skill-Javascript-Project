function GenerateTriangle(){
    const Rows = document.getElementById("user-rows").value ;
    const Result = document.getElementById("result") ;

    Result.innerHTML = "";

    for (let i = 1 ; i <= Rows ; i++) {
        var parent = document.createElement("div") ;
    

    for(let j = 1 ; j<= Rows - i + 1 ; j++ ) {
        var child = document.createElement("span");
        child.innerHTML= " * " ;
        parent.appendChild(child);
    }
    Result.appendChild(parent);
}
}

document.getElementById("btn").addEventListener("click",GenerateTriangle)