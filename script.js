
document.addEventListener('DOMContentLoaded', () => {

    // 1. Mobile Menu Navigation Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIconOpen = document.getElementById('menu-icon-open');
    const menuIconClose = document.getElementById('menu-icon-close');

    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        menuIconOpen.classList.toggle('hidden');
        menuIconClose.classList.toggle('hidden');
    });

    // Close mobile menu when clicking links
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            menuIconOpen.classList.remove('hidden');
            menuIconClose.classList.add('hidden');
        });
    });

    // 2. Working Process Accordion Logic
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        const content = item.querySelector('.accordion-content');
        const icon = item.querySelector('.accordion-icon');

        header.addEventListener('click', () => {
            const isOpen = !content.classList.contains('hidden');

            // Close all other items
            accordionItems.forEach(i => {
                i.classList.remove('bg-lime');
                i.classList.add('bg-lightgrey');
                i.querySelector('.accordion-content').classList.add('hidden');
                i.querySelector('.accordion-icon').textContent = '+';
            });

            // Toggle clicked item
            if (!isOpen) {
                item.classList.remove('bg-lightgrey');
                item.classList.add('bg-lime');
                content.classList.remove('hidden');
                icon.textContent = '-';
            }
        });
    });

    // 3. Testimonial Carousel Logic
    const track = document.getElementById('testimonial-track');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const dots = document.querySelectorAll('#carousel-dots .dot');
    let currentSlide = 0;
    const totalSlides = 3;

    function updateCarousel(index) {
        currentSlide = index;
        track.style.transform = `translateX(-${currentSlide * 100}%)`;

        dots.forEach((dot, idx) => {
            if (idx === currentSlide) {
                dot.classList.remove('bg-gray-600');
                dot.classList.add('bg-lime');
            } else {
                dot.classList.remove('bg-lime');
                dot.classList.add('bg-gray-600');
            }
        });
    }

    nextBtn.addEventListener('click', () => {
        let next = (currentSlide + 1) % totalSlides;
        updateCarousel(next);
    });

    prevBtn.addEventListener('click', () => {
        let prev = (currentSlide - 1 + totalSlides) % totalSlides;
        updateCarousel(prev);
    });

    dots.forEach((dot, idx) => {
        dot.addEventListener('click', () => {
            updateCarousel(idx);
        });
    });

    // 4. Contact Form Submission Toast Notification
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        showNotification('Message sent successfully! We will get back to you soon.');
        contactForm.reset();
    });

    // 5. Subscribe Newsletter Button
    const subscribeBtn = document.getElementById('subscribe-btn');
    subscribeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        showNotification('Thank you for subscribing to Positivus newsletter!');
    });

    // Custom Notification Helper (replacing alert)
    function showNotification(message) {
        const toast = document.createElement('div');
        toast.className = 'fixed bottom-5 right-5 bg-dark text-lime px-6 py-4 rounded-xl shadow-2xl border border-lime z-50 transition-all transform translate-y-full opacity-0';
        toast.innerText = message;
        document.body.appendChild(toast);

        setTimeout(() => {
            toast.classList.remove('translate-y-full', 'opacity-0');
        }, 100);

        setTimeout(() => {
            toast.classList.add('translate-y-full', 'opacity-0');
            setTimeout(() => toast.remove(), 300);
        }, 4000);
    }

});

const logo = document.getElementById('logo');
const tl = gsap.timeline();

gsap.registerPlugin(ScrollTrigger);

function SectionOne() {

    tl.from(logo, {
        y: -30,
        duration: 0.5,
        opacity: 0,
        delay: 0.5,
    })

    tl.from("#nav-item, #btn-1", {
        y: -30,
        duration: 0.5,
        opacity: 0,
        stagger: 0.15,
    })

    tl.from("#text-1", {
        x: -200,
        opacity: 0,
        duration: 0.5,
    }, "-=0.3")
    tl.from("#paragraph", {
        x: -100,
        opacity: 0,
        duration: 0.4,
    })

    tl.from("#btn-2", {
        opacity: 0,
        duration: 0.4,
    })

    tl.from("#hero-img", {
        opacity: 0,
        duration: 0.5,
        x: 200,
    }, "-=0.7")

}

SectionOne()

gsap.from("#partner-logos img", {
    opacity: 0,
    y: 30,
    duration: 1.2,
    delay: 0.2,
    stagger: 0.2,
    scrollTrigger: {
        trigger: "#partner-logos",
        start: "top 90%",
        once: true,
        markers: false
    }
});

gsap.from("#service", {
    opacity: 0,
    duration: 0.5,
    x: -100,
    scrollTrigger: {
        trigger: "#service",
        scroller: "body",
        markers: false,
        start: "top 80%",
    }
});

gsap.from("#paragraph2", {
    opacity: 0,
    duration: 2,
    delay: 0.5,
    scrollTrigger: {
        trigger: "#paragraph2",
        scroller: "body",
        markers: false,
        start: "top 80%",
    }
})

const serviceCards = [
    { selector: "#left-line1", x: -300 },
    { selector: "#right-line1", x: 300 },
    { selector: "#left-line2", x: -300 },
    { selector: "#right-line2", x: 300 },
    { selector: "#left-line3", x: -300 },
    { selector: "#right-line3", x: 300 },
];

const QNA = [
    { selector: "#QNA-1-RIGHT", x: -300 },
    { selector: "#QNA-2-LEFT", x: 300 },
    { selector: "#QNA-3-RIGHT", x: -300 },
    { selector: "#QNA-4-LEFT", x: 300 },
    { selector: "#QNA-5-RIGHT", x: -300 },
    { selector: "#QNA-6-LEFT", x: 300 },
];

const UserCards = [
    { selector: "#team-card-1", x: -300 },
    { selector: "#team-card-3", x: 300 },
    { selector: "#team-card-4", x: -300 },
    { selector: "#team-card-6", x: 300 },
];
const UserCards2 = [
    { selector: "#team-card-2", y: -300 },
    { selector: "#team-card-5", y: 300 },
];


serviceCards.forEach(({ selector, x }) => {
    gsap.from(selector, {
        opacity: 0,
        duration: 2,
        delay: 0.7,
        x,
        scrollTrigger: {
            trigger: selector,
            scroller: "body",
            start: "top 85%",
            end: "top 60%",
            scrub: true,
            markers: false,
        },
    });
});



gsap.from("#text-3", {
    x: -300,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#text-3",
        scroller: "body",
        start: "top 90%",
        markers: false,
    }

})
gsap.from("#para-2", {
    x: 300,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#para-2",
        scroller: "body",
        start: "top 90%",
        markers: false,

    }
})
gsap.from("#btn-4", {
    opacity: 0,
    duration: 1,
    delay: 1,
    scrollTrigger: {
        trigger: "#btn-4",
        scroller: "body",
        start: "top 90%",
        markers: false,

    }
})

gsap.from("#service-img", {
    opacity: 0,
    duration: 1,
    x: 400,
    scrollTrigger: {
        trigger: "#service-img",
        scroller: "body",
        start: "top 90%",
        markers: false,

    }
})


gsap.from("#text-6", {
    x: -300,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#text-6",
        scroller: "body",
        start: "top 90%",
        markers: false,
    }

})
gsap.from("#para-4", {
    opacity: 0,
    duration: 1,
    delay: 1,
    scrollTrigger: {
        trigger: "#para-4",
        scroller: "body",
        start: "top 90%",
        markers: false,

    }
})

gsap.from("#container", {
    opacity: 0,
    duration: 2,
    x: 600,
    delay: 0.2,

    scrollTrigger: {
        trigger: "#container",
        scroller: "body",
        start: "top 90%",
        markers: false,
    }
})
gsap.from("#text-7", {
    x: -300,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#text-7",
        scroller: "body",
        start: "top 90%",
        markers: false,
    }

})

gsap.from("#para-7", {
    opacity: 0,
    duration: 1,
    delay: 1,
    scrollTrigger: {
        trigger: "#para-7",
        scroller: "body",
        start: "top 90%",
        markers: false,

    }
})

QNA.forEach(({ selector, x }) => {
    gsap.from(selector, {
        opacity: 0,
        duration: 1,
        delay: 0.3,
        x,
        scrollTrigger: {
            trigger: selector,
            start: "top 85%",
            markers: false,
        },
    });
});
gsap.from("#text-8", {
    x: -300,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: "#text-8",
            scroller: "body",
            start: "top 90%",
            markers: false,
        }
    
    })
    
    gsap.from("#para-8", {
        opacity: 0,
        duration: 1,
        delay: 1,
        scrollTrigger: {
            trigger: "#para-8",
            scroller: "body",
            start: "top 90%",
            markers: false,
    
        }
    })


    
    UserCards.forEach(({ selector, x, }) => {
        gsap.from(selector, {
            opacity: 0,
            duration: 1,
            delay: 0.3,
            x,
            scrollTrigger: {
                trigger: selector,
                start: "top 85%",
                markers: false,
            },
        });
    });

    UserCards2.forEach(({ selector, y, }) => {
        gsap.from(selector, {
            opacity: 0,
            duration: 1,
            delay: 0.2,
            y,
            scrollTrigger: {
                trigger: selector,
                scroller: "body",
                start: "top 85%",
                end: "top 60%",
                markers: false,
            },
        },);
    });


    gsap.from("#btn-10", {
        opacity: 0,
        x: 300,
        delay: 0.5,
        duration: 1,
        scrollTrigger: {
            trigger: "#btn-10",
            scroller: "body",
            start: "top 84%",
            markers: false,
        }
    })

    gsap.from("#span-8", {
        opacity: 0,
        x: -300,
        delay: 0.5,
        duration: 1,
        scrollTrigger: {
            trigger: "#span-8",
            scroller: "body",
            start: "top 86%",
            markers: false,
        }
    })
    gsap.from("#para-10", {
        opacity: 0,
        x: 300,
        delay: 0.5,
        duration: 1,
        scrollTrigger: {
            trigger: "#para-10",
            scroller: "body",
            start: "top 86%",
            markers: false,
        }
    })
    
    gsap.from("#container-2", {
        opacity: 0,
        x: 300,
        delay: 0.5,
        duration: 1,
        scrollTrigger: {
            trigger: "#container-2",
            scroller: "body",
            start: "top 86%",
            markers: false,
        }
    })

    gsap.from("#span-9", {
        opacity: 0,
        x: -300,
        delay: 0.5,
        duration: 1,
        scrollTrigger: {
            trigger: "#span-9",
            scroller: "body",
            start: "top 86%",
            markers: false,
        }
    })
    
    gsap.from("#para-11", {
        opacity: 0,
        x: 300,
        delay: 0.5,
        duration: 1,
        scrollTrigger: {
            trigger: "#para-11",
            scroller: "body",
            start: "top 86%",
            markers: false,
        }
    })

    gsap.from("#contact-box", {
        opacity: 0,
        x: 500,
        delay: 0.3,
        duration: 1,
        scrollTrigger: {
            trigger: "#contact-box",
            scroller: "body",
            start: "top 87%",
            markers: false,
        }
    })

