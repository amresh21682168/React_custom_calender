import React from 'react'
import CalenderHeader from './components/CalendarHeader';
import MonthView from './components/MonthView';
import {useState} from 'react';
import WeekView from './components/WeekView'; 
import DayView from './components/DayView';

const App = () => {

  const [mode,setMode]=useState('month');
  const [currentDate,setCurrentDate]=useState(new Date());

  const handleDayClick = (date) => {
    setCurrentDate(date);
    // setMode("day");
  };

  let events=[
  { id: 1, title: "Meeting", date: "2025-08-25" },
  { id: 2, title: "Doctor", date: "2025-08-25" },
  { id: 3, title: "Gym", date: "2025-08-26" }

];







  return (
   <>
   <CalenderHeader mode={mode} setMode={setMode} currentDate={currentDate} setCurrentDate={setCurrentDate} />
   <MonthView currentDate={currentDate} events={events} onDayClick={handleDayClick} /> 
   <WeekView currentDate={currentDate} events={events} onDayClick={handleDayClick}/>
   <DayView currentDate={currentDate} events={events}/>            
   </>
  )
}

export default App