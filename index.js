function toggleMenu() {
    var menu = document.getElementById('nav-container');
    var icon = document.getElementById('icon');
    if (menu.style.height === '0px' || menu.style.height === '') {
        menu.style.height = '250px';
        menu.style.opacity = '1';
        icon.src = 'assets/icons8-cross-50.png'; 
    } else {
        menu.style.height = '0';
        menu.style.opacity = '0';
        icon.src = 'assets/icons8-menu-50.png'; 
    }
}