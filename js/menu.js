document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-links');
    const menuIcon = document.getElementById('menu-icon');
    const dropdown = document.querySelector('.dropdown');
    const dropdownContent = document.querySelector('.dropdown-content');
    const btnAccessibility = document.getElementById('accesibilidad-toggle');

    const body = document.querySelector("body");
    const nav = document.querySelector("nav");
    const footer = document.querySelector("footer");
    const logoB = document.querySelector(".logo b");
    const servicioIteam = document.querySelectorAll(".servicio-item");
    const statBody = document.querySelectorAll(".stat-card");
    const contactMap = document.querySelector(".contact-map");
    const contactForm = document.querySelector(".contact-form");
    const contactSplit = document.querySelector(".contact-split");
    const localesMap = document.querySelector(".map-container");

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


    // boton para cambiar a modo accesibilidad
    btnAccessibility.addEventListener('click', () => {
        body.style.backgroundColor = "black";
        body.style.color = "white";
        body.style.fontSize = "20px";
        footer.style.backgroundColor = "#1b4f8f";
        footer.style.color = "white";
        nav.style.backgroundColor = "#1b4f8f";
        logoB.style.color = "#022a5aff";
        if (contactMap) contactMap.style.backgroundColor = "#1b4f8f";
        if (contactForm) contactForm.style.backgroundColor = "#1b4f8f";
        if (contactSplit) contactSplit.style.backgroundColor = "#1b4f8f";
        if (localesMap) localesMap.style.backgroundColor = "#1b4f8f";

        servicioIteam.forEach(item => {
            item.style.backgroundColor = "#1b4f8f";
            item.style.color = "white"; 
        });

        statBody.forEach(item => {
            item.style.backgroundColor = "#1b4f8f";
            item.style.color = "white"; 
        });
        document.querySelectorAll("h1").forEach(h1 => {
                h1.style.color = "white";
        });

        document.querySelectorAll("h2").forEach(h2 => {
                h2.style.color = "white";
        });
        
        document.querySelectorAll("h3").forEach(h3 => {
                h3.style.color = "white";
        });

        document.querySelectorAll("h4").forEach(h4 => {
                h4.style.color = "white";
        });


        document.querySelectorAll("p").forEach(p => {
            p.style.color = "white";
            p.style.fontSize = "20px";  
        });

        document.querySelectorAll("i").forEach(icon => {
            icon.style.color = "white";
        });
    });
});