document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-links');
    const menuIcon = document.getElementById('menu-icon');
    const dropdown = document.querySelector('.dropdown');
    const dropdownContent = document.querySelector('.dropdown-content');

    // Toggle main menu
    mobileMenu.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('active');
        document.body.classList.toggle('noscroll', isOpen);
        
        if (isOpen) {
            menuIcon.classList.remove('fa-bars');
            menuIcon.classList.add('fa-times');
        } else {
            menuIcon.classList.remove('fa-times');
            menuIcon.classList.add('fa-bars');
            // Close submenu when closing main menu
            dropdownContent.classList.remove('show');
            dropdown.classList.remove('active');
        }
    });

    // Close menu when clicking a non-dropdown link
    document.querySelectorAll('.nav-links a:not(.dropdown > a)').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            document.body.classList.remove('noscroll');
            menuIcon.classList.remove('fa-times');
            menuIcon.classList.add('fa-bars');
        });
    });
});