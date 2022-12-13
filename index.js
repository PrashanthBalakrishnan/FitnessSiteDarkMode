var wrapper;
var hamburger_menu;
var toggle;

const declare = () => {
  wrapper = document.querySelector('.wrapper');
  hamburger_menu = document.querySelector('.hamburger');
  toggle = document.querySelector('.toggle-btn');
};

declare();

const main = document.querySelector('main');

let dark = false;

const toggleAnimation = () => {
  dark = !dark;
  let clone = wrapper.cloneNode(true);
  if (dark) {
    clone.classList.remove('light');
    clone.classList.add('dark');
  } else {
    clone.classList.remove('dark');
    clone.classList.add('light');
  }
  clone.classList.add('copy');
  main.appendChild(clone);

  clone.addEventListener('animationend', () => {
    wrapper.remove();
    clone.classList.remove('copy');
    // Reset Variables
    declare();
    events();
  });
};

const events = () => {
  toggle.addEventListener('click', toggleAnimation);
  hamburger_menu.addEventListener('click', () => {
    wrapper.classList.toggle('active');
  });
};

events();
