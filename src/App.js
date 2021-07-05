import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'

import './App.scss'

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Home />
        <About />
      </main>
    </div>
  )
}

export default App
