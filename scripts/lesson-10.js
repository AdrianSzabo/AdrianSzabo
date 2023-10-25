function toggleButton(name) {
  const button = document.querySelector(`.${name}-button-off`);

  const isButtonOn = button.classList.contains(`${name}-button-on`);

  if (isButtonOn) {
    button.classList.remove(`${name}-button-on`);
  } else {
    const gamingButton = document.querySelector(".gaming-button-off");
    const musicButton = document.querySelector(".music-button-off");
    const techButton = document.querySelector(".tech-button-off");

    gamingButton.classList.remove("gaming-button-on");
    musicButton.classList.remove("music-button-on");
    techButton.classList.remove("tech-button-on");

    button.classList.add(`${name}-button-on`);
  }
}
const test = document.querySelector(".js-button");
console.log(test.classList.contains("js-button"));
