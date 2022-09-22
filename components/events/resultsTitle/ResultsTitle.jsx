import { readableDate } from "../../../helpers/string";

import Button from "../../ui/Button/Button";

import styles from "./results-title.module.css";

const ResultsTitle = ({ date }) => {
  const humanReadableDate = readableDate(date);

  return (
    <section className={styles.title}>
      <h1>Events in {humanReadableDate}</h1>
      <Button link="/events">Show all events</Button>
    </section>
  );
};

export default ResultsTitle;
