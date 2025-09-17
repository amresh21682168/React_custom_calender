import { getWeekDates, formatDate } from "../utils/dateUtils";

export default function WeekView({ currentDate, events, onDayClick }) {
  const weekDates = getWeekDates(currentDate);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2 p-2 sm:p-4 text-xs sm:text-sm">
      {weekDates.map((day, index) => (
        <div
          onClick={() => onDayClick(day)}
          className="border p-2 h-24 sm:h-32 overflow-y-auto cursor-pointer hover:bg-gray-50  bg-blue-200"
          key={index}
        >
          <div className="font-bold">
            {day.toLocaleDateString("default", {
              weekday: "short",
              day: "numeric",
            })}
          </div>
          {events
            .filter((e) => e.date === formatDate(day))
            .map((e) => (
              <div
                key={e.id}
                className="text-[10px] sm:text-xs bg-green-100 p-1 rounded mt-1 truncate"
              >
                {e.title}
              </div>
            ))}
        </div>
      ))}
    </div>
  );
}
