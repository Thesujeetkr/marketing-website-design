function toggle() {
    const navbar = document.querySelector('.navbar');
    const menuBtn = document.querySelector('.menu-btn')
    const closeBtn = document.querySelector('.close-btn');
    if (navbar.style.right === "0%") {
        navbar.style.right = '-100%';
        // navbar.style.visibility = 'hidden'
    }
    else {
        navbar.style.right = '0%';
        navbar.style.display = 'block'
        // menuBtn.style.display = "none"
        // closeBtn.style.display = 'block'
    }
}


