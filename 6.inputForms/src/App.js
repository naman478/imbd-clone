import './App.css';
import Header from './components/Header';
import NewsApp from './components/NewsApp';
import UserForm from './components/UserForm';

function App() {
  return (
  <>
    <Header/>
    <NewsApp/>
  </>
  );
}

export default App;

fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)


