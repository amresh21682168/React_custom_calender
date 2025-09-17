export function getMonthDays(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

export function getWeekDates(date) {
  console.log(`currentdate:${date}`);
  const start = new Date(date);
  console.log(`start:${start}`);
  const day = start.getDay();
  console.log(`day:${day}`);
  const diff = start.getDate() - day + (day === 0 ? -6 : 1); 
   console.log(`diff:${diff}`);
  const weekStart = new Date(start.setDate(diff));
  console.log(`weekStart:${weekStart}`);
  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date(weekStart);
    console.log(`d:${d}`);
    d.setDate(weekStart.getDate() + i);
    return d;
  });
}

// export function formatDate(date) {
//   return date.toISOString().split("T")[0];
// }

export function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}


export function formatTime(hour) {
  return `${hour.toString().padStart(2, "0")}:00`;
}
