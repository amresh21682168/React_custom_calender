import { formatDate } from "../utils/dateUtils";
export default function EventSidebar({ events, title }) {
  return (
    <div className="bg-gray-300 w-100 p-4 border-l overflow-y-auto">
      <h3 className="mb-5 font-semibold">{title}</h3>
      {events.length == 0 && <p>No Events </p>}
      {events.map((e) => (
        <div key={e.id} className="rounded bg-white p-2 mb-2 shadow">
          <div className="font-bold">{e.title}</div>
          <div className="text-xs">{e.date}</div>
        </div>
      ))}
    </div>
  );
}
 
