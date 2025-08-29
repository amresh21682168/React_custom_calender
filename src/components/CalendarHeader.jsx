import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CalendarHeader({
  mode,
  setMode,
  currentDate,
  setCurrentDate,
}) {
  console.log(`currentDate:${currentDate}`);

  const handlePrev = () => {
    const newDate = new Date(currentDate);

    if (mode === "month") newDate.setMonth(currentDate.getMonth() - 1);
    if (mode === "week") newDate.setDate(currentDate.getDate() - 7);
    if (mode == "day") newDate.setDate(currentDate.getDate() - 1);
    setCurrentDate(newDate);
  };

  const handleNext = () => {
    const newDate = new Date(currentDate);

    if (mode === "month") newDate.setMonth(currentDate.getMonth() + 1);
    if (mode === "week") newDate.setDate(currentDate.getDate() + 7);
    if (mode == "day") newDate.setDate(currentDate.getDate() + 1);
    setCurrentDate(newDate);
  };
  return (
    <div className="flex justify-between items-center p-4 bg-gray-100 shadow">
      <div className="flex items-center gap-2">
        <button onClick={handlePrev}>
          <ChevronLeft />
        </button>
        <h2 className="text-xl font-semibold">
          {currentDate === undefined
            ? "25 september 2025"
            : `${currentDate.toLocaleString("default", {
                month: "long",
              })} ${currentDate.getFullYear()}`}
        </h2>
        <button onClick={handleNext}>
          <ChevronRight />
        </button>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => setMode("month")}
          className="px-3 py-1 bg-white rounded shadow hover:bg-amber-500"
        >
          Month
        </button>
        <button
          onClick={() => setMode("week")}
          className="px-3 py-1 bg-white rounded shadow  hover:bg-amber-500"
        >
          Week
        </button>
        <button
          onClick={() => setMode("day")}
          className="px-3 py-1 bg-white rounded shadow  hover:bg-amber-500"
        >
          Day
        </button>
      </div>
    </div>
  );
}
