import { useEffect } from 'react';
import useTimeTravel from '../hooks/useTimeTravel.jsx';

export default function Display() {
  const { current, dates, save, undo, redo } = useTimeTravel();

  let currentDate = dates[current] || '';

  return (
    <div>
      <input type="date" value={currentDate} onChange={(e) => save(e)} />

      <div>{dates[0] ? dates[current] : 'Please select a date'}</div>

      <button onClick={undo} disabled={current <= 0}>
        Undo
      </button>

      <button onClick={redo} disabled={current >= dates.length - 1}>
        Redo
      </button>
    </div>
  );
}
