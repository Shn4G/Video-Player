const $video = document.querySelector ('#video')
const $play = document.querySelector ('#play')
const $pause = document.querySelector ('#pause')
const $backward = document.querySelector('#backward')
const $forward = document.querySelector('#forward')

$play.addEventListener ('click', handleplay)
$pause.addEventListener ('click', handlepause)


function handleplay() {
    $video.play()
    $play.hidden = true
    $pause.hidden = false
    console.log('Diste Play')
}

function handlepause() {
    $video.pause()
    $pause.hidden = true
    $play.hidden = false
    console.log('Diste pause')    
} 

$backward.addEventListener('click', handlebackward)

function handlebackward(){
    $video.currentTime = $video.currentTime - 10
    console.log ('Retroceder 10 segundos', $video.currentTime)

}

$forward.addEventListener('click', handleforward)

function handleforward(){
    $video.currentTime = $video.currentTime + 10
    console.log('Adelantar 10 segundos', $video.currentTime)
     
}

const $progress = document.querySelector('#progress')
$video.addEventListener('loadedmetadata', handleLoaded)
$video.addEventListener('timeupdate', handleTimeupdate)

function handleLoaded() {
    $progress.max = $video.duration
    console.log('Video Al 100%', $video.duration)    
}

function handleTimeupdate() {
    $progress.value = $video.currentTime
    //  console.log('Whats up', $video.currentTime)
}

$progress.addEventListener('input', handelInput)

function handelInput() {
    $video.currentTime = $progress.value
    console.log($progress.value)
}

 