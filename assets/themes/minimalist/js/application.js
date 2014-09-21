$(document).ready(function() {

      $('.back-to-top').fadeOut(0);

      $('#simple-menu').sidr({
          onOpen: function(){
            $('body').append('<div class="sidroverlay"></div>');
            $.cookie("is_opened", "1");
            $('#simple-menu').fadeOut(500);
        },
          onClose: function(){
            $('.sidroverlay').remove();
            $.cookie("is_opened", "0");
        },
        speed: 500
      });

      $(document).on('click','.sidroverlay',function(){
         $.sidr('close');
         $.cookie("is_opened", "0");
         $('#simple-menu').fadeIn(500);
      });

      (function(){
        if($.cookie("is_opened") == 1){
          $.sidr('open');
          console.log("keep opened");
        }else{
          $.sidr('close');
          console.log("keep closed");
        }
      })();

      $(document).on('scroll', function(){
        if ($(window).scrollTop() > $(window).height()){
          $('.back-to-top').fadeIn(500);
        }else{
           $('.back-to-top').fadeOut(500);
        }
      });

      $('.back-to-top').on('click', function(){
        var distanceToTop = $('.back-to-top').offset().top
        console.log(distanceToTop);
        $('html, body').animate({scrollTop: 0}, 1000, 'linear');
      });

      $("#qr-code").qrcode({
          render: "canvas",
          size: 100,
          fill: "#232323",
          text: "hi there",
          background: "#FFFFFF"
      });
});