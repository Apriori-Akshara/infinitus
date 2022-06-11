$(document).ready(function(){

    $('.owl-carousel').owlCarousel({

        loop:true,
        margin:2,
        nav:true,
        autoplay:true,
        autoplayTimeout:5000,
        animateOut:'fadeOut',
        responsive:{
            320:{
                items:1
            },
            375:{
                items:1
            },
            425:{
                items:1
            },
            768:{
                items:1
            },
            
            1000:{
                items:1
            },
            
           
        }
        
    })

});