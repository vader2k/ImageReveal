import { useRef, useEffect } from 'react'
import pic from './assets/img.png'

const App = () => {
  let container = useRef(null)
  let image = useRef(null)

  return (
    <section>
      <div ref={el=> {container = el}} className="container">
        <>
          <div className="img-container">
            <img ref={el => {image = el}} src={pic} alt="people" />
          </div>
        </>
      </div>
    </section>
  )
}

export default App