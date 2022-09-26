import { getFeaturedEvents } from "../api/events";

import EventsList from "../components/events/EventsList/EventsList";
import MainHead from "../components/ui/MainHead";

const HomePage = ({ featuredEvents }) => {
  return (
    <>
      <MainHead
        title="Next Events"
        description="Find a lot of great events that allow you to evolve"
      />
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
