(function () {
	const header = document.getElementsByClassName('header');
	window.onscroll = () => {
		if(window.pageYOffset > 50){
			header[0].classList.add("header_active")
		} else {
			header[0].classList.remove("header_active")
		}
	}
}() )