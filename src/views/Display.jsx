import useTimeTravel from '../hooks/useTimeTravel.jsx';

export default function Display() {
  const { current, dates, save } = useTimeTravel();

  return (
    <div>
      <input type="date" onChange={save} />
      <div>{dates[0] ? dates[current] : 'Please select a date'}</div>
    </div>
  );
}
