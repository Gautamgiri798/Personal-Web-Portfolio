document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // Sticky Navigation
    const navbar = document.getElementById('navbar');
    const backToTop = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', function() {
        // Sticky navbar
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Back to top button
        if (window.scrollY > 300) {
            backToTop.classList.add('active');
        } else {
            backToTop.classList.remove('active');
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();
    
    // Form submission
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send the form data to a server
            // For this example, we'll just log it and show an alert
            console.log({ name, email, subject, message });
            
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        });
    }
    
    // Add active class to current section in navigation
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
});

// Certificate Modal Functionality
const modal = document.getElementById('certificate-modal');
const modalImg = document.getElementById('certificate-image');
const downloadBtn = document.getElementById('download-certificate');
const closeModal = document.querySelector('.close-modal');

document.querySelectorAll('.view-certificate').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        const certificateSrc = this.getAttribute('data-certificate');
        modalImg.src = certificateSrc;
        downloadBtn.href = certificateSrc;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('certificate-modal');
    const modalImg = document.getElementById('certificate-image');
    const downloadBtn = document.getElementById('download-certificate');
    const closeModal = document.querySelector('.close-modal');

    // Add click handlers to all certificate buttons
    document.querySelectorAll('.view-certificate').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const imagePath = this.getAttribute('data-image');
            const certificateTitle = this.getAttribute('data-title');
            
            // Set image source and alt text
            modalImg.src = imagePath;
            modalImg.alt = certificateTitle;
            
            // Set download attributes
            downloadBtn.href = imagePath;
            downloadBtn.setAttribute('download', certificateTitle.replace(/\s+/g, '_') + '.png');
            
            // Show modal
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
            
            // Preload image to handle errors
            const img = new Image();
            img.src = imagePath;
            img.onerror = function() {
                modalImg.alt = "Certificate image not found";
                console.error("Image not found:", imagePath);
            };
        });
    });

    // Close modal handlers
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Close with ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});

// Smooth scrolling for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Certificate modal functionality
    const modal = document.getElementById('certificate-modal');
    const modalImg = document.getElementById('certificate-image');
    const downloadBtn = document.getElementById('download-certificate');
    const closeBtn = document.querySelector('.close-modal');
    
    // Get all certificate buttons
    const certificateButtons = document.querySelectorAll('.view-certificate');
    
    // Add click event to each certificate button
    certificateButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const imgSrc = this.getAttribute('data-image');
            const title = this.getAttribute('data-title');
            
            // Set modal content
            modal.style.display = 'block';
            modalImg.src = imgSrc;
            modalImg.alt = title;
            
            // Set download attributes
            downloadBtn.setAttribute('download', title.replace(/\s+/g, '_') + '.png');
            downloadBtn.setAttribute('href', imgSrc);
        });
    });
    
    // Close modal when clicking X
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Get modal elements
    const modal = document.getElementById('certificate-modal');
    const modalImg = document.getElementById('certificate-image');
    const downloadBtn = document.getElementById('download-certificate');
    const closeBtn = document.querySelector('.close-modal');
    
    // Store current certificate data
    let currentCertificate = {
        image: '',
        title: ''
    };

    // Add click event to all certificate buttons
    document.querySelectorAll('.view-certificate').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            currentCertificate = {
                image: this.getAttribute('data-image'),
                title: this.getAttribute('data-title')
            };
            
            // Display modal with certificate
            modal.style.display = 'block';
            modalImg.src = currentCertificate.image;
            modalImg.alt = currentCertificate.title;
        });
    });

    // Download button functionality
    downloadBtn.addEventListener('click', function() {
        if (!currentCertificate.image) return;
        
        // Create a temporary anchor element
        const a = document.createElement('a');
        a.href = currentCertificate.image;
        a.download = currentCertificate.title.replace(/\s+/g, '_') + '.png';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    });

    // Close modal when clicking X
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});