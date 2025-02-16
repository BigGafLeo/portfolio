import React from 'react';
import styled from 'styled-components';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { getDaysInMonth, getMonthName } from '../../../utils/calendarUtils';

interface MonthCalendarProps {
  currentDate: Date;
  setCurrentDate: (date: Date) => void;
  selectedDay: number | null;
  setSelectedDay: (day: number | null) => void;
}

export const MonthCalendar: React.FC<MonthCalendarProps> = ({
  currentDate,
  setCurrentDate,
  selectedDay,
  setSelectedDay,
}) => {
  // Obsługa zmiany miesiąca
  const handleMonthChange = (increment: number) => {
    setCurrentDate(
      new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + increment,
        1,
      ),
    );
    setSelectedDay(null); // Reset wyboru dnia po zmianie miesiąca
  };

  const { daysInMonth, prevMonthDays, nextMonthDays } =
    getDaysInMonth(currentDate);
  const monthName = getMonthName(currentDate);

  return (
    <CalendarSection>
      <CalendarHeader>
        <ArrowButton onClick={() => handleMonthChange(-1)}>
          <FaChevronLeft />
        </ArrowButton>
        <MonthTitle>
          {monthName} {currentDate.getFullYear()}
        </MonthTitle>
        <ArrowButton onClick={() => handleMonthChange(1)}>
          <FaChevronRight />
        </ArrowButton>
      </CalendarHeader>

      <WeekDays>
        <span>Mon</span> <span>Tue</span> <span>Wed</span>
        <span>Thu</span> <span>Fri</span> <span>Sat</span> <span>Sun</span>
      </WeekDays>

      <MonthGrid>
        {prevMonthDays.map((day, index) => (
          <Day key={`prev-${index}`} isInactive>
            {day}
          </Day>
        ))}
        {daysInMonth.map((day) => (
          <Day
            key={day}
            isSelected={selectedDay === day}
            onClick={() => setSelectedDay(day)}
          >
            {day}
          </Day>
        ))}
        {nextMonthDays.map((day, index) => (
          <Day key={`next-${index}`} isInactive>
            {day}
          </Day>
        ))}
      </MonthGrid>
    </CalendarSection>
  );
};

// 📌 **Stylizacja**
const CalendarSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.medium};
`;

const CalendarHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.medium};
`;

const MonthTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.medium};
`;

const ArrowButton = styled.button`
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
`;

const WeekDays = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-weight: bold;
  margin-bottom: ${({ theme }) => theme.spacing.small};
`;

const MonthGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: ${({ theme }) => theme.spacing.small};
`;

const Day = styled.div<{ isSelected?: boolean; isInactive?: boolean }>`
  padding: 10px;
  border-radius: ${({ theme }) => theme.borderRadiuses.s};
  text-align: center;
  cursor: ${({ isInactive }) => (isInactive ? 'default' : 'pointer')};
  background-color: ${({ isSelected, theme }) =>
    isSelected ? theme.palette.secretGarden : 'transparent'};
  color: ${({ isInactive, theme }) =>
    isInactive ? theme.palette.comet : theme.palette.bigstone};
`;
