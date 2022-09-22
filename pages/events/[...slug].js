import React from "react";
import { useRouter } from "next/router";

import { getFilteredEvents } from "../../dummy-data";

import EventsList from "../../components/events/EventsList/EventsList";

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
    return <p className="center">Invalid filter. Please adjust your values!</p>;
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return <p className="center">No events found for chosen filter</p>;
  }

  return (
    <div>
      <EventsList items={filteredEvents} />
    </div>
  );
};

export default FilteredEventsPage;
