let menu = $('.menu a');
let logo = $('.logo');

logo.fadeOut();
logo.fadeIn();

menu.each(function(index,elemento){
    $(this).css({
        'top' : '-200px'
    });
    $(this).animate({
        top : '0'
    },1000 + (index * 500));
});

let acercaDe = $('#acerca-de').offset().top,
    comunidad = $('#comunidad').offset().top,
    streamers = $('#streamers').offset().top,
    juegos = $('#juegos').offset().top,
    gameplays = $('#gameplays').offset().top;

$('#btn-acercade').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop: acercaDe - 80
    },500);
});
$('#btn-comunidad').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop: comunidad - 80
    },500);
});
$('#btn-streamers').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop: streamers - 80
    },500);
});
$('#btn-juegos').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop: juegos - 80
    },500);
});
$('#btn-gameplays').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop: gameplays - 80
    },500);
});