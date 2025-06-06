const toggle_burger_menu = () => {
    if (document.querySelector('.burgerMenu_active')) {
        document.querySelector('.burgerMenu').classList.remove('burgerMenu_active');
        return
    }
    document.querySelector('.burgerMenu').classList.add('burgerMenu_active');
}