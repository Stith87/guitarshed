 function tsearch(url,artist,title){
 

   $('.track-container').remove();

    var source = url;
     $('#track-player').fadeIn('fast',function(){
        
      });

    $('#track-player').append("<div class='track-container col-md-6 col-md-offset-3 col-sm-12 col-xs-12'><span class='close'>X</span><h1>" + artist + "</h1><h3>" + title + "</h3><audio id='audio-player' controls  type='audio/ogg'  src='" + source + "' autoplay ></audio></div>");

      $('.close').click(function(){
              
        $('.track-container').remove();
        
      });


};