import { useState } from 'react';

export default function useTimeTravel() {
  const [dates, setDates] = useState([]);
  const [current, setCurrent] = useState(-1);

  const save = (e) => {
    const newDate = e.target.value;

    const updatedDates = dates
      .slice(0, current + 1)
      .concat([newDate])
      .concat(dates.slice(current + 1));

    setDates(updatedDates);
    setCurrent(current + 1);
  };

  return { current, dates, save };
}
