$(function(){
  // nav anime
  $('.adpc').hide();
  $('.mAnime').hide();
  $('#showBtn').on('click',showNav);
  $('#hideBtn').on('click',hideNav);
 
  function showNav(){
    if($('.mAnime').is(':hidden')){
      $('#showBtn').hide(150);
      setTimeout(function(){
        delayShow()
      },60)
    }else{
      $('.mAnime').hide(420);
    }
  }
  function delayShow(){
    $('.adpc').show();
    $('.event1').animate(
      {marginLeft:0}
    );
    $('.mAnime').show(700);
  }

  function hideNav(){
    if($('#hideBtn').is(':visible')){
      $('.mAnime').hide(650);
      $('.event1').animate(
      {marginLeft:-100}
    );
      setTimeout(function(){
        delayhied()
      },320)
    }
  }
  function delayhied(){
    $('.adpc').hide();
    $('#showBtn').show();
  }


  // setion 1 anime
});