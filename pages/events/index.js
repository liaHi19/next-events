import { useRouter } from "next/router";
import { getAllEvents } from "../../dummy-data";

import EventsList from "../../components/events/EventsList/EventsList";
import EventsSearch from "../../components/events/eventsSearch/EventsSearch";

const EventsPage = () => {
  const router = useRouter();
  const events = getAllEvents();

  const findEvents = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };

  return (
    <>
      <EventsSearch onSearch={findEvents} />
      <EventsList items={events} />
    </>
  );
};

export default EventsPage;
