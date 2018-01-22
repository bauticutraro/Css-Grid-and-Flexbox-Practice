const d = document,
    w = window,
    mq = w.matchMedia('(min-width: 64em)'),
    video = d.querySelectorAll('.contact__video-header__video')

function startVideo (mq) {
    video.forEach(video => mq.matches ? video.play() : video.autoplay = false)  
}

mq.addListener(startVideo)
startVideo(mq)