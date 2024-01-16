import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import "./Calendar.css";

function Calendar({ onModalShow }) {
  const events = [
    {
      title: "Title",
      start: "2024-01-08T09:10:00",
      end: "2024-01-08T11:10:00",
    },

    {
      title:
        "Rethinking multilingualism and the use of the L1 in English as a medium of instrc...",
      start: "2024-01-09T12:00:00",
      end: "2024-01-09T14:00:00",
    },
  ];

  const dayHeaderContent = (arg) => {
    if (arg.view.type === "day") {
      return arg.text;
    } else if (
      arg.view.type === "timeGridWeek" ||
      arg.view.type === "dayGridMonth"
    ) {
      const dayNumber = new Date(arg.date).getDate();
      const dayName = arg.view.calendar.formatDate(arg.date, {
        weekday: "short",
      });
      return `${dayName} ${dayNumber}`;
    } else {
      return arg.text;
    }
  };
  return (
    <div>
      <Fullcalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        customButtons={{
          modalButton: {
            text: "+ Add Manual",
            click: onModalShow,
          },
        }}
        headerToolbar={{
          start: "dayGridMonth,timeGridWeek,timeGridDay",
          center: "prev,title,next",
          end: "modalButton",
        }}
        buttonText={{
          dayGridMonth: "Monthly",
          timeGridWeek: "Weekly",
          timeGridDay: "Days",
        }}
        eventClassNames={"A"}
        height={"84vh"}
        events={events}
        views={{
          timeGridWeek: {
            titleFormat: { month: "long", year: "numeric" },
          },
          timeGridDay: {
            titleFormat: {
              day: "numeric",
              separator: " ",
              month: "long",
              year: "numeric",
            },
          },
        }}
        dayHeaderContent={dayHeaderContent}
      />
    </div>
  );
}

export default Calendar;
