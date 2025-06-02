document.addEventListener('DOMContentLoaded', function() {
    // Working Process Section - Toggle accordion
    const processCards = document.querySelectorAll('.process-card');
    
    processCards.forEach(card => {
        const toggleBtn = card.querySelector('.toggle-btn');
        
        if (toggleBtn) {
            toggleBtn.addEventListener('click', function() {
                // Check if this card is already active
                const isActive = card.classList.contains('active');
                
                // Close all cards first
                processCards.forEach(c => {
                    c.classList.remove('active');
                    
                    const content = c.querySelector('.process-content');
                    if (content) {
                        content.style.display = 'none';
                    }
                    
                    const btn = c.querySelector('.toggle-btn');
                    if (btn) {
                        btn.classList.remove('minus');
                        btn.classList.add('plus');
                        btn.innerHTML = '<img src="images/plus-icon.svg" alt="Expand">';
                    }
                });
                
                // If the clicked card wasn't active, make it active
                if (!isActive) {
                    card.classList.add('active');
                    
                    // Create content div if it doesn't exist
                    let content = card.querySelector('.process-content');
                    if (!content) {
                        // Create divider
                        const divider = document.createElement('hr');
                        divider.className = 'process-divider';
                        card.appendChild(divider);
                        
                        // Create content
                        content = document.createElement('div');
                        content.className = 'process-content';
                        
                        // Add appropriate content based on the step number
                        const stepNumber = card.querySelector('h2').textContent;
                        
                        switch(stepNumber) {
                            case '02':
                                content.innerHTML = '<p>Our research and strategy development phase involves conducting thorough market research, competitor analysis, and audience targeting to create a customized digital marketing strategy that aligns with your business goals and objectives.</p>';
                                break;
                            case '03':
                                content.innerHTML = '<p>During the implementation phase, we execute the strategies we have developed, creating and optimizing content, setting up campaigns, and launching initiatives across various digital marketing channels.</p>';
                                break;
                            case '04':
                                content.innerHTML = '<p>Once your digital marketing campaigns are live, we continuously monitor their performance and make data-driven optimizations to improve results and maximize ROI.</p>';
                                break;
                            case '05':
                                content.innerHTML = '<p>Transparent reporting and regular communication are key components of our process. We provide detailed reports on campaign performance and maintain open lines of communication to keep you informed and involved.</p>';
                                break;
                            case '06':
                                content.innerHTML = '<p>Digital marketing is an evolving field, and we are committed to continual improvement. We regularly evaluate and refine our strategies to ensure we are using the most effective techniques and staying ahead of industry trends.</p>';
                                break;
                            default:
                                content.innerHTML = '<p>During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.</p>';
                        }
                        
                        card.appendChild(content);
                    } else {
                        content.style.display = 'block';
                    }
                    
                    // Update button
                    toggleBtn.classList.remove('plus');
                    toggleBtn.classList.add('minus');
                    toggleBtn.innerHTML = '<img src="images/minus-icon.svg" alt="Collapse">';
                }
            });
        }
    });
    
    // Testimonials Slider
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    const navDots = document.querySelectorAll('.nav-dot');
    const prevBtn = document.querySelector('.nav-prev');
    const nextBtn = document.querySelector('.nav-next');
    
    let currentSlide = 0;
    
    function showSlide(index) {
        // Hide all slides
        testimonialCards.forEach(card => {
            card.style.display = 'none';
        });
        
        // Deactivate all dots
        navDots.forEach(dot => {
            dot.classList.remove('active');
        });
        
        // Show the current slide
        if (testimonialCards[index]) {
            testimonialCards[index].style.display = 'flex';
        }
        
        // Activate the current dot
        if (navDots[index]) {
            navDots[index].classList.add('active');
        }
    }
    
    // Initialize the slider
    showSlide(currentSlide);
    
    // Event listeners for navigation
    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            currentSlide = (currentSlide > 0) ? currentSlide - 1 : testimonialCards.length - 1;
            showSlide(currentSlide);
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            currentSlide = (currentSlide < testimonialCards.length - 1) ? currentSlide + 1 : 0;
            showSlide(currentSlide);
        });
    }
    
    navDots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });
    
    // Radio buttons in the contact form
    const radioOptions = document.querySelectorAll('.radio-option');
    
    radioOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Remove active class from all options
            radioOptions.forEach(opt => {
                const radio = opt.querySelector('.radio-button');
                radio.classList.remove('active');
            });
            
            // Add active class to clicked option
            const radio = option.querySelector('.radio-button');
            radio.classList.add('active');
        });
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            
            if (targetId !== '#') {
                const target = document.querySelector(targetId);
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 100,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}); 