import { getMonthDays, formatDate } from "../utils/dateUtils";

export default function MonthView({ currentDate, events, onDayClick }) {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const days = getMonthDays(year, month);
  const firstDay = new Date(year, month, 1).getDay();
  const blanks = Array(firstDay).fill(null);
  const monthArray = Array(days)
    .fill(null)
    .map((_, i) => i + 1);
  const monthDays = [...blanks, ...monthArray];
  const daysArray = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className="grid grid-cols-7 gap-1 sm:gap-2 p-2 sm:p-4 text-xs sm:text-sm">
      {daysArray.map((d, index) => (
        <div key={index} className="text-center font-semibold">
          {d}
        </div>
      ))}

      {monthDays.map((day, idx) => (
        <div
          key={idx}
          className="border p-1 sm:p-2 h-16 sm:h-24 overflow-y-auto cursor-pointer hover:bg-gray-50 bg-blue-200"
          onClick={() => day && onDayClick(new Date(year, month, day))}
        >
          {day && <div className="font-bold ">{day}</div>}
          {day &&
            events
              .filter((e) => e.date === formatDate(new Date(year, month, day)))
              .map((e) => (
                <div
                  key={e.id}
                  className="text-[10px] sm:text-xs bg-blue-100 p-0.5 sm:p-1 rounded mt-1 truncate"
                >
                  {e.title}
                </div>
              ))}
        </div>
      ))}
    </div>
  );
}
