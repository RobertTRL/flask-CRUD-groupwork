export default function Search ({search, setSearch}) {

    return (
        <>
        <div>
            <input type="text" 
            value = {search || ''} 
            placeholder = 'Search event' 
            onChange = {(e) => setSearch(e.target.value)}/>
        </div>
        </>
    )
}