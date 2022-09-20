import React from "react";

import EventItem from "./EventItem";

import styles from "./event-list.module.css";

const EventsList = ({ items }) => {
  return (
    <ul className={styles.list}>
      {items.map((event) => (
        <EventItem key={event.id} {...event} />
      ))}
    </ul>
  );
};

export default EventsList;
