import { useRouter } from "next/router";
import { transformData } from "../../helpers/transform";

import { apiClient } from "../../api/axiosConfig";

import EventsList from "../../components/events/EventsList/EventsList";
import EventsSearch from "../../components/events/eventsSearch/EventsSearch";

const EventsPage = ({ events }) => {
  const router = useRouter();

  console.log(events);
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

export async function getStaticProps() {
  const { data } = await apiClient.get();
  const events = transformData(data);

  return {
    props: {
      events,
    },
  };
}

export default EventsPage;
