document.addEventListener('DOMContentLoaded', () => {
    // Tema claro/oscuro
    const themeToggle = document.getElementById('theme-toggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Verificar si existe una preferencia guardada
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else if (currentTheme === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
    } else if (prefersDarkScheme.matches) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    
    // Cambiar el tema al hacer clic en el botón
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            let theme;
            if (document.documentElement.getAttribute('data-theme') === 'dark') {
                document.documentElement.setAttribute('data-theme', 'light');
                theme = 'light';
            } else {
                document.documentElement.setAttribute('data-theme', 'dark');
                theme = 'dark';
            }
            localStorage.setItem('theme', theme);
        });
    }

    // Animaciones al hacer scroll
    const animateOnScroll = () => {
        const sections = document.querySelectorAll('.expertise, .skills-section, .featured-projects, .testimonials, .certifications, .cta');
        
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight * 0.85) {
                section.classList.add('animate-in');
            }
        });
    };

    // Inicializar animaciones
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Ejecutar una vez al cargar la página
    
    // Testimonios slider
    let currentTestimonial = 0;
    const testimonials = document.querySelectorAll('.testimonial');
    const totalTestimonials = testimonials.length;
    
    if (totalTestimonials > 2) { // Solo activar el slider si hay más de 2 testimonios
        const rotateTestimonials = () => {
            testimonials.forEach((testimonial, index) => {
                testimonial.style.display = 'none';
            });
            
            testimonials[currentTestimonial].style.display = 'block';
            testimonials[currentTestimonial === totalTestimonials - 1 ? 0 : currentTestimonial + 1].style.display = 'block';
            
            currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
        };
        
        setInterval(rotateTestimonials, 5000); // Cambiar testimonios cada 5 segundos
    }

    // Navbar activa al hacer scroll
    const sections = document.querySelectorAll('main > section');
    const navLinks = document.querySelectorAll('nav ul li a');
    
    const updateActiveNavLink = () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= sectionTop - 100) {
                current = section.getAttribute('id') || '';
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    };
    
    window.addEventListener('scroll', updateActiveNavLink);
    
    // Animaciones para las barras de habilidades
    const skillBars = document.querySelectorAll('.skill-bar span');
    
    const animateSkillBars = () => {
        skillBars.forEach(bar => {
            const barTop = bar.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (barTop < windowHeight * 0.9) {
                bar.style.width = bar.style.width || '0%';
                bar.style.transition = 'width 1s ease-out';
            }
        });
    };
    
    window.addEventListener('scroll', animateSkillBars);
    
    // Filtros para proyectos en la página de proyectos
    const projectFilters = document.querySelectorAll('.project-filter');
    const projectItems = document.querySelectorAll('.project-item');
    
    if (projectFilters.length > 0) {
        projectFilters.forEach(filter => {
            filter.addEventListener('click', function() {
                const filterValue = this.getAttribute('data-filter');
                
                projectFilters.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                projectItems.forEach(item => {
                    if (filterValue === 'all' || item.classList.contains(filterValue)) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }
    
    // Formulario de contacto (validación básica)
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');
            
            let isValid = true;
            
            // Validación básica
            if (nameInput.value.trim() === '') {
                isValid = false;
                nameInput.classList.add('error');
            } else {
                nameInput.classList.remove('error');
            }
            
            if (emailInput.value.trim() === '' || !isValidEmail(emailInput.value)) {
                isValid = false;
                emailInput.classList.add('error');
            } else {
                emailInput.classList.remove('error');
            }
            
            if (messageInput.value.trim() === '') {
                isValid = false;
                messageInput.classList.add('error');
            } else {
                messageInput.classList.remove('error');
            }
            
            if (isValid) {
                // Aquí se puede agregar el código para enviar el formulario
                // Por ahora, solo mostraremos un mensaje
                const formMessage = document.getElementById('formMessage');
                formMessage.textContent = '¡Gracias por tu mensaje! Me pondré en contacto contigo pronto.';
                formMessage.classList.add('success-message');
                contactForm.reset();
                
                setTimeout(() => {
                    formMessage.textContent = '';
                    formMessage.classList.remove('success-message');
                }, 5000);
            }
        });
    }
    
    // Función para validar email
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});

// Efecto de tipeo en la página principal
if (document.querySelector('.hero-content h2')) {
    const text = document.querySelector('.hero-content h2').textContent;
    const typeSpeed = 50; // Velocidad de tipeo en ms
    
    if (window.innerWidth > 768) { // Solo en pantallas grandes
        document.querySelector('.hero-content h2').textContent = '';
        
        let charIndex = 0;
        function typeText() {
            if (charIndex < text.length) {
                document.querySelector('.hero-content h2').textContent += text.charAt(charIndex);
                charIndex++;
                setTimeout(typeText, typeSpeed);
            }
        }
        
        // Iniciar el efecto después de un pequeño retraso
        setTimeout(typeText, 500);
    }
}