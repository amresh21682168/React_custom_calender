import React from "react";
import { useState } from "react";

const EventModal = ({ isOpen, onClose, onSave, defaultDate }) => {
  const [title, setTitle] = useState("my name is amresh");
  const [date, setDate] = useState(defaultDate);
  const [time, setTime] = useState("12:00");

  return (
    <div className="flex fixed inset-0 items-center justify-center bg-black/40">
     
      <div className="bg-gray-100 p-6 rounded shadow-lg w-100">
       
        
        <h2>Add Event</h2>
        <input
          onChange={(e) =>
            { 
              setTitle(e.target.value);
               console.log(e.target);
              //  console.dir(e.target);

              console.log(e.target.value)} }
          type="text"
          placeholder="Event Title"
          // value={title}
          className="border shadow p-2 mb-2 w-full"
        />
        <input
          onChange={(e) => setDate(e.target.value)}
          type="date"
          value={date}
          className="border w-full p-2 mb-2 "
        />
        <input type="time" 
        value={time}
        onChange={(e)=>setTime(e.target.value)}
        className="border w-full p-2 mb-2 " />
        <div className="flex justify-end gap-2 p-2">
          <button className="border px-3 py-1 rounded bg-gray-300">Cancel</button>
          <button className="border px-3 py-1 rounded bg-blue-500 text-white">Save</button>
        </div>
      </div>
    </div>
  );
};

export default EventModal;

