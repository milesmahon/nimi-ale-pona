import '../styles/App.scss';

function Definition(props) {
    return (
        <div className="Definition">
            <span className="dictionary-pos">{props.meaning[0]}</span>
            <span>   </span>
            <span className="dictionary-definition">{props.meaning[1]}</span>
        </div>
    )
}

export default Definition;