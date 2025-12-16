function AddEntryModal({ isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">
          Add new entry
        </h2>

        <p className="text-gray-600 mb-4">
          Form comes here.
        </p>

        <button
          type="button"
          className="btn"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default AddEntryModal;
