$(window).on("scroll", function() {

    var top = $(window).scrollTop();
    var barraMain = $(".js-barraMain");
    var barraSub = $(".js-barraSub");
    var globo = $(".barra-globocom");
  
  
  
  
  
    if (top >= 177 && $(window).width() >= 768) {
      barraMain.addClass("is-fixed");
      globo.addClass("is-fixed");
      barraSub.hide();
      $("body").addClass("padding-fix");
    } else {
      barraMain.removeClass("is-fixed");
      globo.removeClass("is-fixed");
      barraSub.show();
      $("body").removeClass("padding-fix");
    }
  
  });