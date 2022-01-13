import useTimeTravel from '../hooks/useTimeTravel.jsx';
import styles from './Display.css';

export default function Display() {
  const { current, dates, save, undo, redo } = useTimeTravel();

  let currentDate = dates[current] || '';

  return (
    <div
      className={styles.appPage}
      style={{
        backgroundImage: `url(https://artofgears.com/files/2015/10/0-Movie-Poster.jpg)`,
      }}
    >
      <input
        type="date"
        className={styles.dateInput}
        aria-label="date-input"
        value={currentDate}
        onChange={(e) => save(e)}
      />

      <section className={styles.dateDisplay} aria-label="date-display">
        {dates[0] ? dates[current] : 'Please select a date'}
      </section>
      <div className={styles.buttonBox}>
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
    </div>
  );
}
