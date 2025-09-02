import { getMonthDays, formatDate } from "../utils/dateUtils";

export default function MonthView({ currentDate, events, onDayClick }) {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const days = getMonthDays(year, month);
  const firstDay = new Date(year, month, 1).getDay();
  console.log(`firstDay:${firstDay}`);
  const blanks = Array(firstDay).fill(null);
  const monthArray = Array(days)
    .fill(null)
    .map((_, i) => i + 1);
  const monthDays = [...blanks, ...monthArray];

  // function getMonthDays(year,month){                        to know the number of days in a month
  //   return new Date(year,month+1,0).getDate();
  // }

  return (
    <div className="grid grid-cols-7 gap-2 p-4">
      {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d, index) => (
        <div key={index} className="text-center font-semibold">
          {d}
        </div>
      ))}

      {monthDays.map((day, idx) => (
        <div
          key={idx}
          className="border p-2 h-24 overflow-y-auto cursor-pointer hover:bg-gray-100"
          onClick={() => day && onDayClick(new Date(year, month, day))}
        >
          {day && <div className="font-bold">{day}</div>}
          {day &&
            events
              .filter((e) => e.date === formatDate(new Date(year, month, day)))
              .map((e) => (
                <div
                  key={e.id}
                  className="text-xs bg-blue-100 p-1 rounded mt-1"
                >
                  {e.title}
                </div>
              ))}
        </div>
      ))}
    </div>
  );
}
