import React from "react";

import { getEventById, getFeaturedEvents } from "../../api/events";

import EventSummary from "../../components/event-detail/eventSummary/EventSummary";
import EventLogistics from "../../components/event-detail/eventLogistics/EventLogistics";
import EventContent from "../../components/event-detail/eventContent/EventContent";
import MainHead from "../../components/ui/MainHead";
import Comments from "../../components/input/comments/Comments";

const EventDetailPage = ({ event }) => {
  if (!event) {
    return (
      <div className="center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <>
      <MainHead title={event?.title} description={event.description} />
      <EventSummary title={event.title} />
      <EventLogistics {...event} />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
      <Comments eventId={event.id} />
    </>
  );
};

export async function getStaticProps(context) {
  const eventId = context.params.eventId;

  const event = await getEventById(eventId);

  if (!event) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      event,
    },
    revalidate: 30,
  };
}

export async function getStaticPaths() {
  const events = await getFeaturedEvents();

  const pathsWithParams = events.map((event) => ({
    params: { eventId: event.id },
  }));

  return {
    paths: pathsWithParams,
    fallback: "blocking",
  };
}

export default EventDetailPage;
