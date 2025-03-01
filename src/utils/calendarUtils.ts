export const getDaysInMonth = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth();

  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);

  const numDays = lastDayOfMonth.getDate();
  const startWeekdayIndex = getWeekdayIndex(firstDayOfMonth); // 0-6 (Mon-Sun)
  const fullDays = [0];

  const daysInMonth = Array.from({ length: numDays }, (_, i) => ({
    day: i + 1,
    isFull: fullDays.includes(i + 1),
  }));

  const prevMonthDays = [];
  if (startWeekdayIndex > 0) {
    const prevMonthLastDay = new Date(year, month, 0).getDate();
    for (let i = startWeekdayIndex - 1; i >= 0; i--) {
      prevMonthDays.push(prevMonthLastDay - i);
    }
  }

  const totalDays = prevMonthDays.length + daysInMonth.length;
  const nextMonthDays = [];
  const remainingDays = totalDays % 7 ? 7 - (totalDays % 7) : 0;

  for (let i = 1; i <= remainingDays; i++) {
    nextMonthDays.push(i);
  }

  return { daysInMonth, prevMonthDays, nextMonthDays };
};

export const getMonthName = (date: Date) => {
  return date.toLocaleString('en-US', { month: 'long' });
};

export const getWeekdayIndex = (date: Date) => {
  return (date.getDay() + 6) % 7;
};

export const getFirstDayOfMonth = (date: Date): number => {
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();

  return firstDay === 0 ? 6 : firstDay - 1;
};
