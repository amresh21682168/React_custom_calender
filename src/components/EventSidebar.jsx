

// export default function EventSidebar({ events, title }) {
//   return (
//     <div className="bg-gray-100 h-full p-4 overflow-y-auto">
//       <h3 className="mb-4 font-semibold">{title}</h3>
//       {events.length === 0 && <p className="text-sm">No Events</p>}
//       {events.map((e) => (
//         <div
//           key={e.id}
//           className="rounded bg-white p-2 mb-2 shadow text-sm"
//         >
//           <div className="font-bold">{e.title}</div>
//           <div className="text-xs text-gray-600">{e.date}</div>
//         </div>
//       ))}
//     </div>
//   );
// }


import { formatDate } from "../utils/dateUtils";
import DeleteEventButton from "./DeleteEvent";

export default function EventSidebar({ events, title, onDeleteEvent }) {
  return (
    <div className="bg-gray-300 h-full p-4 border-l overflow-y-auto">
      <h3 className="mb-5 font-semibold">{title}</h3>
      {events.length === 0 && <p>No Events</p>}
      {events.map((e) => (
        <div
          key={e.id}
          className="rounded bg-white p-2 mb-2 shadow flex justify-between items-center"
        >
          <div>
            <div className="font-bold">{e.title}</div>
            <div className="text-xs">{e.date}</div>
          </div>
          <DeleteEventButton onDelete={() => onDeleteEvent(e.id)} />
        </div>
      ))}
    </div>
  );
}
