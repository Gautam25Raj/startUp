const main = document.querySelector('.deco-1');
const loadText = document.querySelector(".loading_text");

let load = 0;
let interval = setInterval(blurring, 40);

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

function blurring() {
  load++;
  if (load > 99) {
    clearInterval(interval);
    main.style.filter = `blur(0px)`;
    loadText.style.display = "none";
  }

  loadText.innerHTML = `${load}%`;
  loadText.style.opacity = scale(load, 0, 100, 1, .2);
  // main.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}
