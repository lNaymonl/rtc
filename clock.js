const clock = document.querySelectorAll(".clock");

const currentDate = () => {
  return new Date();
};

const currentTime = () => {
  return (
    (currentDate().getHours() >= 10
      ? currentDate().getHours()
      : "0" + currentDate().getHours()) +
    ":" +
    (currentDate().getMinutes() >= 10
      ? currentDate().getMinutes()
      : "0" + currentDate().getMinutes()) +
    ":" +
    (currentDate().getSeconds() >= 10
      ? currentDate().getSeconds()
      : "0" + currentDate().getSeconds())
  );
};

clock.forEach((element) => {
  element.textContent = currentTime();

  setInterval(() => {
    element.textContent = currentTime();
  }, 1000);
});
