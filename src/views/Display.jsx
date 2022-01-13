import useTimeTravel from '../hooks/useTimeTravel.jsx';
import './Display.css';

export default function Display() {
  const { current, dates, save, undo, redo } = useTimeTravel();

  let currentDate = dates[current] || '';

  return (
    <div>
      <input
        type="date"
        aria-label="date-input"
        value={currentDate}
        onChange={(e) => save(e)}
      />

      <section aria-label="date-display">
        {dates[0] ? dates[current] : 'Please select a date'}
      </section>

      <button aria-label="undo-button" onClick={undo} disabled={current <= 0}>
        Undo
      </button>

      <button
        aria-label="redo-button"
        onClick={redo}
        disabled={current >= dates.length - 1}
      >
        Redo
      </button>
    </div>
  );
}
