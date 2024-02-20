import image from './assets/img.png'

const App = () => {
  return (
    <section>
      <div className="container">
        <>
          <div className="img-container">
            <img src={image} alt="people" />
          </div>
        </>
      </div>
    </section>
  )
}

export default App