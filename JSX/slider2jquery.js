$(document).ready(function(){

    $('.owl-carousel').owlCarousel({

        loop:true,
        // margin:0,
        // nav:true,
        mouseDrag:false,
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