import { getFeaturedEvents } from "../api/events";

import EventsList from "../components/events/EventsList/EventsList";

const HomePage = ({ featuredEvents }) => {
  return (
    <>
      <EventsList items={featuredEvents} />
    </>
  );
};

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      featuredEvents,
    },
    revalidate: 1800,
  };
}

export default HomePage;
