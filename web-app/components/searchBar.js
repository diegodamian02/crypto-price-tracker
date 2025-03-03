import {useState} from 'react';
const SearchBar = ({onSearch}) => {
    const [query, setQuery] = useState('');

    return (
        <input
        type="text"
        className="search-bar"
        placeholder="Search Crypto..."
        value={query}
        onChange={(e) => {
            setQuery(e.target.value);
            onSearch(e.target.value);
        }}
        />
    );
};

export default SearchBar;
