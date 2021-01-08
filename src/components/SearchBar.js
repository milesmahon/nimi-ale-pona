import '../styles/App.scss';

function SearchBar(props) {
    return (
        <div className="SearchBar">
            <input id="searchBar" type="text" placeholder="lukin jo" autoFocus={true} 
                    value={props.searchTerm}
                    onChange={(e) => props.setSearchTerm(e.target.value)}></input>
        </div>
    )
}

export default SearchBar;