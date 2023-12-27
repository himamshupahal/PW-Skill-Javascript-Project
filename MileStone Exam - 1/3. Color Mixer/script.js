const FirstColor = document.getElementById("first-color");
const SecondColor = document.getElementById("second-color");
const result = document.getElementById("result");

const btn = document.getElementById("btn");

btn.addEventListener("click", mixColor);

function mixColor() {
  const NewColor = FirstColor.value + SecondColor.value;

  switch (NewColor) {
    case "redblue":
      result.style.background = "purple";
      break;

    case "bluered":
      result.style.background = "purple";
      break;
    case "redyellow":
      result.style.background = "orange";
      break;

    case "yellowred":
      result.style.background = "orange";
      break;

    case "blueyellow":
      result.style.background = "green";
      break;

    case "yellowblue":
      result.style.background = "green";
      break;

    default:
      alert("invalid color combination");
      break;
  }
}

