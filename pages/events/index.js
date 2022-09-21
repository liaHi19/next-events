import { getAllEvents } from "../../dummy-data";

import EventsList from "../../components/events/EventsList/EventsList";
const EventsPage = () => {
  const events = getAllEvents();
  return (
    <div>
      <EventsList items={events} />
    </div>
  );
};

export default EventsPage;
