

document.addEventListener('DOMContentLoaded', function(){

const nav = document.querySelector('.navbar')
const allNavItems = document.querySelectorAll('.nav-link')
const show = document.querySelector('.navbar-collapse')

function addShadow() {
	if (window.scrollY >= 300) {
		nav.classList.add('shadow-bg')
	} else {
		nav.classList.remove('shadow-bg')}
}


allNavItems.forEach(item => item.addEventListener('click', () => show.classList.remove('show')))




window.addEventListener('scroll',addShadow)
})