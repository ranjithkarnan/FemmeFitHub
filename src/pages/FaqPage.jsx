import React, { useState } from 'react';
import { ChevronDown, MessageCircle, Sparkles } from 'lucide-react';
import SEO from '../components/SEO.jsx';
import { quickWhatsAppUrl } from '../utils/whatsapp.js';
import { useContactModal } from '../context/ContactModalContext.jsx';

const categories = ['Membership', 'Training', 'Facilities', 'Nutrition', 'Women Only', 'Payments'];

const faqs = [

  {
    category: 'Membership',
    question: 'What are the membership options at Femme Fit Hub?',
    answer: 'Femme Fit Hub offers monthly, quarterly, half-yearly, yearly, and personal training membership options for women with different goals and schedules.'
  },
  {
    category: 'Membership',
    question: 'How can I check Valasaravakkam gym membership fees?',
    answer: 'You can contact our team or book a free consultation to understand current Valasaravakkam gym membership fees and the plan best suited for your goal.'
  },
  {
    category: 'Training',
    question: 'Which is the best ladies gym in Valasaravakkam for beginners?',
    answer: 'Femme Fit Hub is designed for beginners with women-only coaching, guided workouts, clean facilities, and supportive trainers in Valasaravakkam.'
  },
  {
    category: 'Training',
    question: 'Does Femme Fit Hub offer weight loss training for women?',
    answer: 'Yes. Femme Fit Hub offers weight loss training for women with strength workouts, cardio, nutrition guidance, progress tracking, and trainer support.'
  },
  {
    category: 'Training',
    question: 'Are personal training sessions available?',
    answer: 'Yes. Personal training sessions are available for women who want one-on-one coaching and customized workout recommendations.'
  },
  {
    category: 'Nutrition',
    question: 'Does Femme Fit Hub provide nutrition guidance?',
    answer: 'Yes. Members can receive practical nutrition guidance that supports weight management, strength, wellness, and active lifestyles.'
  },
  {
    category: 'Women Only',
    question: 'Can I join a women-only gym without previous workout experience?',
    answer: 'Yes. You can join without previous gym experience. Trainers guide members from beginner to advanced levels based on comfort and ability.'
  },
  {
    category: 'Membership',
    question: 'Can I book a free trial class?',
    answer: 'Yes. You can book a free trial class through the contact page or WhatsApp to experience the studio before choosing a plan.'
  },
  {
    category: 'Membership',
    question: 'What membership durations are available at Femme Fit Hub?',
    answer: 'Members can choose from flexible monthly, quarterly, half-yearly, and yearly fitness plans based on their goals and schedules.'
  },
  {
    category: 'Membership',
    question: 'Can I upgrade my plan later if my fitness goals change?',
    answer: 'Yes. Memberships can be upgraded to include additional classes, personal coaching, or specialized programs whenever required.'
  },
  {
    category: 'Membership',
    question: 'Is there a consultation before selecting a package?',
    answer: 'Yes. Every new member can speak with our team to identify the most suitable training pathway before enrollment.'
  },
  {
    category: 'Membership',
    question: 'Are there special programs for working professionals?',
    answer: 'Yes. Flexible schedules and multiple batch timings are available to accommodate busy work routines.'
  },
  {
    category: 'Training',
    question: 'What types of workouts are offered at Femme Fit Hub?',
    answer: 'Our studio provides strength training, weight management programs, cross fit, functional fitness, cardio sessions, personal coaching, and wellness-focused routines.'
  },
  {
    category: 'Training',
    question: 'Do trainers create personalized workout recommendations?',
    answer: 'Yes. Programs are tailored based on current fitness levels, lifestyle, and long-term objectives.'
  },
  {
    category: 'Training',
    question: 'Is previous gym experience required before joining?',
    answer: 'No. Members from beginner to advanced levels receive guidance suitable for their experience and comfort level.'
  },
  {
    category: 'Training',
    question: 'Can fitness programs support post-pregnancy recovery?',
    answer: 'Yes. Safe and structured training options are available for women returning to exercise after childbirth.'
  },
  {
    category: 'Facilities',
    question: 'What makes Femme Fit Hub different from a traditional gym?',
    answer: 'Femme Fit Hub focuses exclusively on women\'s fitness with a supportive atmosphere, expert guidance, modern equipment, and community-driven motivation.'
  },
  {
    category: 'Facilities',
    question: 'Is parking available near the studio?',
    answer: 'Yes. Convenient parking options are available for members visiting the facility.'
  },
  {
    category: 'Facilities',
    question: 'How often are workout areas sanitized?',
    answer: 'The studio follows regular cleaning and hygiene practices to maintain a safe and comfortable environment.'
  },
  {
    category: 'Facilities',
    question: 'Does the facility provide uninterrupted workout access during power outages?',
    answer: 'Yes. Electrical backup systems help ensure sessions continue without major interruptions.'
  },
  {
    category: 'Nutrition',
    question: 'Can members receive nutritional guidance alongside training?',
    answer: 'Yes. Fitness coaching is supported by practical nutrition recommendations that align with individual goals.'
  },
  {
    category: 'Nutrition',
    question: 'Are meal suggestions customized for different objectives?',
    answer: 'Yes. Guidance can be adjusted for weight management, muscle development, general wellness, and active lifestyles.'
  },
  {
    category: 'Nutrition',
    question: 'Do you promote restrictive crash diets?',
    answer: 'No. We encourage sustainable eating habits that support long-term health and consistent fitness progress.'
  },
  {
    category: 'Nutrition',
    question: 'How important is nutrition in achieving fitness results?',
    answer: 'Nutrition plays a significant role in energy levels, recovery, body composition, and overall performance.'
  },
  {
    category: 'Women Only',
    question: 'Why choose a women-only fitness studio?',
    answer: 'Many women feel more comfortable, focused, and confident exercising in an environment designed specifically for them.'
  },
  {
    category: 'Women Only',
    question: 'Is the coaching team experienced in women\'s fitness needs?',
    answer: 'Yes. Programs are structured with consideration for different life stages, fitness backgrounds, and wellness goals.'
  },
  {
    category: 'Women Only',
    question: 'Can members train comfortably without feeling intimidated?',
    answer: 'Absolutely. The studio culture is designed to be welcoming, encouraging, and supportive for every member.'
  },
  {
    category: 'Women Only',
    question: 'Is privacy prioritized throughout the training experience?',
    answer: 'Yes. Creating a comfortable and secure atmosphere is one of the core values of Femme Fit Hub.'
  },
  {
    category: 'Payments',
    question: 'Which payment methods are accepted?',
    answer: 'Members can complete payments using UPI, bank transfer, cash, and other supported methods.'
  },
  {
    category: 'Payments',
    question: 'Are payment reminders provided before renewal dates?',
    answer: 'Yes. Members can receive reminders before their membership period expires.'
  },
  {
    category: 'Payments',
    question: 'Can membership fees be paid for longer durations in advance?',
    answer: 'Yes. Quarterly, half-yearly, and yearly options are available for members who prefer long-term enrollment.'
  },
  {
    category: 'Payments',
    question: 'Will invoices or receipts be provided after payment?',
    answer: 'Yes. Payment confirmations and invoices are provided for membership transactions.'
  }
];

function FaqPage() {
  const [activeCategory, setActiveCategory] = useState('Membership');
  const [openIndex, setOpenIndex] = useState(0);
  const { openContactModal } = useContactModal();
  const visibleFaqs = faqs.filter((faq) => faq.category === activeCategory);

  const changeCategory = (category) => {
    setActiveCategory(category);
    setOpenIndex(0);
  };

  return (
    <>
      <SEO
        title="FAQ | Femme Fit Hub Ladies Gym Chennai"
        description="Frequently asked questions about memberships, trainers, weight loss programs, nutrition guidance, facilities, and women-only fitness training at Femme Fit Hub Chennai."
        keywords="Ladies Gym Chennai, Women Only Gym Chennai, Fitness FAQ Chennai, Weight Loss Training Chennai, Women Fitness Center Chennai"
      />

      <section className="page-hero faq-page-hero">
        <div className="container">
          <div className="section-kicker">Frequently Asked Questions</div>
          <h1>Everything You Need To Know Before Joining</h1>
          <p>
            Answers to the most common questions about memberships, classes, trainers,
            nutrition, facilities, and women-only fitness programs at Femme Fit Hub.
          </p>
        </div>
      </section>

      <section className="section faq-page-section">
        <div className="container faq-page-layout">
          <aside className="faq-category-panel" aria-label="FAQ categories">
            <span className="section-kicker">FAQ Categories</span>
            <div className="faq-category-list">
              {categories.map((category) => (
                <button
                  type="button"
                  className={activeCategory === category ? 'active' : ''}
                  onClick={() => changeCategory(category)}
                  key={category}
                >
                  {category}
                </button>
              ))}
            </div>
          </aside>

          <div className="faq-page-card" itemScope itemType="https://schema.org/FAQPage">
            <div className="faq-page-heading">
              <span>{activeCategory}</span>
              <h2>{activeCategory} Questions</h2>
            </div>

            <div className="faq-page-list">
              {visibleFaqs.map((faq, index) => {
                const isOpen = openIndex === index;
                const answerId = `faq-page-answer-${activeCategory}-${index}`.replace(/\s+/g, '-').toLowerCase();

                return (
                  <article
                    className={`faq-page-item ${isOpen ? 'is-open' : ''}`}
                    itemScope
                    itemProp="mainEntity"
                    itemType="https://schema.org/Question"
                    key={faq.question}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? -1 : index)}
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                      itemProp="name"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown size={20} />
                    </button>
                    <div
                      id={answerId}
                      className="faq-page-answer"
                      itemScope
                      itemProp="acceptedAnswer"
                      itemType="https://schema.org/Answer"
                    >
                      <p itemProp="text">{faq.answer}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section faq-bottom-cta-section">
        <div className="container">
          <div className="faq-bottom-cta">
            <span className="section-kicker">Still Have Questions?</span>
            <h2>Need help choosing the right membership plan?</h2>
            <p>Talk to our team and we will guide you based on your goal, schedule, comfort level, and fitness experience.</p>
            <div className="faq-bottom-actions">
              <a className="btn btn-primary" href={quickWhatsAppUrl} target="_blank" rel="noreferrer">
                <MessageCircle size={18} /> WhatsApp Us
              </a>
              <button className="btn btn-soft" type="button" onClick={openContactModal}>
                <Sparkles size={18} /> Book Free Trial
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FaqPage;

