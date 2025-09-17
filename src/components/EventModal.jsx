import React, { useState } from "react";

const EventModal = ({ isOpen, onClose, onSave, defaultDate }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(defaultDate);
  const [time, setTime] = useState("12:00");

  const handleSave = () => {
    if (!title) return;
    onSave({ id: Date.now(), title, date, time });
    setTitle("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 p-2">
      <div className="bg-white p-4 sm:p-6 rounded shadow-lg w-full max-w-md">
        <h2 className="text-lg font-semibold mb-3">Add Event</h2>
        <input
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          value={title}
          placeholder="Event Title"
          className="border shadow p-2 mb-2 w-full text-sm"
        />
        <input
          onChange={(e) => setDate(e.target.value)}
          type="date"
          value={date}
          className="border w-full p-2 mb-2 text-sm"
        />
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="border w-full p-2 mb-2 text-sm"
        />
        <div className="flex justify-end gap-2 mt-3">
          <button
            onClick={onClose}
            className="border px-3 py-1 rounded bg-gray-200 text-sm"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="border px-3 py-1 rounded bg-blue-600 text-white text-sm"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventModal;
