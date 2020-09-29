$('.toggle-drawer').click(function(){
    $('.drawer').toggleClass('open');
})

$('.close-drawer, .close').click(function(){
    $('.drawer').removeClass('open');
})


$('.show-modal').click(function(){
    $('.modal, .modal-overlay').addClass('open');
})

$('.modal-overlay, .modal .close, .modal .close-modal').click(function(){
    $('.modal, .modal-overlay').removeClass('open');
});

$('.mobile-menu').click(function(){
    $('.col.left').toggleClass('show')
})

$('.col.mid').click(function(){
    $('.col.left').removeClass('show')
})