import Header from './components/Header';
import Home from './components/Home';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Home />
      </main>
    </div>
  );
}

export default App
