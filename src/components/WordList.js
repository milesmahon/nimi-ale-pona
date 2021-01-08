import nimi_ale from '../data/nimi_ale';
import Word from './Word';
import '../styles/App.css';

function searchFilter(word, searchTerm) {
    searchTerm = searchTerm.trim();
    return word.word.includes(searchTerm) || word.meanings.some(meaning => meaning.some(item => item.includes(searchTerm)))
}

function WordList(props) {
    return (
        <div className="WordListContainer">
            <ul className="WordList">
                {nimi_ale.filter(nimi => searchFilter(nimi, props.searchTerm)).map(nimi => (<Word word={nimi.word} meanings={nimi.meanings}></Word>))}
            </ul>
        </div>
    )
}

export default WordList;