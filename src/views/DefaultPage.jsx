import '../App.css'
import EventList from '../components/EventList';
import Footer from '../components/Footer';
import Header from '../components/Header';
import myimage from '../assets/calendarimage.png'; 
import Searchfield from '../components/Searchfield';
import { useState, useEffect } from 'react';


const events = [
  { id: 1,title: "Meeting", date: "2026-02-18", description: "About party in Aarhus" },
  { id: 2,title: "Workshop", date: "2027-03-26", description: "Designing a new app" },
  { id : 3,title: "Conference", date: "2026-08-24", description: "Tech trends in 2026" },
  { id: 4,title: "Webinar", date: "2026-01-20", description: "Marketing strategies" },
  { id: 5,title: "Workshop", date: "2028-05-15", description: "professionals" },
  { id: 6,title: "Product Launch", date: "2026-11-10", description: "Introducing our new product" },
];

function DefaultPage() {

// looks for infromation in webstorage if there are some 
// filterText is equal to the value in webstorage, else it is an empty string 

  const [filterText, setFiltertext] = useState(() => {
    const savedFilter = localStorage.getItem("filterTextinStorage");
    return savedFilter ? savedFilter : "";
  });

  // everytime the filterText variable changes, the information 
  // is saved to webstorage, with the key "filterTextinStorage"

  useEffect (() => {
    localStorage.setItem("filterTextinStorage", filterText);
  });

  const sortedEvents = events.toSorted((a, b) => 
    a.date.localeCompare(b.date, "en", { sensitivity: "base"})
); 

// Filter events based on the user input //

const filteredEvents = sortedEvents.filter(events => 
events.title.toLowerCase().includes(filterText.toLowerCase()) || 
events.description.toLowerCase().includes(filterText.toLowerCase()) || 
events.date.includes(filterText)
);

// Change the value of variable "filterText"
// makes the component re-render.
// function handleInputChange(event) {...

const handleInputChange = (event) => {
  setFiltertext(event.target.value);
}

return (
    <div>
      <img src={myimage} alt="this is my picture" />
      <Header/>
      <Searchfield handleinput = {handleInputChange} filter = {filterText}/>
 <EventList events = {filteredEvents}/>
      <Footer/>
    </div>
  )
}
  
export default DefaultPage;


