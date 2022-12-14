import { useRouter } from "next/router";

import { getAllEvents } from "../../api/events";

import EventsList from "../../components/events/EventsList/EventsList";
import EventsSearch from "../../components/events/eventsSearch/EventsSearch";
import MainHead from "../../components/ui/MainHead";

const EventsPage = ({ events }) => {
  const router = useRouter();

  const findEvents = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };

  return (
    <>
      <MainHead
        title="All Events"
        description="Find a lot of great events that allow you to evolve"
      />
      <EventsSearch onSearch={findEvents} />
      <EventsList items={events} />
    </>
  );
};

export async function getStaticProps() {
  const events = await getAllEvents();

  return {
    props: {
      events,
    },
    revalidate: 60,
  };
}

export default EventsPage;
