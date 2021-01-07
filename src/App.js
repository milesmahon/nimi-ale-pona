import './styles/App.css';
import WordList from './components/WordList';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import { useState } from 'react';

function App() {

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="App">
      <Header/>
      <SearchBar searchTerm={searchTerm} setSearchTerm = {setSearchTerm}/>
      <WordList searchTerm = {searchTerm}/>
    </div>
  );
}

export default App;
