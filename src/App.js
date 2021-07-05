import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Discover from './components/Discover'
import Experience from './components/Experience'
import Video from './components/Video'
import Places from './components/Places'
import Subscribe from './components/Subscribe'
import Sponsors from './components/Sponsors'
import Footer from './components/Footer'
import ScrollUp from './components/ScrollUp'

import './App.scss'

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Discover />
        <Experience />
        <Video />
        <Places />
        <Subscribe />
        <Sponsors />
      </main>
      <Footer />
      <ScrollUp />
    </>
  )
}

export default App
