(function () {
	const header = document.getElementsByClassName('header');
	window.onscroll = () => {
		if(window.pageYOffset > 50){
			header[0].classList.add("header_active")
		} else {
			header[0].classList.remove("header_active")
		}
	}
}() );

(function () {
	const burgerMenu = document.getElementsByClassName('burger');
	const menu = document.getElementsByClassName('header__menu');
	const burgerMenuCloseEl = document.getElementsByClassName('header__nav-close');
	burgerMenu[0].addEventListener('click', () => {
		menu[0].classList.add('header__menu_active');
	})
	burgerMenuCloseEl[0].addEventListener('click', () => {
		menu[0].classList.remove('header__menu_active');
	})
} ())