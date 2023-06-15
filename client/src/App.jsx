import Canvas from './canvas'
import Customizer from './pages/Customizer'
import Home from './pages/Home'

const App = () => {
  return (
    <main className="transition-all ease-in app">
      <Home />
      <Canvas />
      <Customizer />
    </main>
  )
}

export default App
