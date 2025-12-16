function Header({ onAddEntry }) {
  return (
    <header className="flex items-center justify-between py-4">
      <h1 className="text-2xl font-bold">
        Personal Diary
      </h1>

      <button
        type="button"
        className="btn btn-primary"
        onClick={onAddEntry}
      >
        Add Entry
      </button>
    </header>
  );
}

export default Header;
