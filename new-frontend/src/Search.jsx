export default function Search ({ search, setSearch }) {

    return (
        <>
        <div className="search-div">
            <input type="text" 
            value = {search} 
            placeholder = 'Search for an event...' 
            onChange = {(e) => setSearch(e.target.value)}
            className="search-bar"
            />
        </div>
        </>
    )
}