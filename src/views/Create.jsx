import { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom'; 

export default function Create() {

// get list of events from webstorage/ local storage
// as a string an format it as a list of event objects

const [events, setEvents] = useState(() => {
    const savedEvents = localStorage.getItem("events");
    return savedEvents ? JSON.parse(savedEvents) : [];
  });

  // everytime the events variable changes, 
  // the information is saved to webstorage, with the key "events"

   const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");

    let navigate = useNavigate();

    // save the events to webstorage/ local storage as a string
    useEffect(() => {
        localStorage.setItem("events", JSON.stringify(events));
    }, [events]);

    // when the user press create button, i find the highest
    // id-value in the list, thereafter i add 1 to that
    // number and it becomes  the id of the new event.

    function createHandler(e) {
        e.preventDefault();
        const highestId = events.length > 0 ? Math.max(...events.map(event => event.id)) : -1;
        const newEvent = { id: highestId+1, title: title, date: date, description: description };
        setEvents([...events, newEvent]);
        navigate("/");
    }


    return (

        <form onSubmit={createHandler}>
            <h2>Create New Event</h2>
            <div> 
                <label htmlFor="title">Title:</label>
                <input type="text" id="title" name="title" value={title} required onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="date">Date:</label>
                    <input type="date" id="date" name="date" value={date} required onChange={(e) => setDate(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="description">Description:</label>
                    <textarea id="description" name="description" value={description} required onChange={(e) => setDescription(e.target.value)}/>
                </div>
                <button type="submit">Create</button>
        </form>
    );
};