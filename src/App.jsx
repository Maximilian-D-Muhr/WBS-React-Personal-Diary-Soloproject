import { useEffect, useState } from "react";
import EntryList from "./components/EntryList";
import Header from "./components/Header";
import AddEntryModal from "./components/AddEntryModal";

function App() {
  // global state
  const [entries, setEntries] = useState([]);
  const [selectedEntry, setSelectedEntry] = useState(null);

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);

  // load entries once on app start
  useEffect(() => {
    const storedEntries = localStorage.getItem("personal-diary-entries-v1");
    if (storedEntries) {
      setEntries(JSON.parse(storedEntries));
    }
  }, []);

  return (
    <div className="min-h-screen p-4">
      <Header onAddEntry={() => setIsAddModalOpen(true)} />

      <EntryList entries={entries} />

      {entries.length === 0 && (
        <p className="mt-4 text-gray-500">
          No entries yet.
        </p>
      )}

      <AddEntryModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSaveEntry={(newEntry) => {
          const entryExistsForDay = entries.some(
            (entry) => entry.date === newEntry.date
          );

          if (entryExistsForDay) {
            alert("An entry for this day already exists. Please come back tomorrow.");
            return;
          }

          const updatedEntries = [newEntry, ...entries];
          setEntries(updatedEntries);

          localStorage.setItem(
            "personal-diary-entries-v1",
            JSON.stringify(updatedEntries)
          );

          setIsAddModalOpen(false);
        }}
      />
    </div>
  );
}

export default App;
