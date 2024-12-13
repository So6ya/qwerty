document.addEventListener("DOMContentLoaded", function() {
    const downButton = document.querySelector('.down-slice a');

    downButton.addEventListener('click', function(event) {
        event.preventDefault(); 

        const footer = document.querySelector('#footer');
        footer.scrollIntoView({ 
            behavior: 'smooth' 
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.fade-in-section');

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); 
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});


function toggleMenu() {
    var menu = document.getElementById('nav-menu');
    if (menu.style.display === 'flex') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'flex';
    }
}


function toggleMenu() {
    var menu = document.getElementById('nav-menu');
    
    if (menu.style.display === 'flex') {
        menu.style.transition = 'all 0.2s ease-out'; 
        menu.style.opacity = '0';
        setTimeout(() => {
            menu.style.display = 'none';
        }, 500); 
    } else {
        menu.style.display = 'flex';
        menu.style.opacity = '0'; 
        menu.style.transition = 'all 0.2s ease-in'; 
        setTimeout(() => {
            menu.style.opacity = '1'; 
        }, 10); 
    }
}

