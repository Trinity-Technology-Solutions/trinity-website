// Navigation Fix Script for Trinity Technology Solutions Website
// This script ensures all navigation links work correctly across all pages

document.addEventListener('DOMContentLoaded', function() {
    // Get current page path
    const currentPath = window.location.pathname;
    const isServicePage = currentPath.includes('/services/');
    
    // Fix navigation links based on current page location
    const navLinks = document.querySelectorAll('nav a, .nav_menu_link, .new-nav a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        
        // Skip external links and anchors
        if (href && !href.startsWith('http') && !href.startsWith('#') && !href.startsWith('mailto') && !href.startsWith('tel')) {
            // If we're on a service page and the link doesn't start with ../
            if (isServicePage && !href.startsWith('../')) {
                // Add ../ prefix for service pages
                if (href === 'index.html') {
                    link.setAttribute('href', '../index.html');
                } else if (href === 'services.html') {
                    link.setAttribute('href', '../services.html');
                } else if (href === 'about-us.html') {
                    link.setAttribute('href', '../about-us.html');
                } else if (href === 'contact.html') {
                    link.setAttribute('href', '../contact.html');
                } else if (href === 'career.html') {
                    link.setAttribute('href', '../career.html');
                }
            }
            // If we're on a main page and the link starts with ../
            else if (!isServicePage && href.startsWith('../')) {
                // Remove ../ prefix for main pages
                link.setAttribute('href', href.replace('../', ''));
            }
        }
    });
    
    // Fix footer links as well
    const footerLinks = document.querySelectorAll('footer a');
    footerLinks.forEach(link => {
        const href = link.getAttribute('href');
        
        if (href && !href.startsWith('http') && !href.startsWith('#') && !href.startsWith('mailto') && !href.startsWith('tel')) {
            if (isServicePage && !href.startsWith('../')) {
                if (href === 'index.html') {
                    link.setAttribute('href', '../index.html');
                } else if (href === 'services.html') {
                    link.setAttribute('href', '../services.html');
                } else if (href === 'about-us.html') {
                    link.setAttribute('href', '../about-us.html');
                } else if (href === 'contact.html') {
                    link.setAttribute('href', '../contact.html');
                }
            } else if (!isServicePage && href.startsWith('../')) {
                link.setAttribute('href', href.replace('../', ''));
            }
        }
    });
    
    console.log('Navigation links fixed for Trinity Technology Solutions website');
});