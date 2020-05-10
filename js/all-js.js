        //        _____________________________________________JS for slider main
        var countSlide = 0;
        setInterval(findNextSlider, 6000);

        var __l = parseInt($('.slide').length);

        findNextSlider();

        function findNextSlider() {

            if (countSlide < __l) {
                $('.slide').css('opacity', '0');
                $('.slide').eq(countSlide).css('opacity', '1');

                $('.slide-content').removeClass('slide-content-move');
                $('.slide-content').eq(countSlide).addClass('slide-content-move');
                countSlide++;
            } else if (countSlide == __l) //make counter 0 to start over dynamically
            {
                countSlide = 0;
                findNextSlider();
            }
        }

        //        ______________________________________________JS for #menu-btn
        var menuBtnContainer = 1;
        $('#menu-btn').click(function() {
            if (menuBtnContainer) {
                $(this).children(Image).eq(0).fadeToggle(200);
                $(this).children(Image).eq(1).fadeToggle(200);
                
                $('.side-bar-container').css('height', '100vh');
                menuBtnContainer--;
            } else {
                $(this).children(Image).eq(0).fadeToggle(200);
                $(this).children(Image).eq(1).fadeToggle(200);
                
                $('.side-bar-container').css('height', '0vh');
                menuBtnContainer++;
            }
        })
        
//        ______________________________________________________scroll-top js
        var _h;
        $(document).ready(function(){
                $(document).scroll(function(){
                    _h = $(this).scrollTop();
                    console.log(_h);
                    if(_h > 200){
                        $('.head-2').css('height','82px');
                        $('#menu-btn').css('transform', 'translate(-96%,109%)');
                        $('.logo-container').children(Image).css('width','100px');
                        $('.search').css('visibility','hidden');
                        $('.scroll-top').fadeOut(200);
                        
                    }else{
                        $('.head-2').css('height','105px');
                        $('#menu-btn').css('transform', 'translate(-96%,130%)');
                        $('.logo-container').children(Image).css('width','146px');
                        $('.search').css('visibility','visible');
                        $('.scroll-top').fadeIn(200);
                    }
                })
            
            
                $('.scroll-bot-btn').click(function(){
                        $('html , body').animate({scrollTop:0}, "slow");
                })
            
            
            
            var slider_height = ($('.slider-container').outerHeight())-120;
            console.log(slider_height);
            
                $('.scroll-top-btn').click(function(){
                        $('html , body').animate({scrollTop:slider_height}, "slow");
                    })
            
            
            
            
            
            let live_width = $('.insta-live-thumbnails').outerWidth();
            $('.insta-live-thumbnails').css('height',live_width);
        })