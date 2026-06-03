import React from 'react';
import { useState } from 'react';
import { Minus, Plus } from 'lucide-react';

const faqs = [
  {
    question: 'Is Femme Fit Hub only for women?',
    answer: 'Yes. Our training floor, classes, and coaching experience are designed as a comfortable women-only fitness space.'
  },
  {
    question: 'Can beginners join group classes?',
    answer: 'Absolutely. Trainers provide beginner-friendly options and help you choose classes that match your current fitness level.'
  },
  {
    question: 'Do you provide diet plans?',
    answer: 'We provide nutrition guidance and sustainable meal structure. Premium members can request more personalized coaching.'
  },
  {
    question: 'Can I try a class before joining?',
    answer: 'Yes, you can book a consultation and trial session through the contact form or WhatsApp button.'
  }
];

function FAQ({ embedded = false }) {
  const [open, setOpen] = useState(0);

  const content = (
    <div id={embedded ? 'faq' : undefined} className="faq-panel landing-anchor">
      {!embedded && (
        <div className="section-heading">
          <div className="section-kicker">FAQ</div>
          <h2>Answers before you begin.</h2>
        </div>
      )}
      {embedded && (
        <div className="faq-panel-heading">
          <span className="section-kicker">FAQ</span>
          <h3>Answers before you begin.</h3>
        </div>
      )}
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <article className={`faq-item ${open === index ? 'is-open' : ''}`} key={faq.question}>
            <button type="button" onClick={() => setOpen(open === index ? -1 : index)}>
              {faq.question}
              {open === index ? <Minus /> : <Plus />}
            </button>
            <p>{faq.answer}</p>
          </article>
        ))}
      </div>
    </div>
  );

  if (embedded) {
    return content;
  }

  return (
    <section className="section">
      <div className="container narrow">
        {content}
      </div>
    </section>
  );
}

export default FAQ;
