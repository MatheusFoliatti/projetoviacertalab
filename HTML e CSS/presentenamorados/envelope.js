$(document).ready(function(){
    $('.container').mouseenter(function(){
        $('.card').stop().animate({
            top:"-90px"
        }, "slow")
    }).mouseleave(function(){
        $('.card').stop().animate({
            top:0
        }, 'slow');
    })
    })

    const carta = document.querySelector(".card");

    carta.addEventListener('click', () => {
        window.open("carta.html")
    })