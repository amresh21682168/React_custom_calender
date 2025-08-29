import React from 'react'
import CalenderHeader from './components/CalendarHeader';
import MonthView from './components/MonthView';
import {useState} from 'react';
import WeekView from './components/WeekView'; 
import DayView from './components/DayView';
import EventModal from './components/EventModal';
import EventSidebar from './components/EventSidebar';

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
const defaultDate=currentDate.toISOString().split("T")[0];
const title="this is event sidebar"






  return (
   <>

   <CalenderHeader mode={mode} setMode={setMode} currentDate={currentDate} setCurrentDate={setCurrentDate} />
   {mode==="month" ? <MonthView currentDate={currentDate} events={events} onDayClick={handleDayClick}/>:
   mode==="week"?<WeekView currentDate={currentDate} events={events} onDayClick={handleDayClick}/>:
   mode==="day"?<DayView currentDate={currentDate} events={events}/>:(
  <h2>some error</h2>
)} 
  
         
   {/* <EventModal defaultDate={defaultDate}/>    */}
   {/* <EventSidebar events={events} title={title}/> */}
     
   </>
  )
}

export default App