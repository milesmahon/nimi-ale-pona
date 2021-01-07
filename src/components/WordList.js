import nimi_ale from '../data/nimi_ale';
import Word from './Word';
import '../styles/App.css';

function WordList() {
    return (
        <div className="WordListContainer">
            <ul className="WordList">
                {nimi_ale.slice(0, 5).map(nimi => (<Word word={nimi.word} meanings={nimi.meanings}></Word>))}
                {/* {nimi_ale.map(nimi => (<Word word={nimi.word}></Word>))} */}
            </ul>
        </div>
    )
}

export default WordList;