import '../styles/App.css';

function SearchBar(props) {
    return (
        <div className="SearchBar">
            <input id="searchBar" type="text" placeholder="ale li toki pona" autoFocus="autofocus" 
                    value={props.searchTerm}
                    onChange={(e) => props.setSearchTerm(e.target.value)}></input>
        </div>
    )
}

export default SearchBar;