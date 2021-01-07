import '../styles/App.css';

function SearchBar() {
    return (
        <div className="SearchBar">
            <input placeholder="ale li toki pona" autofocus="autofocus" onfocus="this.select()"></input>
        </div>
    )
}

export default SearchBar;