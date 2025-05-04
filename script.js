// Wait for DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Theme toggler
    const lightThemeToggle = document.getElementById('theme-light');
    const darkThemeToggle = document.getElementById('theme-dark');
    const ambientThemeToggle = document.getElementById('theme-ambient');
    const body = document.body;
    
    lightThemeToggle.addEventListener('click', function() {
        body.classList.remove('dark-theme');
        body.classList.remove('ambient-theme');
        body.classList.toggle('light-theme');
    });

    darkThemeToggle.addEventListener('click', function() {
        body.classList.remove('light-theme');
        body.classList.remove('ambient-theme');
        body.classList.toggle('dark-theme');
    });

    ambientThemeToggle.addEventListener('click', function() {
        body.classList.remove('light-theme');
        body.classList.remove('dark-theme');
        body.classList.toggle('ambient-theme');
    });
    
    // Form submission handling
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent the form from submitting to a server
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Validate form (simple validation)
        if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
            formMessage.textContent = 'Please fill out all fields.';
            formMessage.style.color = 'red';
            return;
        }
        
        // Simple email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            formMessage.textContent = 'Please enter a valid email address.';
            formMessage.style.color = 'red';
            return;
        }
        
        // Simulate form submission
        formMessage.textContent = 'Thank you for your message! I\'ll get back to you soon.';
        formMessage.style.color = 'green';
        
        // Reset form
        contactForm.reset();
        
        // In a real website, you would use AJAX to send the form data to a server here
    });
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });
    
    // Project cards hover effect enhancement
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.backgroundColor = 'var(--primary-color)';
            this.style.color = 'white';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'var(--card-bg)';
            this.style.color = 'var(--text-color)';
        });
    });
});
