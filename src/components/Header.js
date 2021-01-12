import '../styles/App.scss';
import Menu from './Menu';

function Header() {
    return (
        <div className="Header">
            <h1 id="title">nimi ale pona</h1>
            <p id="subtitle">lit. "all the good words"</p>
            <Menu/>
        </div>
    )
}

export default Header;