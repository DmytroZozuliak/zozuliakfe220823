import { useCallback, useEffect, useState } from 'react'
import './App.css'
import poster1 from './assets/cats.jpg'
import poster2 from './assets/chubaka.jpg'
import poster3 from './assets/dogs.jpg'
import poster4 from './assets/dyno.jpg'
import poster5 from './assets/planets.jpg'
import { getRandomColor, shuffleArray } from './utils/helpers'

const imagesArray = [poster1, poster2, poster3, poster4, poster5]
const seconds = 52

function App() {
  const [images, setImages] = useState(imagesArray)
  const [buttonColor, setButtonColor] = useState('white')

  const changeColorsAndBG = useCallback(() => {
    setImages((prev) => shuffleArray(prev))
    setButtonColor(getRandomColor())
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      changeColorsAndBG()
    }, seconds * 1000)

    return () => {
      clearInterval(interval)
    }
  }, [changeColorsAndBG])

  return (
    <div className="App">
      <header
        style={{ backgroundImage: `url(${images[0]})` }}
        className="App-header center background"
      >
        header
      </header>
      <main className="App-main">
        <aside style={{ backgroundImage: `url(${images[1]})` }} className="center background">
          Left Panel
        </aside>
        <section style={{ backgroundImage: `url(${images[2]})` }} className="center background">
          <p>Main Body</p>
          <button
            style={{ backgroundColor: buttonColor }}
            className="button"
            onClick={changeColorsAndBG}
          >
            change
          </button>
        </section>
        <aside style={{ backgroundImage: `url(${images[3]})` }} className="center background">
          Right Panel
        </aside>
      </main>
      <footer
        style={{ backgroundImage: `url(${images[4]})` }}
        className="App-footer center background"
      >
        footer
      </footer>
    </div>
  )
}

export default App
