import React from 'react';
import styled from 'styled-components';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { getDaysInMonth, getMonthName } from '../../../utils/calendarUtils';
import { rgba } from 'polished';

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
  const handleMonthChange = (increment: number) => {
    setCurrentDate(
      new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + increment,
        1,
      ),
    );
    setSelectedDay(null);
  };

  const { daysInMonth, prevMonthDays, nextMonthDays } =
    getDaysInMonth(currentDate);

  const monthName = getMonthName(currentDate);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

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
          <Day key={`prev-${index}`} $isInactive>
            {day}
          </Day>
        ))}

        {daysInMonth.map(({ day, isFull }) => {
          const dateToCompare = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            day,
          );
          const isEarlier = dateToCompare < today;

          return (
            <Day
              key={day}
              $isFull={isFull}
              $isSelected={selectedDay === day}
              $earlier={isEarlier || undefined}
              onClick={() =>
                day === selectedDay
                  ? setSelectedDay(null)
                  : isEarlier || isFull
                    ? setSelectedDay(null)
                    : setSelectedDay(day)
              }
            >
              {day}
            </Day>
          );
        })}

        {nextMonthDays.map((day, index) => (
          <Day key={`next-${index}`} $isInactive>
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
  background: ${({ theme }) => theme.colors.background.element4};
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

const Day = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    !['isSelected', 'isInactive', 'earlier', 'isFull'].includes(prop),
})<{
  $isSelected?: boolean;
  $isInactive?: boolean;
  $earlier?: boolean;
  $isFull?: boolean;
}>`
  width: 40px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.borderRadiuses.s};
  text-align: center;
  cursor: ${({ $isInactive, $earlier }) =>
    $isInactive || $earlier ? 'default' : 'pointer'};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: ${({ $isSelected }) => ($isSelected ? 500 : 'normal')};
  line-height: 1;
  overflow: hidden;

  background-color: ${({
    $isSelected,
    theme,
    $isInactive,
    $earlier,
    $isFull,
  }) =>
    $isSelected
      ? theme.palette.secretGarden
      : $isInactive
        ? rgba(theme.colors.background.element1, 0.15)
        : $earlier
          ? rgba(theme.colors.background.element1, 0.3)
          : $isFull
            ? rgba(theme.colors.background.disabled, 0.7)
            : rgba(theme.colors.background.element1, 0.7)};

  color: ${({ $isInactive, theme, $isSelected, $earlier }) =>
    $isSelected
      ? theme.colors.text.light
      : $isInactive || $earlier
        ? theme.colors.text.lessDark
        : theme.colors.text.default};

  transform: ${({ $isSelected }) => ($isSelected ? 'scale(1.2)' : 'scale(1)')};
  transition:
    transform 0.1s ease-in-out,
    background-color 0.1s ease-in-out,
    font-weight 0.1s ease-in-out,
    color 0.1s ease-in-out;

  &:hover {
    ${({ $isInactive, $isSelected, theme, $earlier, $isFull }) =>
      !$isInactive &&
      !$isSelected &&
      !$earlier &&
      !$isFull &&
      `
        color: ${theme.colors.text.light};
        background-color: ${theme.colors.background.element3};
        transform: scale(1.1);
        font-weight: 550;
      `}
  }
`;
