import React, { useRef } from "react";

import Button from "../../ui/Button/Button";

import styles from "./eventsSearch.module.css";
const months = [
  { value: "1", month: "January" },
  { value: "2", month: "February" },
  { value: "3", month: "March" },
  { value: "4", month: "April" },
  { value: "5", month: "May" },
  { value: "6", month: "June" },
  { value: "7", month: "July" },
  { value: "8", month: "August" },
  { value: "9", month: "September" },
  { value: "10", month: "October" },
  { value: "11", month: "November" },
  { value: "12", month: "December" },
];

const EventsSearch = ({ onSearch }) => {
  const yearInputRef = useRef();
  const monthInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const selectedYear = yearInputRef.current.value;
    const selectedMonth = monthInputRef.current.value;

    onSearch(selectedYear, selectedMonth);
  };
  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={styles.controls}>
        <div className={styles.control}>
          <label htmlFor="year">Year</label>
          <select id="year" ref={yearInputRef}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className={styles.control}>
          <label htmlFor="month">Month</label>
          <select id="month" ref={monthInputRef}>
            {months.map(({ value, month }) => (
              <option key={value} value={value}>
                {month}
              </option>
            ))}
          </select>
        </div>
      </div>
      <Button>Find Events</Button>
    </form>
  );
};

export default EventsSearch;
