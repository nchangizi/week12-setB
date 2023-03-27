// const buttonRef = document.querySelector("button");
// buttonRef.addEventListener("click", updateImage);

const buttonContainer = document.querySelector(".button-container");
// event parameter automatically receives event object
function bgChange(event) {
  //   console.log("buttons clicked ", event.target.tagName);
  if (event.target.tagName === "BUTTON") {
    event.target.classList.add("greenBG");
  }
}
buttonContainer.addEventListener("mouseover", bgChange);
