const buttonRef = document.querySelector("button");

function alertUser() {
  alert("You clicked!!!!");
  //   buttonRef.removeEventListener("click", alertUser);
}

buttonRef.addEventListener("click", alertUser, { once: true });

function changeBGPink() {
  // document.body.style.backgroundColor= "pink"
  document.body.classList.toggle("pinkBG");
}

buttonRef.addEventListener("click", changeBGPink);

function changeText() {
  // if the text says "Click Me!" -> change it to "clicked"
  // if it says "clicked!" -> change it back to "Click Me!"
  if (buttonRef.textContent === "Click Me!") {
    buttonRef.textContent = "Clicked!";
  }
  else{
    buttonRef.textContent = "Click Me!";

  }
}
buttonRef.addEventListener("click", changeText);
