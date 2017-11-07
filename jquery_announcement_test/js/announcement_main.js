var card = $('#card');
var cardTrigger = $('#card-trigger');


cardTrigger.on('click', function() {
    if (card.is(':visible')) {
        card.slideUp();
    } else {
        card.slideDown();
    }
})

card.on('mouseenter',function(){
	card.addClass('active');
})

card.on('mouseleave',function(){
	card.removeClass('active');
})