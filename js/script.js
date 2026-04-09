let songs=[]
let currentSong=0
let audio=new Audio()

fetch("songs/songs.json")
.then(response=>response.json())
.then(data=>{

songs=data

let list=document.getElementById("songList")

songs.forEach((song,index)=>{

let div=document.createElement("div")
div.className="song"
div.innerText=song.title

div.onclick=()=>{
playSong(index)
}

list.appendChild(div)

})

})

function playSong(index){

currentSong=index

audio.src=songs[index].file

audio.play()

}

document.getElementById("play").onclick=()=>{
audio.play()
}

document.getElementById("pause").onclick=()=>{
audio.pause()
}

document.getElementById("next").onclick=()=>{
currentSong=(currentSong+1)%songs.length
playSong(currentSong)
}

document.getElementById("prev").onclick=()=>{
currentSong=(currentSong-1+songs.length)%songs.length
playSong(currentSong)
}