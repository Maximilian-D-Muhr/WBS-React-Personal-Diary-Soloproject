function EntryList({ entries }) {
  if (entries.length === 0) {
    return null;
  }

  return (
    <ul className="mt-6 space-y-4">
      {entries.map((entry) => (
        <li key={entry.id}>
          {entry.title} - {entry.date}
        </li>
      ))}
    </ul>
  );
}

export default EntryList;
