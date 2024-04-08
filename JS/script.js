/*================ SHOW MENU ================*/
const navMenu = document.getElementById('nav_menu'),
    navToggle = document.getElementById('nav_toggle'),
    navClose = document.getElementById('nav_close')

/* Menu show */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}


/*================ REMOVE MENU MOBILE ================*/
const navLink = document.querySelectorAll('.nav-link')

const linkAction = () => {
    const navMenu = document.getElementById('nav_menu')
    // When you click on each nav-link, you remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*================ SWIPER FOR WORKS SECTION ================*/
let swiperWorks = new Swiper(".works-container", {
    loop: true,
    spaceBetween: 24,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    breakpoints: {
        1200: {
            slidesPerView: 2,
            spaceBetween: -56,
        },
    },
});


/*================ EMAIL JS ================*/
const contactForm = document.getElementById('contact-form'),
    contactName = document.getElementById('contact-name')
contactEmail = document.getElementById('contact-email')
contactMessage = document.getElementById('contact-message')
contactError = document.getElementById('contact-error')

const sendEmail = (e) => {
    e.preventDefault()

    //check if this field has a value
    if (contactName.value === '' || contactEmail.value === '' || contactMessage.value === '') {
        //add and remove color
        contactError.classList.remove('color-green')
        contactError.classList.add('color-red')

        //show message
        contactError.textContent = 'Missing required information. Please fill all fields.'
    } else {
        //serviceID - templateID - #form - publickey
        emailjs.sendForm('service_bo6z58o', 'template_ezb1db3', '#contact-form', 'NVO3ahbU7tu0S-02W')
            .then(() => {
                //show message and add color
                contactError.classList.add('color-green')
                contactError.textContent = 'Message sent'

                //remove error message timer
                setTimeout(() => {
                    contactError.textContent = ''
                }, 3000)
            }, (error) =>{
                alert('Message not sent. Please check your internet connection and try again.', error)
            })

        //To clear the input field
        contactName.value = ''
        contactEmail.value = ''
        contactMessage.value = ''
    }
}
contactForm.addEventListener('submit', sendEmail)


/*================ SCROLLS SECTION ACTIVE LINK ================*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav-menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)


/*================ SHOW SCROLL UP BUTTON ================*/
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)



/*================ CHANGE TO LIGHT THEME ================*/
const themeButton = document.getElementById('theme-button');
const body = document.body;

themeButton.addEventListener('click', () => {
    body.classList.toggle('light-theme');
    // Change logo based on the theme
    const logoImg = document.getElementById('logo-img');
    if (body.classList.contains('light-theme')) {
        logoImg.src = './IMAGES/assets/Logo2.svg'; // Change to Logo2 for light theme
    } else {
        logoImg.src = './IMAGES/assets/Logo1.svg'; // Change back to Logo1 for dark theme
    }
});


/*================ SCROLL REVEAL ANIMATION ================*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
    reset: true /* animation repeat */
});

sr.reveal('.home-data, .works-container, .footer-container')
sr.reveal('.home-info div', {delay: 600, origin: 'bottom', interval: 100})
sr.reveal('.skills-content:nth-child(1), .contact-content:nth-child(1)', {origin: 'left'})
sr.reveal('.skills-content:nth-child(2), .contact-content:nth-child(2)', {origin: 'right'})
sr.reveal('.skills-content:nth-child(3)', {origin: 'bottom'})
sr.reveal('.qualification-content', {interval: 100})