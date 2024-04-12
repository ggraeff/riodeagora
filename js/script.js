function animateBlock01() {
  $('.block-01').children().each(function (i) {
    let currentEl = $(this);
    setTimeout(function() {
      toggleAnimateClass(currentEl);
    }, i * 1000)
  });
}

function animateBlock02() {
  $('.block-02').children().each(function (i) {
    let currentEl = $(this);
    setTimeout(function() {
      toggleAnimateClass(currentEl);
    }, i * 1000)
  });
}

function animateBlock03() {
  $('.block-03').children().each(function (i) {
    let currentEl = $(this);
    setTimeout(function() {
      toggleAnimateClass(currentEl);
    }, i * 1000)
  });
}

function toggleAnimateClass(el) {
  el.addClass('anim');
  setTimeout(function() {
    el.removeClass('anim');
  }, 10000) 
}

function animate() {
  animateBlock01();
  setTimeout(function() {
   animateBlock02();
    setTimeout(function() {
      animateBlock03();
      setTimeout(function() {
        animate();
      }, 10000)
    }, 10000)
  }, 10000)
}

animate();





$('.post-slider').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  infinite: false,
  prevArrow: $('.post-slider-prev'),
  nextArrow: $('.post-slider-next'),
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});


$('.video-slider').slick({
  slidesToShow: 2,
  sliderToScroll: 2,
  infinite: false,
  prevArrow: $('.video-slider-prev'),
  nextArrow: $('.video-slider-next'),
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
})

$('.image-slider').slick({
  slidesToShow: 2,
  sliderToScroll: 2,
  infinite: false,
  prevArrow: $('.image-slider-prev'),
  nextArrow: $('.image-slider-next'),
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
})





$('.btn-scrolldown').on('click', function() {
  var x;
  if ($(window).width() >= 768) {
      x = 85;
  } else {
      x = 0;
  }
  $('html, body').animate({
    scrollTop: $('.s-video').offset().top - x,
  }, 500);
})





function pauseAllVideos() {
  for (var i = 0; i < videos.length; i++) {
    videos[i].pause();
  }
}

function openOverlay(videoIndex, overlayId) {
  $(overlayId).addClass('show');
  $('body').css('overflow', 'hidden');
  videos[videoIndex].play();
}

function closeOverlay() {
  $('.overlay').removeClass('show');
  $('body').css('overflow', '');
  pauseAllVideos();
}

function checkOverlay() {
  if (!$('.overlay').hasClass('show')) {
    pauseAllVideos();
  }
}

$('.overlay').on("click", function(event){
  if(!$(event.target).closest(".overlay .container").length){
    closeOverlay();
  }
});

var dragging = 0;

$(document).mousedown(function() {
  dragging = 0;
  $(document).mousemove(function(){
    dragging = 1;
  });
});

$('.video-post').click(function(e) {
  if (dragging == 0){
    var videoIndex = $(this).parent().attr('data-slick-index');
    var overlayId = $(this).attr('data-overlay');
    openOverlay(videoIndex, overlayId);
  }
});