import './assets/scss/App.scss';
import Header from './components/Header';
import Banner from './components/Banner';
import Blog from './components/Blog';
import News from './components/News'

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <Banner/>
        <div className='wrapper'>
          <Blog/>
          <News/>
        </div>
      </main>
    </div>
  );
}

export default App;
