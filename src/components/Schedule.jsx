import React from 'react';

const schedule = [
  ['Monday', 'Strength Basics', '7:00 AM', 'Zumba Burn', '6:30 PM'],
  ['Tuesday', 'Yoga Flow', '8:00 AM', 'Personal Training', '7:00 PM'],
  ['Wednesday', 'Cardio Fitness', '7:30 AM', 'Strength Sculpt', '6:00 PM'],
  ['Thursday', 'Postnatal Fitness', '10:00 AM', 'Yoga Restore', '7:30 PM'],
  ['Friday', 'HIIT Circuit', '7:00 AM', 'Zumba Party', '6:30 PM'],
  ['Saturday', 'Nutrition Clinic', '11:00 AM', 'Open Gym', '5:00 PM']
];

function Schedule() {
  return (
    <section className="section alt-section">
      <div className="container">
        <div className="section-heading">
          <div className="section-kicker">Schedule</div>
          <h2>Flexible timings for busy women with serious goals.</h2>
        </div>
        <div className="table-wrap">
          <table className="schedule-table">
            <thead>
              <tr>
                <th>Day</th>
                <th>Morning</th>
                <th>Time</th>
                <th>Evening</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {schedule.map((row) => (
                <tr key={row[0]}>
                  {row.map((cell) => <td key={cell}>{cell}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default Schedule;
