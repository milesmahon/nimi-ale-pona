import '../styles/App.css';

function Word(props) {
    return (
        <div className="Word">
            <li>{props.word}</li>
            <ul>
                <li>{props.meanings[0][0]}</li>
                <li>{props.meanings[0][1]}</li>
            </ul>
        </div>
    )
}

export default Word;