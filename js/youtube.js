var top;

function onYouTubePlayerAPIReady() {
    top = new YT.Player('top', {
        playerVars: {
            'autoplay': 1,
            'controls': 0,
            'autohide': 1,
            'wmode': 'opaque',
            'showinfo': 0,
            'loop': 1,
            'mute': 1,
            'start': 9,
            //'end': 110,
            'playlist': 'K3T7MgavkwQ'
        },
        videoId: 'K3T7MgavkwQ',
        events: {
            'onReady': onPlayerReady
        }
    });

}

function onPlayerReady(event) {
    event.target.mute();
    $('#text').fadeIn(400);
    //why this? Well, if you want to overlay text on top of your video, you
    //will have to fade it in once your video has loaded in order for this
    //to work in Safari, or your will get an origin error.
}

//this pauses the video when it's out of view, just wrap your video in .m-//video
$(window).scroll(function() {
   var hT = $('.m-video').height(),
       wS = $(this).scrollTop();
   if (wS > hT) {
      top.pauseVideo();
   }
   else {
      top.playVideo();
   }
});