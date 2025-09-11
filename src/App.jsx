import React, { useEffect } from "react";
import CalenderHeader from "./components/CalendarHeader";
import MonthView from "./components/MonthView";
import { useState } from "react";
import WeekView from "./components/WeekView";
import DayView from "./components/DayView";
import EventModal from "./components/EventModal";
import EventSidebar from "./components/EventSidebar";
import { formatDate, getWeekDates } from "./utils/dateUtils";

const App = () => {
  const [mode, setMode] = useState("month");
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState(
    () => JSON.parse(localStorage.getItem("events")) || []
  );
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  const handleDayClick = (date) => {
    setCurrentDate(date);
    setMode("day");
  };

  const addEvent = (event) => {
    setEvents([...events, event]);
  };
  const monthEvents = events.filter(
    (e) => new Date(e.date).getMonth() === currentDate.getMonth()
  );
  const dayEvents = events.filter((e) => e.date === formatDate(currentDate));
  const weekEvents = events.filter((e) =>
    getWeekDates(currentDate).some((d) => formatDate(d) === e.date)
  );

  const defaultDate = currentDate.toISOString().split("T")[0];
  return (
    <div >
      <div className="h-screen flex flex-col  ">
        <CalenderHeader
          mode={mode}
          setMode={setMode}
          currentDate={currentDate}
          setCurrentDate={setCurrentDate}
        />
        <div className="flex flex-1">
          <div className="flex-1 overflow-y-auto">
            {mode === "month" && (
              <MonthView
                currentDate={currentDate}
                events={events}
                onDayClick={handleDayClick}
              />
            )}
            {mode === "week" && (
              <WeekView
                currentDate={currentDate}
                events={events}
                onDayClick={handleDayClick}
              />
            )}
            {mode === "day" && (
              <DayView currentDate={currentDate} events={events} />
            )}
          </div>
          {mode !== "day" && (
            <EventSidebar
              events={mode === "month" ? monthEvents : weekEvents}
              title={mode === "month" ? "Month Events" : "Week Events"}
            />
          )}
        </div>
        <button
          className="fixed bottom-6 right-20 bg-blue-600 text-white px-4 py-2 rounded-2xl shadow mb-2"
          onClick={() => setShowModal(true)}
        >
          
          {" "}
          +Add Events{" "}
        </button>
        
        <EventModal
          isOpen={showModal}
          defaultDate={formatDate(currentDate)}
          onClose={() => setShowModal(false)}
          onSave={addEvent}
        />
      </div>
    </div>
  );
};

export default App;
