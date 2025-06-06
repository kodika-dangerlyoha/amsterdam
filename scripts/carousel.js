// -------------- var

const MAX_COUNT = 3;
let count = 0;

// -------------- functions

const new_cart = (id) => {
    document.querySelector('.carousel__player__container__cart_active').classList.remove('carousel__player__container__cart_active');
    document.querySelector(`#gall_cart-${id}`).classList.add('carousel__player__container__cart_active');
    document.querySelector('.carousel__player__points__point_active').classList.remove('carousel__player__points__point_active');
    document.querySelector(`#gall_point-${id}`).classList.add('carousel__player__points__point_active');
}

const next_cart = (n) => {
    count += n;
    if (count < 0) count = MAX_COUNT;
    if (count > MAX_COUNT) count = 0;
    new_cart(count);
}

const change_cart = (n) => {
    count = n;
    new_cart(count);
}