import { formatDate, formatTime } from "../utils/dateUtils";

export default function DayView({ currentDate, events }) {
  const datestr = formatDate(currentDate);
  const dayEvents = events.filter((e) => e.date === datestr);

  return (
    <div className="p-4">
      <h2 className="text-lg sm:text-xl font-semibold mb-4">
        {currentDate.toDateString()}
      </h2>

      <div className="grid grid-cols-1 divide-y text-xs sm:text-sm">
        {Array.from({ length: 24 }, (_, i) => (
          <div key={i} className="h-12 sm:h-16 relative">
            <span className="absolute left-0 top-0 text-[10px] sm:text-xs">
              {formatTime(i)}
            </span>
            {dayEvents
              .filter((e) => parseInt(e.time?.split(":")[0]) === i)
              .map((e) => (
                <div
                  key={e.id}
                  className="absolute left-10 sm:left-16 top-1 bg-purple-200 px-2 py-1 rounded text-[10px] sm:text-sm"
                >
                  {e.title}
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
}
