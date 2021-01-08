import '../styles/App.scss';
import Definition from './Definition'

function Word(props) {
    return (
        <div className="Word">
            <li className="dictionary-word">{props.word}</li>
            <ul>
                {props.meanings.map(meaning => (
                    <Definition meaning={meaning}></Definition>
                ))}
                {/* <li>{props.meanings[0][0]}</li>
                <li>{props.meanings[0][1]}</li> */}
            </ul>
        </div>
    )
}

export default Word;