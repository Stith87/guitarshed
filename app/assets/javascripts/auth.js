// The client ID is obtained from the Google Cloud Console
// at https://cloud.google.com/console.
// If you run this code from a server other than http://localhost,
// you need to register your own client ID.


// Upon loading, the Google APIs JS client automatically invokes this callback.
googleApiClientReady = function() {
  gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
}





function onYouTubeApiLoad() {
    // This API key is intended for use only in this lesson.
    // See http://goo.gl/PdPA1 to get a key for your own applications.
    gapi.client.setApiKey('AIzaSyA0DWUpK-f3VRRxC4TUjIrRTmlRmYPDDME');
}