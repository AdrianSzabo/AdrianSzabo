function onKeyUp(event) {
  const rating = document.querySelector(".rating");
  const password = event.target.value;
  const registerBtn = document.querySelector(".register-btn");
  let score = 0;
  rating.classList.remove("rating-weak");
  rating.classList.remove("rating-medium");
  rating.classList.remove("rating-strong");

  if (password.length >= 8) {
    score += 6;
  }
  if (/[a-z]/g.test(password)) {
    score++;
  }
  if (/[A-Z]/g.test(password)) {
    score++;
  }
  if (/[0-9]/g.test(password)) {
    score++;
  }
  if (/[!|%|#|?|*|$|@]/g.test(password)) {
    score++;
  }

  if (score >= 1 && score <= 5) {
    rating.classList.add("rating-weak");
    rating.innerHTML = "Weak";
  }

  if (score >= 6 && score <= 9) {
    rating.classList.add("rating-medium");
    rating.innerHTML = "Medium";
  }

  if (score === 10) {
    rating.classList.add("rating-strong");
    rating.innerHTML = "Strong";
  }
  if (score === 0) {
    rating.innerHTML = "";
  }

  registerBtn.disabled = score <= 5;
}
