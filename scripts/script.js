const toggle_burger_menu = () => {
    if (document.querySelector('.burgerMenu_active')) {
        document.querySelector('.burgerMenu').classList.remove('burgerMenu_active');
        return
    }
    document.querySelector('.burgerMenu').classList.add('burgerMenu_active');
}

const open_autopark = (title) => {
    document.querySelector('.autopark__grid_active').classList.remove('autopark__grid_active');
    document.querySelector('.equipment__grid_active').classList.remove('equipment__grid_active');
    document.querySelector('._active').classList.remove('_active');

    document.querySelector(`#grid_${title}`).classList.add('autopark__grid_active');
    document.querySelector(`#eq_${title}`).classList.add('equipment__grid_active');
    document.querySelector(`#button_${title}`).classList.add('_active');
}