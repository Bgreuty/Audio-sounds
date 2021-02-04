const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

sounds.forEach(sound =>{
    const btn=document.createElement('element')
    btn.classList.add('btn')

        btn.innerText= sound

        btn.addEventListener('click', ()=> {
                stopSongs()

            document.getElementById(sound).onplay()
        )}

    document.getElementById('button')
    appendChild(btn)


})

function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById
        (sound)

        .song.pause()
        .soung.currentTime = 0;
    })

}
