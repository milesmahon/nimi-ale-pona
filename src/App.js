import './styles/App.css';
import WordList from './components/WordList';
import Header from './components/Header';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <Header/>
      <SearchBar/>
      <WordList/>
    </div>
  );
}

export default App;
