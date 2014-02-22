 function tsearch(url,artist,title){
 

   $('.track-container').remove();

    var source = url;
     $('#track-player').fadeIn('fast',function(){
        
      });

    $('#track-player').html("<div class='track-container col-md-12 col-sm-12 col-xs-12'><h1>" + artist + "</h1><h3>" + title + "</h3><audio id='audio-player' controls  type='audio/ogg'  src='" + source + "' autoplay ></audio><br /><a class='btn btn-default download' href='"+ source +"'>Download</a></div>");

      $('.close').click(function(){
              
        $('.track-container').remove();
        
      });


};