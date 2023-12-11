export default function Select({ steps, setMapSqueres }) {
  const handleClick = (e) => {
    const index = +e.target.value.slice(-1) -1;
    setMapSqueres(steps[index])
  };
  return (
    <>
      <select onChange={handleClick}>
        {steps.length > 0 ? (
          steps.map((step, index) => (
            <option key={index}>Step: {index + 1}</option>
          ))
        ) : (
          <option>No steps yet</option>
        )}
      </select>
    </>
  );
}
