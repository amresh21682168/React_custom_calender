import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CalendarHeader({
  mode,
  setMode,
  currentDate,
  setCurrentDate,
}) {
  const handlePrev = () => {
    const newDate = new Date(currentDate);
    if (mode === "month") newDate.setMonth(currentDate.getMonth() - 1);
    if (mode === "week") newDate.setDate(currentDate.getDate() - 7);
    if (mode === "day") newDate.setDate(currentDate.getDate() - 1);
    setCurrentDate(newDate);
  };

  const handleNext = () => {
    const newDate = new Date(currentDate);
    if (mode === "month") newDate.setMonth(currentDate.getMonth() + 1);
    if (mode === "week") newDate.setDate(currentDate.getDate() + 7);
    if (mode === "day") newDate.setDate(currentDate.getDate() + 1);
    setCurrentDate(newDate);
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center gap-2 p-3 bg-white shadow border-b">
      <div className="flex items-center gap-2">
        <button onClick={handlePrev} className="p-2 rounded hover:bg-gray-100">
          <ChevronLeft />
        </button>
        <h2 className="text-lg sm:text-xl font-semibold">
          {currentDate.toLocaleString("default", {
            month: "long",
          })}{" "}
          {currentDate.getFullYear()}
        </h2>
        <button onClick={handleNext} className="p-2 rounded hover:bg-gray-100">
          <ChevronRight />
        </button>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => setMode("month")}
          className={`px-3 py-1 rounded text-sm sm:text-base ${
            mode === "month"
              ? "bg-blue-600 text-white"
              : "bg-gray-100 hover:bg-blue-100"
          }`}
        >
          Month
        </button>
        <button
          onClick={() => setMode("week")}
          className={`px-3 py-1 rounded text-sm sm:text-base ${
            mode === "week"
              ? "bg-blue-600 text-white"
              : "bg-gray-100 hover:bg-blue-100"
          }`}
        >
          Week
        </button>
        <button
          onClick={() => setMode("day")}
          className={`px-3 py-1 rounded text-sm sm:text-base ${
            mode === "day"
              ? "bg-blue-600 text-white"
              : "bg-gray-100 hover:bg-blue-100"
          }`}
        >
          Day
        </button>
      </div>
    </div>
  );
}
