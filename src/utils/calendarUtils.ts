export const getDaysInMonth = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth();

  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);

  const numDays = lastDayOfMonth.getDate();
  const startWeekdayIndex = getWeekdayIndex(firstDayOfMonth); // 0-6 (Mon-Sun)

  const daysInMonth = Array.from({ length: numDays }, (_, i) => i + 1);

  // Dni poprzedniego miesiąca
  const prevMonthDays = [];
  if (startWeekdayIndex > 0) {
    const prevMonthLastDay = new Date(year, month, 0).getDate();
    for (let i = startWeekdayIndex - 1; i >= 0; i--) {
      prevMonthDays.push(prevMonthLastDay - i);
    }
  }

  // Dni następnego miesiąca (aby zapełnić 7xX siatkę)
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

  // W JavaScript getDay() zwraca:
  // 0 - niedziela, 1 - poniedziałek, ..., 6 - sobota
  // My chcemy układ poniedziałek (0) - niedziela (6), więc przesuwamy wartości
  return firstDay === 0 ? 6 : firstDay - 1;
};
