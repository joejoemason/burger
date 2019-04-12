const log = console.log;

log("hello from app.js")

const burgerTemplate = (burgerName, id, is_favorite) => {
    const burgerContainer = $('<div>').attr({
        class: 'content-burger__list',
        id: id
    });
    const img = $('<img>').attr('src', '../public/assets/css/images/57423_640x428.jpg');
    const name = $('<p>');
    const button = $('<button>').attr({
        'data-id': id,
        class: 'btn btn-default favorites',
        'data-state': is_favorite
    });

    name.html(burgerName);
    button.html('add to favorite');

    burgerContainer.append(img, name, button);
    return burgerContainer;
};


const displayNewBurger = (burger) => {
    const name = burger.burger_name;
    const id = burger.id;
    console.log(burger)
    const devoured= burger.devoured;
    const newBurger = burgerTemplate(name, id, devoured);
    $('.content-burger').prepend(newBurger);
    $('input').val('');
};

const addBurgerFail = (response) => {
    alert('Burger Failed');
};

$("#add-burger").on('click', function (event) {
    event.preventDefault(); // prevent the Browser from refreshing
    const burgerName = $('#burger-name').val();
    console.log("burgername", burgerName);
    $.ajax({
            url: '/add',
            method: 'POST',
            data: {
                burger_name: burgerName
            }
        })
        .then(
            (result) => {
                $('#burger-name').val('')
                $('.content-burger').append(`<div id='wax' class="content-burger__list">
                <p id="response">You may be on to something!</p>
                <p id="yourBurger">${result.burger_name}</p>
                <button class="btn btn-danger favorites" data-id="${result.id}">
                  We Got It!
                    
                </button>
            </div>`)
           
            }
        )
        .catch(err => console.log(err));
});



// Favorite or Unfavorite burger
const addBurgerToFavorite = (burger) => {
    const id = burger.id;
    $(`#${id}`).remove();
};

const addBurgerToFavoriteFail = () => {
    alert('Fail adding it to Favorite');
};

//devoured burger
$(document).on('click', '.favorites', function () {
    const id = $(this).attr('data-id');
    console.log(id)
    const value = $(this).attr('data-state');
    $("#wax").remove();
    // let condition = value === '0' ? false : true;

    $.ajax({
            url: `/delete/${id}`,
            method: 'DELETE'
        })
        .then(removeBurgerOnDelete)
        .catch(addBurgerToFavoriteFail);
});



const removeBurgerOnDelete = (burger) => {
    const id = burger.id;

    $(`.all-burgers .burger[data-id=${id}]`).remove();
    
};


const removeBurgerFailed = () => {
    alert('Fail deleting burger');
};

$('.all-burgers .burger button').on('click', function () {
    const id = $(this).attr('data-id');


    $.ajax({
            url: `/delete/${id}`,
            method: 'DELETE'
        })
        .then(removeBurgerOnDelete)
        .catch(removeBurgerFailed);
});