import { useEffect } from 'react';
import confetti from 'canvas-confetti'
import './App.css'

function App() {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === " ") {
        const audioEl = document.getElementById('audio');
        if(imgEl.src.includes('moving-clap.gif')) {
          audioEl.pause()
          imgEl.src = './src/assets/media/static-clap.gif'
        }else {
          audioEl.currentTime = 0
          audioEl.play()
          imgEl.src = './src/assets/media/moving-clap.gif'
          confetti()
        }
      }
    };

    const handleClick = () => {
        const audioEl = document.getElementById('audio');
        if(imgEl.src.includes('moving-clap.gif')) {
          audioEl.pause()
          imgEl.src = './src/assets/media/static-clap.gif'
        }else {
          audioEl.currentTime = 0
          audioEl.play()
          imgEl.src = './src/assets/media/moving-clap.gif'
          confetti()
        }
    };

    const imgEl = document.querySelector('.clapping')
    document.addEventListener("keydown", handleKeyDown)
    imgEl.addEventListener("click", handleClick)


    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      imgEl.removeEventListener("click", handleClick)
    };
  }, []);
  return (
    <>
      <h1>GOOD JOB, IMANOL!</h1>
      <img className="clapping" src="./src/assets/media/static-clap.gif" alt="" />
      <audio id="audio">
        <source src="./src/assets/media/clap-sound.mp3" type="audio/mpeg" />
        Tu navegador no soporta el elemento de audio.
      </audio>
    </>
  )
}

export default App
