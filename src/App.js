import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Discover from './components/Discover'
import Experience from './components/Experience'
import Video from './components/Video'

import './App.scss'

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Home />
        <About />
        <Discover />
        <Experience />
        <Video />
      </main>
    </div>
  )
}

export default App
