
});
  var q = "guitar " + $('#keyword').val() + " " +  $('#skill').val() + " " + $('#lessonType').val() + " " + $('#technique').val() + " " + "lesson" ;
  var request = gapi.client.youtube.search.list({
    q: q,
    part: 'snippet',
    order: 'relevance',
    type: 'video',
    maxResults: '50'
  });

  $('#searchContainer').html('');

  request.execute(function(response) {
    console.log(response.result);
  
    for(var i = 0, len = response.result.items.length; i < len; i++){
      console.log(response.result.items[i]);

      this.resultId = response.result.items[i].id.videoId;
      this.resultTitle = response.result.items[i].snippet.title;
      this.resultImg = response.result.items[i].snippet.thumbnails.medium.url;
      this.divId = "ytplayer" + i;
      this.desc = response.result.items[i].snippet.description;
     
      $('#' + divId).data("id:", response.result.items[i].id.videoId);
      $('#' + divId).data("title:", response.result.items[i].snippet.title);
      $('#' + divId).data("img:", response.result.items[i].id.videoId);
      $('#' + divId).data("id:" , response.result.items[i].snippet.thumbnails.medium.url);
      $('#' + divId).data("desc:" , response.result.items[i].snippet.description);
      $('#' + divId).data("divId:","ytplayer" + i);

     
      showDetails(resultTitle, resultImg, divId, resultId, desc);
      buildEvent(resultId, divId);

    }


    function showDetails(resultTitle, resultImg, divId, videoId, desc){

      $('#searchContainer').append('<div id="' + divId + '" " class="lesson col-xs-12 col-sm-6 col-md-4" style="cursor: pointer"></div>');
      $("#" + divId).html("<div class='videoImg'><img src='" + resultImg + "' class='img-circle img-responsive'></div><div class='details' ><h4>" + resultTitle + "</h4></div></div>");
      $('#' + divId).after('<div class="videoContainer_' + videoId +'  video col-xs-12 col-sm-12 col-md-12"></div>'); 
      $('.videoContainer_' + videoId +'').hide();  
      
    }

  });

  function buildEvent(videoId, divId){

    $.fn.clicktoggle = function(a, b) {
        return this.each(function() {
            var clicked = false;
            $(this).click(function() {
                if (clicked) {
                    clicked = false;
                    return b.apply();
                }
                clicked = true;
                return a.apply();
            });
        });
    };


    $('#' + divId).clicktoggle(function(){
          
          $('.videoContainer_' + videoId +'').fadeIn('800', function(){
            $('.videoContainer_' + videoId +'').animate({
              height: "+=350px"
              
              

              
            }, "fast", "swing", function(){
              playResults(videoId, divId);
            } );
            
            
          });
                    
        }, function(){
         
           $('.videoContainer_' + videoId +'').fadeOut('400',function(){
              $('.videoContainer_' + videoId +'').html('');
           });


          var container = $(".videoContainer_" + videoId +"");

 

        });

   

        
    $('#' + divId).mouseenter(function(){
      $(this).fadeTo("fast", 1.00);
      $(this).css({ boxShadow: '0px 0px 3px #c67332' })
    })    
    
    $('#' + divId).mouseleave(function(){
      $(this).fadeTo("fast", .5);
      $(this).css({ boxShadow: '' })
    }) 



    
  }
}
    


  function playResults(videoId, videoDiv){

    $('.videoContainer_' + videoId +'').append('<div class="player-container"><span class="close">X</span><center><iframe id="ytplayer" type="text/html" width="640" height="360" style="max-width: 100%;" src="https://www.youtube.com/embed/' + videoId + '" frameborder="0" allowfullscreen></center></div>');
        
    $('.close').click(function(){
      $('.video').fadeOut('fast',function(){
        $('.player-container').html("");
      });
     
    }); 
  }



$(document).mouseup(function (e)
{
    var container = $(".video");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
      container.fadeOut('slow',function(){
        container.html('');
        container.hide();
      })  
       
    }
});
