import { formatDate, formatTime } from "../utils/dateUtils";


export default function DayView({currentDate,events}){
  const datestr=formatDate(currentDate);
  console.log(`datestr:${datestr}`);
  const dayEvents=events.filter(e=>e.date===datestr);

  return(
       <div className="text-3xl font-semibold">

        <h2 className="text-lg font-semibold mb-4">{currentDate.toDateString()}</h2>

        <div className="grid grid-cols-1 divide-y">
          {Array.from({length:24},(_,i)=>
          <div   key={i} className="h-16 relative"> 
          {/* <hr/> */}
           <span className="absolute left-0 top-0 text-xs">{formatTime(i)}</span>
             {dayEvents.filter(e => parseInt( e.time && e.time.split(":")[0]) === i).map(e => (
              <div key={e.id} className="absolute left-12 top-1 bg-purple-200 px-2 py-1 rounded text-sm">
                {e.title}  </div>))}
            
            </div>

          )}

        </div>
       </div>
 
  )
}








