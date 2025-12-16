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

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Title
            </label>
            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="Entry title"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Date
            </label>
            <input
              type="date"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Image URL
            </label>
            <input
              type="url"
              className="input input-bordered w-full"
              placeholder="https://"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Content
            </label>
            <textarea
              className="textarea textarea-bordered w-full"
              rows="4"
              placeholder="Write your entry..."
            />
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              className="btn btn-ghost"
              onClick={onClose}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="btn btn-primary"
            >
              Save
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}

export default AddEntryModal;
