import React from "react";
import { useRouter } from "next/router";

import { getFilteredEvents } from "../../dummy-data";

import EventsList from "../../components/events/EventsList/EventsList";
import ResultsTitle from "../../components/events/resultsTitle/ResultsTitle";
import ErrorText from "../../components/ui/errorText/ErrorText";

const FilteredEventsPage = () => {
  const router = useRouter();

  const filteredData = router.query.slug;

  if (!filteredData) {
    return <p className="center">Loading...</p>;
  }

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
    return (
      <ErrorText
        text="Invalid filter. Please adjust your values!"
        link="/events"
        linkText="Show All Events"
      />
    );
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <ErrorText
        text="No events found for chosen filter"
        link="/events"
        linkText="Show All Events"
      />
    );
  }

  const date = new Date(numYear, numMonth - 1);

  return (
    <>
      <ResultsTitle date={date} />
      <EventsList items={filteredEvents} />
    </>
  );
};

export default FilteredEventsPage;
