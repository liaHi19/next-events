import AddressIcon from "../../icons/address-icon";
import DateIcon from "../../icons/date-icon";
import LogisticsItem from "../logisticsItem/LogisticsItem";

import { readableDate, transformText } from "../../../helpers/string";

import styles from "./event-logistics.module.css";

const EventLogistics = ({ date, location, image, imageAlt }) => {
  const humanReadableDate = readableDate(date);
  const addressText = transformText(location);

  return (
    <section className={styles.logistics}>
      <div className={styles.image}>
        <img src={`/${image}`} alt={imageAlt} />
      </div>
      <ul className={styles.list}>
        <LogisticsItem icon={DateIcon}>
          <time>{humanReadableDate}</time>
        </LogisticsItem>
        <LogisticsItem icon={AddressIcon}>
          <address>{addressText}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
};

export default EventLogistics;
