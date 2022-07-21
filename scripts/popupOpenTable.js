$('.open-popup').click(function (e){
    e.preventDefault();
    $('.popup-table').fadeIn(100);

});

$('.close-popup').click(function (e){
    e.preventDefault();
    $('.popup-table').fadeOut(100);

});