import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  CalendarContainer,
  DateDisplay,
  CalendarGrid,
  StatsContainer,
  ButtonGroup,
  NavButton,
} from "../styles/AttendanceStyles";
import Footer from '../shared/components/Footer';

const Attendance = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [stats, setStats] = useState({ correct: 0, incorrect: 0 });

  useEffect(() => {
    if (selectedDate.toDateString() === new Date().toDateString()) {
      setStats({ correct: 5, incorrect: 7 });
    } else {
      setStats({ correct: 0, incorrect: 0 });
    }
  }, [selectedDate]);

  const handleDateClick = (day) => {
    const newDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      day
    );
    setSelectedDate(newDate);
  };

  const renderCalendar = () => {
    const daysInMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0
    ).getDate();
    const firstDayIndex = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
    ).getDay();

    const calendarDays = [];
    for (let i = 0; i < firstDayIndex; i++) {
      calendarDays.push(<div key={`empty-${i}`} />);
    }
    for (let day = 1; day <= daysInMonth; day++) {
      const isToday =
        day === new Date().getDate() &&
        currentDate.getMonth() === new Date().getMonth() &&
        currentDate.getFullYear() === new Date().getFullYear();
      const isSelected =
        day === selectedDate.getDate() &&
        currentDate.getMonth() === selectedDate.getMonth() &&
        currentDate.getFullYear() === selectedDate.getFullYear();

      calendarDays.push(
        <button
          key={day}
          onClick={() => handleDateClick(day)}
          className={`${isToday ? "today" : ""} ${
            isSelected ? "selected" : ""
          }`}
        >
          {day}
        </button>
      );
    }
    return calendarDays;
  };

  return (
    <CalendarContainer>
      <DateDisplay>
        <button onClick={() => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)))}>
          &lt;
        </button>
        <span>
          {currentDate.toLocaleString("default", { month: "long" })}{" "}
          {currentDate.getFullYear()}
        </span>
        <button onClick={() => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)))}>
          &gt;
        </button>
      </DateDisplay>
      <CalendarGrid>{renderCalendar()}</CalendarGrid>
      <Footer/>
    </CalendarContainer>
  );
};

export default Attendance;
