$(document).ready(function(){
    var swiper = new Swiper(".mySwiper", {
        loop:true,
        /* autoplay:{
            delay:1500
        }, */
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
            // 반응형으로 바꿔주기
              760: {
                //원하는 픽셀값
                slidesPerView: 1,
                spaceBetween: 10,
                slidesPerGroup: 1,
              },
              960: {
                slidesPerView: 2,
                spaceBetween: 10,
                slidesPerGroup: 2,
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 0,
                slidesPerGroup: 4,
              }
            }

      });


      //이미지변경
      $('.c1-2').mouseenter(function(){
        var changeImage = $('.pro-1').attr('data-image');
        $('.new1').css({
            'background-image' : 'url(' + changeImage + ')',
        });
    });
    $('.c1-2').mouseleave(function(){
        $('.new1').css({
            'background-image' : ''
        });
    });

    $('.c1-3').mouseenter(function(){
        var changeImage = $('.pro-2').attr('data-image');
        $('.new1').css({
            'background-image' : 'url(' + changeImage + ')',
        });
    });
    $('.c1-3').mouseleave(function(){
        $('.new1').css({
            'background-image' : ''
        });
    });

    $('.c1-4').mouseenter(function(){
        var changeImage = $('.pro-3').attr('data-image');
        $('.new1').css({
            'background-image' : 'url(' + changeImage + ')',
        });
    });
    $('.c1-4').mouseleave(function(){
        $('.new1').css({
            'background-image' : ''
        });
    });

    $('.c3-2').mouseenter(function(){
        console.log('hi');
        var changeImage = $('.pro-4').attr('data-image');
        $('.new3').css({
            'background-image' : 'url(' + changeImage + ')',
        });
    });
    $('.c3-2').mouseleave(function(){
        $('.new3').css({
            'background-image' : ''
        });
    });

    $('.c4-2').mouseenter(function(){
        console.log('hi');
        var changeImage = $('.pro-5').attr('data-image');
        $('.new4').css({
            'background-image' : 'url(' + changeImage + ')',
        });
    });
    $('.c4-2').mouseleave(function(){
        $('.new4').css({
            'background-image' : ''
        });
    });

    $('.c6-2').mouseenter(function(){
        console.log('hi');
        var changeImage = $('.pro-6').attr('data-image');
        $('.new6').css({
            'background-image' : 'url(' + changeImage + ')',
        });
    });
    $('.c6-2').mouseleave(function(){
        $('.new6').css({
            'background-image' : ''
        });
    });

    $('.c7-2').mouseenter(function(){
        console.log('hi');
        var changeImage = $('.pro-7').attr('data-image');
        $('.new7').css({
            'background-image' : 'url(' + changeImage + ')',
        });
    });
    $('.c7-2').mouseleave(function(){
        $('.new7').css({
            'background-image' : ''
        });
    });

    $('.c8-2').mouseenter(function(){
        console.log('hi');
        var changeImage = $('.pro-8').attr('data-image');
        $('.new8').css({
            'background-image' : 'url(' + changeImage + ')',
        });
    });
    $('.c8-2').mouseleave(function(){
        $('.new8').css({
            'background-image' : ''
        });
    });

    $('.c8-3').mouseenter(function(){
        console.log('hi');
        var changeImage = $('.pro-9').attr('data-image');
        $('.new8').css({
            'background-image' : 'url(' + changeImage + ')',
        });
    });
    $('.c8-3').mouseleave(function(){
        $('.new8').css({
            'background-image' : ''
        });
    });

    $('.tab_btn li').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');

        var tab = $(this).attr('data-alt');
        
        // $('.tabs div').removeClass('active');
        // $('#' + tab).removeClass('on');
        $('#' + tab).addClass('on');
        $('#' + tab).siblings().removeClass('on');
        
    });

      // 상단이동버튼
      var but=$('.top_but');
      $(window).scroll(function(){
          if($(window).scrollTop() > 300){
              but.fadeIn();
          }else{
              but.fadeOut();
          }
      });
      but.on('click',function(e){
          e.preventDefault();
          $('html,body').animate({
              scrollTop:0
          },300);
          });

    js();
    function js(){
        var windowWidth = $(window).width();
        if(windowWidth >= 1200){
      
              let controller = new ScrollMagic.Controller();
              let timeline = new TimelineMax();
      
              timeline
              .to(".card1", 500, { y: -1000})
              // .fromTo(".img3", { opacity: 1 }, { opacity: 0, duration: 3 })
              .to(".card2", 500, { y: -1500 })
              .fromTo(".card2", { opacity: 1 }, { opacity: 0, duration: 100 })
              .to(".card3", 500, { y: -1500 })
              .fromTo(".card3", { opacity: 1 }, { opacity: 0, duration: 100})
              .to(".card4", 500, { y: -1500 })
              .fromTo(".card4", { opacity: 1 }, { opacity: 0, duration: 100})
      
              let scene = new ScrollMagic.Scene({
              triggerElement: ".card-background",
              duration: "300%",
              triggerHook: 0,
              })
              .setTween(timeline)
              .setPin(".card-background")
              // 아이템들이 움직이는 고정점
              .addTo(controller)


            
        }else{
            


        }




    }




});//end
