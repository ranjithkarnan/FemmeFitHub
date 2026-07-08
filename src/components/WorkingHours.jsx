import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';

const weeklyHours = [
  {
    label: 'Monday - Saturday',
    days: [1, 2, 3, 4, 5, 6],
    openMinutes: 6 * 60,
    closeMinutes: 20 * 60 + 30,
    display: '6:00 AM - 8:30 PM'
  },
  {
    label: 'Sunday',
    days: [0],
    openMinutes: 14 * 60,
    closeMinutes: 20 * 60,
    display: '2:00 PM - 8:00 PM'
  }
];

const formatTime = (minutes) => {
  const hour24 = Math.floor(minutes / 60);
  const minute = minutes % 60;
  const period = hour24 >= 12 ? 'PM' : 'AM';
  const hour12 = hour24 % 12 || 12;

  return `${hour12}:${String(minute).padStart(2, '0')} ${period}`;
};

const getHoursForDay = (day) => weeklyHours.find((item) => item.days.includes(day));

const getOpenStatus = (date) => {
  const day = date.getDay();
  const currentMinutes = date.getHours() * 60 + date.getMinutes();
  const todayHours = getHoursForDay(day);

  if (
    todayHours &&
    currentMinutes >= todayHours.openMinutes &&
    currentMinutes < todayHours.closeMinutes
  ) {
    return {
      isOpen: true,
      label: 'Open Now'
    };
  }

  if (todayHours && currentMinutes < todayHours.openMinutes) {
    return {
      isOpen: false,
      label: `Closed - Opens at ${formatTime(todayHours.openMinutes)}`
    };
  }

  const tomorrow = (day + 1) % 7;
  const nextHours = getHoursForDay(tomorrow);

  return {
    isOpen: false,
    label: `Closed - Opens at ${formatTime(nextHours.openMinutes)}`
  };
};

function WorkingHours({ variant = 'default' }) {
  const [now, setNow] = useState(() => new Date());
  const status = useMemo(() => getOpenStatus(now), [now]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setNow(new Date());
    }, 60000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <motion.aside
      className={`working-hours-card working-hours-card--${variant}`}
      aria-label="Femme Fit Hub working hours"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
    >
      <h3>Working Hours</h3>
      <p className={`working-hours-status ${status.isOpen ? 'is-open' : 'is-closed'}`}>
        <span aria-hidden="true" />
        {status.label}
      </p>

      <dl className="working-hours-list" aria-label="Weekly opening hours">
        {weeklyHours.map((item) => (
          <div key={item.label}>
            <span className="working-hours-check" aria-hidden="true">&#10003;</span>
            <dt>{item.label}</dt>
            <dd>{item.display}</dd>
          </div>
        ))}
      </dl>
    </motion.aside>

    
  );
}

export default WorkingHours;
