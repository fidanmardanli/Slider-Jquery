$(document).ready(function(){
   let rightIcon = $("#slider-area .slider .icons .right i");
    let leftIcon = $("#slider-area .slider .icons .left i");
    
    $.fn.setInterval = function() {
        $.fn.sliderRight();
    
    }, 3000;
    
    
    $(rightIcon).click(function() {
        $.fn.sliderRight();
    })
    
    
    $.fn.sliderRight = function(){
       let activeImg = $("#slider-area .slider .img .active");
    
        if ($(activeImg).next().length != 0 ) {
            $(activeImg).removeClass("active");
            $(activeImg).next().addClass("active");
        } else {
            $(activeImg).removeClass("active");
            $(activeImg).siblings().first().addClass("active")
        }
    }
    
    $(leftIcon).click(function() {
    let activeImg = $("#slider-area .slider .img .active");
        
        if ($(activeImg).prev().length != 0 )  {
            $(activeImg).removeClass("active");
            $(activeImg).prev().addClass("active");
        } else {
            $(activeImg).removeClass("active");
            $(activeImg).siblings().last().addClass("active")
        }
    
    
    })
});





















