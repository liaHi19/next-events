import React from "react";

import { apiClient } from "../../api/axiosConfig";
import { transformData, findById } from "../../helpers/transform";

import EventSummary from "../../components/event-detail/eventSummary/EventSummary";
import EventLogistics from "../../components/event-detail/eventLogistics/EventLogistics";
import EventContent from "../../components/event-detail/eventContent/EventContent";
import ErrorAlert from "../../components/ui/errorAlert/errorAlert";

const EventDetailPage = ({ event }) => {
  if (!event) {
    return (
      <ErrorAlert>
        <p>No event found!</p>
      </ErrorAlert>
    );
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

export async function getStaticProps(context) {
  const eventId = context.params.eventId;

  const { data } = await apiClient.get();

  const events = transformData(data);
  const event = findById(events, eventId);

  if (!event) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      event,
    },
  };
}

export async function getStaticPaths() {
  const { data } = await apiClient.get();
  const events = transformData(data);

  const pathsWithParams = events.map((event) => ({
    params: { eventId: event.id },
  }));

  return {
    paths: pathsWithParams,
    fallback: false,
  };
}

export default EventDetailPage;
