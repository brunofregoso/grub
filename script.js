let darkmode = () => {
  let bg = document.body;
  bg.style.backgroundColor = "black";
  document.getElementById("dark").classList.toggle("hidden");
  document.getElementById("light").classList.toggle("hidden");
let allElements = document.querySelectorAll("body *:not(script)");
for (let i = 0; i < allElements.length; i++) {
    let elem = allElements[i];
    elem.style.color = "white";
    elem.style.borderColor = "white";
}
};


let lightmode = () => {
  let bg = document.body;
  bg.style.backgroundColor = "white";
  document.getElementById("dark").classList.toggle("hidden");
  document.getElementById("light").classList.toggle("hidden");
  let textElements = document.querySelectorAll("body *:not(script)");
  for (let i = 0; i < textElements.length; i++) {
    let elem = textElements[i];
    elem.style.color = "black";
    elem.style.borderColor = "black";
  }
};

document.getElementById("dark").addEventListener("mouseover", () => {
  document.getElementById("moonIcon").setAttribute("color", "white");
  console.log("hovered");
  console.log(document.getElementById("moonIcon").getAttribute("color"));
});

document.getElementById("dark").addEventListener("mouseout", () => {
  document.getElementById("moonIcon").setAttribute("color", "black");
  console.log("hovered");
  console.log(document.getElementById("moonIcon").getAttribute("color"));
});

document.getElementById("light").addEventListener("mouseover", () => {
  document.getElementById("sun").setAttribute("color", "black");
  console.log("hovered");
  console.log(document.getElementById("sun").getAttribute("color"));
});

document.getElementById("light").addEventListener("mouseout", () => {
  document.getElementById("sun").setAttribute("color", "white");
  console.log("hovered");
  console.log(document.getElementById("sun").getAttribute("color"));
});
