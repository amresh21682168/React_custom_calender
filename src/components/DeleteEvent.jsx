import React from "react";
import { Trash2 } from "lucide-react"; // using lucide-react icons

export default function DeleteEventButton({ onDelete }) {
  return (
    <button
      onClick={onDelete}
      className="ml-2 text-red-600 hover:text-red-800 transition"
      title="Delete Event"
    >
      <Trash2 size={16} />
    </button>
  );
}
