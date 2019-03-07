// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
// console.log(menu);
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
// console.log(menuButton);

const toggleMenu = () => {
  menu.classList.toggle('menu--open');
  // console.log(menu);
}
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', () => toggleMenu());