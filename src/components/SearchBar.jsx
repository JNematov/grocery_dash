const SearchBar = () => (
    <div className="search-bar">
        <form action="" method="get">
            <label>
                <span className="visually-hidden">Search Stores</span>
            </label>
            <input
                type="text"
                id="header-search"
                placeholder="Walmart"
                name="s"
            />
            <button type="submit">Search</button>
        </form>
    </div>

);

export default SearchBar;