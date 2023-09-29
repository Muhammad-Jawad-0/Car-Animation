var audio = document.createElement('audio');
audio.setAttribute('src', './sound.mp3');
audio.loop = true;
audio.play().then((res)=>{
    console.log(res)
})