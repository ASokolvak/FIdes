$(function(){
  $('.blog__items').slick({
    dots: false,
    arrows: true,
    fade: true,
    autoplay: 5000,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          arrows: false,
        }
      }
    ],
    nextArrow: '<button class="slick-arrow slick-prev"><img src="images/prev.svg" alt="next arrow"></button>',


    prevArrow: '<button class="slick-arrow slick-next"><img src="images/next.svg" alt="next arrow"></button>'
    
    
  });
  $('.header__burger, .header__menu-link').on('click', function () {
    $('.header__burger,.header__menu, .header__menu-link').toggleClass('active');

    $('body').toggleClass('lock');
  });

  $("form").submit(function () { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize()
    }).done(function () {
      alert("Відправлено!");
      setTimeout(function () {
        // Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });
 

});