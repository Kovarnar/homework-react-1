import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Blog from './components/Blog';
import News from './components/News'

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Blog/>
      <News/>
    </div>
  );
}

export default App;
