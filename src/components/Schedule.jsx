import React from "react";
import { useMemo, useState } from "react";
import { useContactModal } from "../context/ContactModalContext.jsx";
import { trainers } from "../data/trainers.js";

const getTrainerName = (index) => trainers[index]?.name || "Femme Fit Hub Team";

const schedule = [
  {
    day: "Tuesday",
    type: "Group Class",
    sessions: [
      { label: "Morning", name: "Group Class", time: "7:30 AM" },
      { label: "Morning", name: "Group Class", time: "10:30 AM" },
      { label: "Evening", name: "Group Class", time: "5:30 PM" },
    ],
    trainer: getTrainerName(0),
  },
  {
    day: "Thursday",
    type: "Fitness Challenge",
    sessions: [
      { label: "Morning", name: "Fitness Challenge", time: "7:30 AM" },
      { label: "Evening", name: "Fitness Challenge", time: "5:30 PM" },
    ],
    trainer: getTrainerName(2),
  },
  {
    day: "Saturday",
    type: "Group Class",
    sessions: [
      { label: "Morning", name: "Group Class", time: "7:30 AM" },
      { label: "Morning", name: "Group Class", time: "10:30 AM" },
      { label: "Evening", name: "Group Class", time: "5:30 PM" },
    ],
    trainer: getTrainerName(3),
  },
];

function Schedule() {
  const [filter, setFilter] = useState("All");
  const filtered = useMemo(
    () =>
      filter === "All"
        ? schedule
        : schedule.filter((row) => row.type === filter),
    [filter],
  );
  const { openContactModal } = useContactModal();

  return (
    <section className="section schedule-section">
      <div className="container">
        <div className="section-header centered">
          <span className="section-kicker">Class Schedule</span>
          <h2>Find a Class That Fits Your Day</h2>
          <p>
            Join group classes and weekly fitness challenges designed around
            practical morning and evening timings.
          </p>
        </div>
        <div className="schedule-filters">
          {["All", "Group Class", "Fitness Challenge"].map((item) => (
            <button
              className={`schedule-filter ${filter === item ? "active" : ""}`}
              type="button"
              onClick={() => setFilter(item)}
              key={item}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="schedule-grid">
          {filtered.map((row) => (
            <article
              className={`schedule-card type-${row.type.toLowerCase().replace(/\s+/g, "-")}`}
              key={row.day}
            >
              <div className="schedule-card-header">
                <div>
                  <span className="schedule-day">{row.day}</span>
                  <h3>{row.type}</h3>
                </div>
                <span className="schedule-type">{row.type}</span>
              </div>

              <div className="schedule-sessions">
                {row.sessions.map((session) => (
                  <div className="session-block" key={`${row.day}-${session.label}-${session.time}`}>
                    <span className="session-label">{session.label}</span>
                    <strong>{session.name}</strong>
                    <small>{session.time}</small>
                  </div>
                ))}
              </div>

              <div className="schedule-footer">
                <span className="trainer-chip">Trainer: {row.trainer}</span>
                <button
                  type="button"
                  onClick={openContactModal}
                  className="schedule-book-btn"
                >
                  Book Class
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="schedule-help-card">
          <h3>Need help choosing your class?</h3>
          <p>
            Tell us your goal and availability. We'll recommend the right weekly
            rhythm.
          </p>
          <button
            type="button"
            onClick={openContactModal}
            className="schedule-book-btn"
          >
            Book Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
}

export default Schedule;
