const redCircle = document.getElementById("red")

redCircle.addEventListener("click",
  function onClick(circle){
  circle.target.style.backgroundColor = "red";
  circle.target.style.width = "120px"
     }

);