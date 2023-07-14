console.log("Welcome to Desi-Spotify")
//varaibles
let songIndex = 0;
let audioElement = new Audio('song/music1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName= document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    {songName : "Tere Vaaste",filePath: "song/music1.mp3",coverPath:"covers/cover1.jpeg"},
    {songName : "kevdyach Paan ",filePath: "song/music2.mp3",coverPath:"covers/cover1.jpeg"},
    {songName : "O bedardiya",filePath: "song/music3.mp3",coverPath:"covers/cover1.jpeg"},
    {songName : "Still Ronin",filePath: "song/music4.mp3",coverPath:"covers/cover1.jpeg"},
    {songName : "Phir Aur kya ",filePath: "song/music5.mp3",coverPath:"covers/cover1.jpeg"},
    {songName : "Cheques",filePath: "song/music6.mp3",coverPath:"covers/cover1.jpeg"},
    {songName : "Tum Kya Mile",filePath: "song/music7.mp3",coverPath:"covers/cover1.jpeg"}
]
songItems.forEach((element, i)=>{
    console.log(element, i);
      element.getElementsByTagName('img')[0].src = songs[i].coverPath;
      element.getElementsByClassName("songName")[0].innerText= songs[i].songName;
})
// audioElement.play();

//play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;

    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

//listen to events
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgressBar.value = progress;
 })

 myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = (myProgressBar.value * audioElement.duration)/100;
 })
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
 Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
         makeAllPlays();
         songIndex = parseInt(e.target.id);
         e.target.classList.remove('fa-play-circle');
         e.target.classList.add('fa-pause-circle');
         audioElement.src = `song/music${songIndex}.mp3`;
         masterSongName.innerText = songs[songIndex-1].songName;
         gif.style.opacity = 1;
         audioElement.currentTime = 0;
         audioElement.play();
         masterPlay.classList.remove('fa-play-circle');
         masterPlay.classList.add('fa-pause-circle');
    })
 })
 document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=7){
        songIndex = 1;
    }
    else{
        songIndex=songIndex+1;
    }
    audioElement.src = `song/music${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex-1].songName;
    audioElement.currentTime = 0;
         audioElement.play();
         masterPlay.classList.remove('fa-play-circle');
         masterPlay.classList.add('fa-pause-circle');


 })

 document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=1){
        songIndex = 1;
    }
    else{
        songIndex=songIndex-1;
    }
    audioElement.src = `song/music${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex-1].songName;
    audioElement.currentTime = 0;
     audioElement.play();
     masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    

 })