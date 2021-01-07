import nimi_ale from '../data/nimi_ale';
import Word from './Word';
import '../styles/App.css';

function searchFilter(word, searchTerm) {
    return word.word.includes(searchTerm) || word.meanings.some(meaning => meaning.some(item => item.includes(searchTerm)))
}

function WordList(props) {
    // nimi_ale.slice(0,5).forEach(element => element.meanings.forEach(meaning => meaning.forEach(submeaning => console.log(submeaning.includes("a")))));
    // nimi_ale.slice(0,5).forEach(element => element.meanings.forEach(meaning => console.log(meaning.some(item => item.includes("a")))));
    return (
        <div className="WordListContainer">
            <ul className="WordList">
                {nimi_ale.filter(nimi => searchFilter(nimi, props.searchTerm)).map(nimi => (<Word word={nimi.word} meanings={nimi.meanings}></Word>))}
            </ul>
        </div>
    )
}

export default WordList;