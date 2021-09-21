const navSlide = () => {
    const burg = document.querySelector('.burg');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    //Toggle Nav

    burg.addEventListener('click', () => {
        //Toggle Nav
        nav.classList.toggle('nav-active');

        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.3s ease forwards ${
          index / 7 + 0.3
        }s`;
            }
        });
        //Burger Animation
        burg.classList.toggle('toggle');
    });
};

navSlide();