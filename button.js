$(function(){
            // hide the div on page load and use a slidedown effect
            $('div.container').fadeOut(0, function(){
                $(this).slideDown(500);
            });
            // capture link clicks and slide up then go to the links href attribute
            $('a.slide_page').click(function(e){
                e.preventDefault();
                var $href = $(this).attr('href');
                $('div.container').slideUp(500, function(){
                    window.location = $href;
                });
            });

        });