import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: '500+', label: 'Active Members' },
  { value: '50+', label: 'Weekly Classes' },
  { value: '15+', label: 'Certified Trainers' },
  { value: '98%', label: 'Satisfaction Rate' }
];

function StatsDashboard() {
  return (
    <section className="section stats-section">
      <div className="container stats-panel">
        {stats.map((stat, index) => (
          <motion.article
            key={stat.label}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: index * 0.08 }}
          >
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default StatsDashboard;
