var lastScrollTop = 0;
var lineheight = 50;

$(window).scroll(function(event){
  var st = $(this).scrollTop();
  var lineTop = $('h1').offset().top;  // Get the top position of the h1 element
  
  if (st > lastScrollTop) {
    // downscroll code
    $('.backShapes span i').css({transform: "rotate(" + st/5 + "deg)" });
    
    if (st > lineTop && lineheight < 550) {
      lineheight = lineheight + 10;
      $('h1 span').css('height', lineheight + 'px');
    }
  } else {
    // upscroll code
    $('.backShapes span i').css({transform: "rotate(" + st/5 + "deg)" });

    if (st > lineTop && lineheight > 50) {
      lineheight = lineheight - 10;
      $('h1 span').css('height', lineheight + 'px');
    }
  }
  lastScrollTop = st;
  
  checkAnimateIn(st);
});


