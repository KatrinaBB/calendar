export default function Searchfield({ handleinput, filter}) {

    return (
        <input type="search" placeholder="Type to search ..." value={filter} onChange={handleinput}/>

    )
}