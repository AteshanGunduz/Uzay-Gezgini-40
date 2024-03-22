import {useState } from 'react'
import useSound from 'use-sound'
import PlayArea from './components/PlayArea'
import ScoreBoard from './components/ScoreBoard'
import './styles.css'
export default function App() {
  const STARTING_TIME = 60
  const STARTING_SCORE = 0
  const [timerRunning, setTimerRunning] = useState(false)
  const [timeLeft, setTimeLeft] = useState(STARTING_TIME)
  const [score, setScore] = useState(STARTING_SCORE)
  const [playSong] = useSound('../audio/song.mp3')
  const [playClick] = useSound('../audio/click.mp3', { volume: 3.45 })

  /* Challenge 

       Uygulamanın temel oyun bileşenleri zaten yerinde, ancak başlat butonu ve zamanlayıcı tamamlanmamış durumda. Sizin göreviniz oyunu çalıştırmak için bunları ayarlamayı bitirmek

        1. Kullanıcı başlat butonuna tıkladığında. 
            - zamanlayıcı saniyeleri geri saymaya başlar.
            - başlat butonunun classList'inde "fade-in" class'ı "fade-out" ile değiştirilir.
            - başlat butonu devre dışı bırakılır. 
            - playSong() ve playClick() çağrılarak müzik ve tıklama sesi çalınır. 
        
        2. 0 saniyede zamanlayıcı durur ve başlat butonunun classList'inde "fade-out", "fade-in" ile değiştirilir. 
        
        3. Oyuncu daha sonra başlat butonuna tekrar tıklarsa, zamanlayıcı 60 saniyeye sıfırlanır ve skor 0'a sıfırlanır ve görev 1'de listelenen her şey tekrar gerçekleşir. 
        
        4. Bu görevleri yerine getirmek için *sadece* bu yorumların altına kod yazmanız gerekir; bunların üzerinde veya farklı bir dosyada herhangi bir şey değiştirmeniz veya eklemeniz gerekmez 
*/

// useEffect(() => {
//  

//     return () => clearInterval(timer)
//   }
// }, [timerRunning])

const handleClick=()=>{

    setTimeLeft(STARTING_TIME)
    setScore(STARTING_SCORE)
    setTimerRunning(true)
    playSong()
    playClick()
   
          const timer = setInterval(() => {
            setTimeLeft(prevTimeLeft => {
              if (prevTimeLeft > 0) {
                return prevTimeLeft - 1
              } else {
                setTimerRunning(false)
                clearInterval(timer)
                return STARTING_TIME
              }
            })
          }, 1000)
  
}

  return (
    <div>
      <ScoreBoard data={{ score, timeLeft }} />
      <PlayArea playProps={{ timeLeft, timerRunning, setScore }} />
      <button className={timerRunning ? "play-button fade-out": "play-button fade-in"} disabled={timerRunning} onClick={handleClick}>Başlat</button>
    </div>
  )
}
