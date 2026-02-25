
import EventList from '../components/EventList'; 
import Searchfield from '../components/Searchfield';
import { useState, useEffect } from 'react';

function DefaultPage() {

  const [events, setEvents] = useState(() => {
    const savedEvents = localStorage.getItem("events");
    return savedEvents ? JSON.parse(savedEvents) : [];
  });

  const [filterText, setFilterText] = useState("");

  useEffect(() => {
    localStorage.setItem("filterText", filterText); 
  }, [filterText]);

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  const sortedEvents = events.toSorted((a, b) =>
    a.date.localeCompare(b.date, "en", { sensitivity: "base"})
  );

  const filteredEvents = sortedEvents.filter(event =>
    event.title.toLowerCase().includes(filterText.toLowerCase()) 
  );

  const handleInputChange = (event) => {
    setFilterText(event.target.value);
  };

  return (
    <>
      {filteredEvents.length > 0 ? (
        <div>
          <Searchfield handleinput={handleInputChange} filter={filterText} />
          <EventList events={filteredEvents} setEvents={setEvents} />
        </div>
      ) : (
        <div>
          <p>Sorry, nothing to show...</p>
        </div>
      )}
    </>
  );
}
  
export default DefaultPage;


