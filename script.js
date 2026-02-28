// Initialize particles
function initParticles() {
    const heroSection = document.querySelector('.hero-section');
    const heroParticles = document.querySelector('.hero-particles');
    
    if (!heroSection || !heroParticles) return;

    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 8 + 2;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 4 + 4) + 's';
        
        heroParticles.appendChild(particle);
    }
}

// Scroll animations
function initScrollAnimations() {
    const elements = document.querySelectorAll(
        '.content-card, .video-card, .interactive-card, .concept-card, ' +
        '.method-card, .layer-card, .function-card, .summary-item, ' +
        '.workflow-step, .info-card'
    );
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Scroll handler for navbar and back to top button
function handleScroll() {
    const backToTopBtn = document.getElementById('backToTop');
    const navbar = document.querySelector('.navbar');
    
    if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
    
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)';
    }
}

// Scroll to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Smooth scroll for navigation links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Add animation class to styles
function addAnimationStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
}

// Fun facts about neural networks
const neuralNetworkFacts = [
    "第一个神经网络感知机发明于1957年",
    "现代深度学习模型可以有数千亿个参数",
    "CNN特别擅长处理图像数据",
    "反向传播算法本质是链式法则的应用",
    "ReLU激活函数是深度学习中最常用的激活函数",
    "Adam优化器是当前最流行的优化方法之一",
    "Transformer架构彻底改变了自然语言处理",
    "GPT-3有1750亿个参数"
];

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    initParticles();
    initScrollAnimations();
    initSmoothScroll();
    addAnimationStyles();
    
    window.addEventListener('scroll', handleScroll);
    
    // Console welcome message
    console.log('%c🧠 欢迎来到神经网络学习站！', 'font-size: 20px; font-weight: bold; color: #6366f1;');
    console.log('%c让我们一起探索AI的奥秘吧！', 'font-size: 14px; color: #666;');
    console.log('%c提示：点击导航链接可以平滑滚动到对应章节', 'font-size: 12px; color: #888;');
});

// Add hover effects for cards
function addHoverEffects() {
    const cards = document.querySelectorAll('.content-card, .method-card, .layer-card, .function-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-12px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Initialize hover effects after DOM is ready
document.addEventListener('DOMContentLoaded', addHoverEffects);

// Track reading progress
function trackReadingProgress() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    
    // You can use this to add a progress bar if needed
    console.log('Reading progress:', scrolled.toFixed(2) + '%');
}

// Add scroll event for reading progress
window.addEventListener('scroll', trackReadingProgress);

// Add keyboard navigation
document.addEventListener('keydown', function(e) {
    // Press 'H' to scroll to top
    if (e.key === 'h' || e.key === 'H') {
        scrollToTop();
    }
    
    // Press 'Escape' to close any active modals (if added later)
    if (e.key === 'Escape') {
        // Close any modals here
    }
});

// Add touch support for mobile
function addTouchSupport() {
    let touchStartY = 0;
    
    document.addEventListener('touchstart', function(e) {
        touchStartY = e.touches[0].clientY;
    });
    
    document.addEventListener('touchmove', function(e) {
        const touchY = e.touches[0].clientY;
        const diff = touchStartY - touchY;
        
        // Prevent pull-to-refresh on mobile
        if (diff > 0 && window.scrollY === 0) {
            e.preventDefault();
        }
    }, { passive: false });
}

// Initialize touch support
document.addEventListener('DOMContentLoaded', addTouchSupport);

// Add intersection observer for lazy loading (if images are added later)
const lazyLoadObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.add('loaded');
            lazyLoadObserver.unobserve(img);
        }
    });
});

// Add performance monitoring
function trackPerformance() {
    if ('performance' in window) {
        window.addEventListener('load', function() {
            const perfData = performance.getEntriesByType('navigation')[0];
            console.log('Page load time:', perfData.loadEventEnd - perfData.startTime, 'ms');
            console.log('DOM content loaded:', perfData.domContentLoadedEventEnd - perfData.startTime, 'ms');
        });
    }
}

// Track performance
document.addEventListener('DOMContentLoaded', trackPerformance);

// Add search functionality (placeholder for future enhancement)
function initSearch() {
    const searchInput = document.getElementById('searchInput');
    
    if (!searchInput) return;
    
    searchInput.addEventListener('input', function(e) {
        const query = e.target.value.toLowerCase();
        const sections = document.querySelectorAll('.section');
        
        sections.forEach(section => {
            const text = section.textContent.toLowerCase();
            if (text.includes(query)) {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        });
    });
}

// Initialize search when DOM is ready
document.addEventListener('DOMContentLoaded', initSearch);

// Add animation on element intersection
function animateOnIntersection() {
    const elements = document.querySelectorAll('.summary-item, .layer-card');
    
    elements.forEach((el, index) => {
        el.style.animationDelay = (index * 0.1) + 's';
    });
}

// Initialize intersection animations
document.addEventListener('DOMContentLoaded', animateOnIntersection);

// Export functions for global use (if needed)
window.scrollToTop = scrollToTop;
window.initParticles = initParticles;
window.initScrollAnimations = initScrollAnimations;