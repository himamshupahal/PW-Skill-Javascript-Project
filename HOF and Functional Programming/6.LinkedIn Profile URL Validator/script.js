const btn = document.getElementById('btn');

const URLRegex = /https:\/\/www\.linkedin\.com*\/in\/[a-z]+[$&+,:;=?@#|'<>.^*()%!-][a-z]+[$&+,:;=?@#|'<>.^*()%!-].+/;

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