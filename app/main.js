
$(document).ready(function() {
    $('#fullPage').fullpage({
        continuousVertical: false,
        css3: true,
        scrollingSpeed: 600,
        autoScrolling: true,
        verticalCentered: true,
        fitToSection: true,
        scrollBar: false,
        responsive: '600',
        resize: true,
        easingcss3: 'ease-in-out',
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,
        afterRender: function reBuildThis(){
            setTimeout(function(){
                $.fn.fullpage.reBuild();
            }, 1000);
        }
    });


    $('#header').addClass('open');
    $('.block').click(function(){
      $(this).find('.more').slideToggle(250, "easeInOutQuint", function () {
        // Animation complete.
      });
    });


    $('.vakansii').fadeIn(1000);
    if($('#wrapper').length>0){
        $('#fullpage').fullpage({
            autoScrolling: false
        });
        $('#header').removeClass('open');
        $('#header').css('top', '0');
    }


    $('.vniz').click(function(){
        $.fn.fullpage.moveSectionDown();
    });


    $('.menu-btn').click(function(){
      $('#nav-mobile').find('ul').slideToggle(250, "easeInOutQuint", function () {
        // Animation complete.
      });


    });
});



$(document).ready(function(){

    BV = new $.BigVideo({container: $('.slide-0')});
    BV.init();

    if (Modernizr.touch) {
        BV.show('video-poster.jpg');
    } else {
        BV.show('video.mp4',{ambient:true});
    }
});


$(window).load(function(){
    $('.loader-icon').removeClass('spinning-cog').addClass('shrinking-cog');
    $('.loader-background').delay(300).fadeOut(); 
     
});


window.addEventListener("load", function () {
    window.loaded = true;
});


(function listen () {
    if (window.loaded) {
        function explode(){
          $('.overlay-loader').remove();
        }
        setTimeout(explode, 700);
    } else {
        console.log("notLoaded");
        window.setTimeout(listen, 50);
    }
})();






