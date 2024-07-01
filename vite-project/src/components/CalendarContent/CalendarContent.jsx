import React from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { ru } from 'date-fns/locale';
import { GlobalCalendarStyles } from "../../global.styled";

function CalendarContent({ selected, setSelected }) {
  return (
    <>
      <GlobalCalendarStyles />
      <DayPicker
          mode="single"
          selected={selected}
          onSelect={setSelected}
          locale={ru}
        />
    </>
  );
}

export default CalendarContent;