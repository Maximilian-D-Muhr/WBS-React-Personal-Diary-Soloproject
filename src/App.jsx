import { useEffect, useState } from "react";
import EntryList from "./components/EntryList";


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
      <h1 className="text-2xl font-bold">
        Personal Diary
      </h1>
      <EntryList entries={entries} />


      {entries.length === 0 && (
        <p className="mt-4 text-gray-500">
          No entries yet.
        </p>
      )}
    </div>
  );
}

export default App;
