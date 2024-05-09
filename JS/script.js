const phoneNumberInput = document.getElementById('phoneNumber');

phoneNumberInput.addEventListener('input', function() {
    // Replace any non-numeric character with an empty string
    this.value = this.value.replace(/\D/g, '');
});

var Form = document.getElementById('Form').addEventListener('click', function(event){
    event.preventDefault();
})




$(function(){
    $(".touch-add-info-one").click(function(e){
        e.preventDefault();
        $(".add-info-one").toggleClass("add-info-get");
    });
});

$(function(){
    $(".touch-add-info-two").click(function(e){
        e.preventDefault();
        $(".add-info-two").toggleClass("add-info-get");
    });
});

$(function(){
    $(".touch-add-info-three").click(function(e){
        e.preventDefault();
        $(".add-info-three").toggleClass("add-info-get");
    });
});

$(function(){
    $(".touch-add-info-four").click(function(e){
        e.preventDefault();
        $(".add-info-four").toggleClass("add-info-get");
    });
});

$(function(){
    $(".touch-add-info-five").click(function(e){
        e.preventDefault();
        $(".add-info-five").toggleClass("add-info-get");
    });
});

$(function(){
    $(".touch-add-info-six").click(function(e){
        e.preventDefault();
        $(".add-info-six").toggleClass("add-info-get");
    });
});

$(function(){
    $(".touch-add-info-seven").click(function(e){
        e.preventDefault();
        $(".add-info-seven").toggleClass("add-info-get");
    });
});

$(function(){
    $(".touch-add-info-eight").click(function(e){
        e.preventDefault();
        $(".add-info-eight").toggleClass("add-info-get");
    });
});

$(function(){
    $(".touch-add-info-nine").click(function(e){
        e.preventDefault();
        $(".add-info-nine").toggleClass("add-info-get");
    });
});

$(function(){
    $(".touch-add-info-ten").click(function(e){
        e.preventDefault();
        $(".add-info-ten").toggleClass("add-info-get");
    });
});

$(function(){
    $(".touch-add-info-eleven").click(function(e){
        e.preventDefault();
        $(".add-info-eleven").toggleClass("add-info-get");
    });
});

$(function(){
    $(".touch-add-info-twelve").click(function(e){
        e.preventDefault();
        $(".add-info-twelve").toggleClass("add-info-get");
    });
});



// SCROLLER  //

(function ($) {
    $(function () {
  
      $(window).on('scroll', function () {
        fnOnScroll();
      });
  
      $(window).on('resize', function () {
        fnOnResize();
      });
  
      var agTimeline = $('.js-timeline'),
        agTimelineLine = $('.js-timeline_line'),
        agTimelineLineProgress = $('.js-timeline_line-progress'),
        agTimelinePoint = $('.js-timeline-card_point-box'),
        agTimelineItem = $('.js-timeline_item'),
        agOuterHeight = $(window).outerHeight(),
        agHeight = $(window).height(),
        f = -1,
        agFlag = false;
  
      function fnOnScroll() {
        agPosY = $(window).scrollTop();
  
        fnUpdateFrame();
      }
  
      function fnOnResize() {
        agPosY = $(window).scrollTop();
        agHeight = $(window).height();
  
        fnUpdateFrame();
      }
  
      function fnUpdateWindow() {
        agFlag = false;
  
        agTimelineLine.css({
          top: agTimelineItem.first().find(agTimelinePoint).offset().top - agTimelineItem.first().offset().top,
          bottom: agTimeline.offset().top + agTimeline.outerHeight() - agTimelineItem.last().find(agTimelinePoint).offset().top
        });
  
        f !== agPosY && (f = agPosY, agHeight, fnUpdateProgress());
      }
  
      function fnUpdateProgress() {
        var agTop = agTimelineItem.last().find(agTimelinePoint).offset().top;
  
        i = agTop + agPosY - $(window).scrollTop();
        a = agTimelineLineProgress.offset().top + agPosY - $(window).scrollTop();
        n = agPosY - a + agOuterHeight / 2;
        i <= agPosY + agOuterHeight / 2 && (n = i - a);
        agTimelineLineProgress.css({height: n + "px"});
  
        agTimelineItem.each(function () {
          var agTop = $(this).find(agTimelinePoint).offset().top;
  
          (agTop + agPosY - $(window).scrollTop()) < agPosY + .5 * agOuterHeight ? $(this).addClass('js-ag-active') : $(this).removeClass('js-ag-active');
        })
      }
      function fnUpdateFrame() {
        agFlag || requestAnimationFrame(fnUpdateWindow);
        agFlag = true;
      }
    });
  })(jQuery);