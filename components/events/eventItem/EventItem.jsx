import React from "react";
import Image from "next/image";

import Button from "../../ui/Button/Button";
import DateIcon from "../../icons/date-icon";
import AddressIcon from "../../icons/address-icon";
import ArrowRightIcon from "../../icons/arrow-right-icon";

import { readableDate, transformText } from "../../../helpers/string";

import styles from "./event-item.module.css";

const EventItem = ({ id, title, location, image, date }) => {
  const humanReadableDate = readableDate(date);
  const formattedAddress = transformText(location);
  const exploreLink = `/events/${id}`;

  return (
    <li className={styles.item}>
      <Image src={`/${image}`} alt={title} width={250} height={160} />

      <div className={styles.content}>
        <div className={styles.summary}>
          <h2>{title}</h2>
          <div className={styles.date}>
            <DateIcon />
            <time>{humanReadableDate}</time>
          </div>
          <div className={styles.address}>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={styles.actions}>
          <Button link={exploreLink}>
            <span>Explore Event</span>
            <span className={styles.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
