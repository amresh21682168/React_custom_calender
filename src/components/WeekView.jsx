import { getWeekDates, formatDate } from "../utils/dateUtils";

export default function WeekView({ currentDate, events, onDayClick }) {
  const weekDates = getWeekDates(currentDate);

  return (
    <div className="grid grid-cols-7 gap-2 p-4 ">
      {weekDates.map((day, index) => (
        <div
          onClick={() => onDayClick(day)}
          className="border p-2 h-32 overflow-y-auto cursor-pointer hover:bg-gray-100"
          key={index}
        >
          {" "}
          <div className="font-bold">
            {day.toLocaleDateString("default", {
              weekday: "short",
              day: "numeric",
            })}
          </div>
          {events
            .filter((e) => e.date === formatDate(day))
            .map((e) => (
              <div key={e.id} className="text-xs bg-green-100 p-1 rounded mt-1">
                {e.title}
              </div>
            ))}
        </div>
      ))}
    </div>
  );
}
