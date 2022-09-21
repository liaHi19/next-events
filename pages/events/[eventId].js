import React from "react";
import { useRouter } from "next/router";
import { getEventById } from "../../dummy-data";

import EventSummary from "../../components/event-detail/eventSummary/EventSummary";
import EventLogistics from "../../components/event-detail/eventLogistics/EventLogistics";
import EventContent from "../../components/event-detail/eventContent/EventContent";

const EventDetailPage = () => {
  const { query } = useRouter();
  const event = getEventById(query.eventId);

  if (!event) {
    return <p>No event found!</p>;
  }

  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics {...event} />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
};

export default EventDetailPage;
