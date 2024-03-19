const btn =document.getElementById('btn');

const URLRegex = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig;

function CheckURLValidity() {
  const URL = document.getElementById('url').value;
   if (URLRegex.test(URL)){
    alert(`${URL} is a Valid URL .`);
   }
   else {
    alert(`${URL} is not a Valid URL . `)
   }
}

btn.addEventListener("click",CheckURLValidity)