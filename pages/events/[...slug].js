import React from "react";

import { getFilteredEvents } from "../../api/events";

import EventsList from "../../components/events/EventsList/EventsList";
import ResultsTitle from "../../components/events/resultsTitle/ResultsTitle";
import ErrorText from "../../components/ui/errorText/ErrorText";

const FilteredEventsPage = ({ hasError, filteredEvents, date }) => {
  if (hasError) {
    return (
      <ErrorText
        text="Invalid filter. Please adjust your values!"
        link="/events"
        linkText="Show All Events"
      />
    );
  }

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <ErrorText
        text="No events found for chosen filter"
        link="/events"
        linkText="Show All Events"
      />
    );
  }

  const newDate = new Date(date.year, date.month - 1);

  return (
    <>
      <ResultsTitle date={newDate} />
      <EventsList items={filteredEvents} />
    </>
  );
};

export async function getServerSideProps(context) {
  const { params } = context;

  const filteredData = params.slug;

  const numYear = +filteredData[0];
  const numMonth = +filteredData[1];

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return {
      props: {
        hasError: true,
      },
    };
  }

  const filteredEvents = await getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  return {
    props: {
      filteredEvents,
      date: {
        year: numYear,
        month: numMonth,
      },
    },
  };
}

export default FilteredEventsPage;
