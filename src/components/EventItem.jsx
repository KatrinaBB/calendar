import { Link } from "react-router-dom";

export default function EventItem({ event, deleteHandler }) {
    const today = new Date().toISOString().split("T")[0];

    function formatDate(dateString) {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.toLocaleString("en-GB", { month: "long" });
        const year = date.getFullYear();
        const suffix = (day) => {
            if (day > 3 && day < 21) return "th";
            switch (day % 10) {
                case 1: return "st";
                case 2: return "nd";
                case 3: return "rd";
                default: return "th";
            }
        };
        return `${day}${suffix(day)} ${month} ${year}`;
    }

    return (
        <div className= "event-item">
            <h3>{event.date === today ? "TODAY" : event.date > today ? "Upcoming:" : "Historic: " } 
            {event.title}
            </h3>
            <p className="event-date">{formatDate(event.date)}</p>
            <p>{event.description}</p>
            <div className="event-actions">
                <Link to={`/update/${event.id}`}>Update event</Link>
                <button onClick={() => deleteHandler(event.id)}>Delete event</button>
            </div>
        </div>
    );
}

