const burgerButton = document.querySelector('.dropdown');
const headerMenu = document.querySelector('.header__menu');

console.log(burgerButton); // Что выведет? null или элемент?
console.log(headerMenu);
console.log(1);

burgerButton.addEventListener('click', () => {
	console.log(1);
})