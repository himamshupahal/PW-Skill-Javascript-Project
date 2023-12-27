const Items = [
    " HTML and Semantics " ,
    " Starting With CSS " ,
    " Working Template " ,
    " Mobile Responsive Webpages " ,
    " Grid and Flex-box in CSS " ,
    " Projects Using HTML and CSS " ,
    " Version Contol and Git " ,
    " Getting Starting With Javascript " ,
    " Advance Javascript " ,
    " Working With DOM " ,
    " Making Projects With HTML , CSS and Javascript  " ,
    " Unterstanding Fundamental of Computer Science " ,
    " Getting Started with  Database" , 
    " Understanding The Database " ,
    " Starting With NodeJs and Express " , 
    " Understanding React and its Fundamentals " , 
    " Understanding Hooks and Routers " , 
    " Starting and Completing Full Fledge Projects " , 
] ;

let Counter = 0 ;
let DeleteBtn = document.getElementById("delete-btn") ;
let AddBtn = document.getElementById("add-btn") ;
let ul = document.getElementById("list") ;

AddBtn.onclick = () => {
    if( Counter < Items.length ) {
        let ListItem = document.createElement("li");
        ListItem.innerText = Items[Counter] ;
        ul.appendChild(ListItem) ;
        Counter++ ;
    }

    else{
        alert("All items have been added! ") ;
    }
};

DeleteBtn.onclick = () => {
    list.removeChild(list.lastChild);
    Counter--;
};