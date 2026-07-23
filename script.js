let timeLeft = 15;

const timer = document.getElementById("timer");

const telegramLink = "https://t.me/+HBzm1B2SKL0zYjhl";

const countdown = setInterval(function () {

  timeLeft--;

  timer.textContent = timeLeft;

  if (timeLeft <= 0) {

    clearInterval(countdown);

    window.location.href = telegramLink;

  }

}, 1000);
