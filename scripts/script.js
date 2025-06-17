window.addEventListener('scroll', function() {
    scrollTop = window.pageYOffset;
    if (window.innerWidth >= 480) {
        if (scrollTop == 0) {
            // document.querySelector('.header_main').style.backgroundColor = "rgba(114, 189, 59, 0)";
            document.querySelector('.header_main').style.boxShadow = "0 0 30px -10px rgba(0, 0, 0, 0)";
        }
        else {
            // document.querySelector('.header_main').style.backgroundColor = "rgba(114, 189, 59, 1)";
            document.querySelector('.header_main').style.boxShadow = "0 0 30px -10px rgba(0, 0, 0, .3)";
        }
    }
});

const toggle_burger_menu = () => {
    if (document.querySelector('.burgerMenu_active')) {
        document.querySelector('.burgerMenu').classList.remove('burgerMenu_active');
        return
    }
    document.querySelector('.burgerMenu').classList.add('burgerMenu_active');
}

const toggle_big_pic = (img) => {
    if (img) {
        document.querySelector('.bigPicture').classList.add('bigPicture_active');
        document.querySelector('.bigPicture').innerHTML = get_big_pic_html(img);
        return
    }
    document.querySelector('.bigPicture').classList.remove('bigPicture_active');
}

const eq_for = {
    'tLoader': "Телескопические погрузчики",
    'mLoader': "Минипогрузчики",
}

const open_autopark = (title) => {
    document.querySelector('.autopark__grid_active').classList.remove('autopark__grid_active');
    document.querySelector('.equipment__grid_active').classList.remove('equipment__grid_active');
    document.querySelector('._active').classList.remove('_active');

    document.querySelector(`#grid_${title}`).classList.add('autopark__grid_active');
    document.querySelector(`#eq_${title}`).classList.add('equipment__grid_active');
    document.querySelector(`#button_${title}`).classList.add('_active');

    document.querySelector('#equipment_for').textContent = eq_for[title];
}