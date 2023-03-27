const buttonRef = document.querySelector("button");

function alertUser() {
  alert("You clicked!!!!");
  //   buttonRef.removeEventListener("click", alertUser);
}

buttonRef.addEventListener("click", alertUser, { once: true });

function changeBGPink() {
  // document.body.style.backgroundColor= "pink"
  document.body.classList.add("pinkBG");
}

buttonRef.addEventListener("click", changeBGPink);

function changeText() {}
buttonRef.addEventListener("click", changeText);
