import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  CalendarDays,
  CreditCard,
  LayoutDashboard,
  LogOut,
  MessageSquare,
  Settings,
  Trophy,
  Users
} from 'lucide-react';
import {
  getActiveChallenge,
  resetActiveChallenge,
  saveActiveChallenge
} from '../utils/challengeStorage';
import { getCountdownLabel, getVisibleChallenges } from '../data/challenges.js';
import './admin.css';

const today = new Intl.DateTimeFormat('en-IN', {
  day: 'numeric',
  month: 'short',
  year: 'numeric'
}).format(new Date());

const overviewCards = [
  { label: 'Website Visitors', value: '2,480', trend: '+12% this week', icon: LayoutDashboard },
  { label: 'New Enquiries', value: '38', trend: '+8 new today', icon: MessageSquare },
  { label: 'Trial Bookings', value: '24', trend: '+6 this week', icon: CalendarDays },
  { label: 'Membership Requests', value: '16', trend: '+4 pending', icon: CreditCard },
  { label: 'Active Challenges', value: '2', trend: 'Live now', icon: Trophy },
  { label: 'Trainers', value: '4', trend: 'All available', icon: Users }
];

const leadBars = [
  { label: 'WhatsApp Leads', value: 38, max: 40 },
  { label: 'Trial Bookings', value: 24, max: 40 },
  { label: 'Membership Requests', value: 16, max: 40 },
  { label: 'Follow-ups', value: 9, max: 40 }
];

const goalInterest = [
  { label: 'Weight Loss', value: 45 },
  { label: 'Strength', value: 30 },
  { label: 'Yoga', value: 15 },
  { label: 'Postnatal', value: 10 }
];

const enquiries = [
  { name: 'Priya Sharma', phone: '9876543210', goal: 'Weight Loss Training', status: 'New', date: 'Today' },
  { name: 'Ritika Rao', phone: '9876501234', goal: 'Strength Training', status: 'Contacted', date: 'Yesterday' },
  { name: 'Ananya Sen', phone: '9876512345', goal: 'Postnatal Fitness', status: 'Follow-up', date: 'May 29' },
  { name: 'Kavya Menon', phone: '9876567890', goal: 'Yoga', status: 'New', date: 'Today' }
];

const plans = [
  { name: 'Basic Plan', interested: 42 },
  { name: 'Standard Plan', interested: 68, recommended: true },
  { name: 'Premium Plan', interested: 24 }
];

const trainers = [
  { name: 'Aarohi', role: 'Strength Coach', availability: 'Available' },
  { name: 'Nisha', role: 'Zumba Specialist', availability: 'Limited Slots' },
  { name: 'Meera', role: 'Yoga Coach', availability: 'Morning' },
  { name: 'Samaira', role: 'Nutrition Coach', availability: 'Weekend' }
];

const settingsPreview = [
  ['WhatsApp Number', '+91 8220138783'],
  ['Business Email', 'hello@femmefithub.com'],
  ['Challenge Notification', 'Enabled'],
  ['Auto Reply Suggestion', 'Enabled']
];

const menuItems = [
  { label: 'Overview', href: '#overview', icon: LayoutDashboard },
  { label: 'Enquiries', href: '#enquiries', icon: MessageSquare },
  { label: 'Membership', href: '#membership', icon: CreditCard },
  { label: 'Challenges', href: '#challenges', icon: Trophy },
  { label: 'Notification', href: '#challenge-manager', icon: Trophy },
  { label: 'Trainers', href: '#trainers', icon: Users },
  { label: 'Settings', href: '#settings', icon: Settings }
];

function AdminDashboard() {
  const navigate = useNavigate();
  const [challengeForm, setChallengeForm] = useState(() => getActiveChallenge());
  const [challengeMessage, setChallengeMessage] = useState('');
  const dashboardChallenges = [
    ...getVisibleChallenges('week'),
    ...getVisibleChallenges('month')
  ].slice(0, 4);

  const logout = () => {
    window.localStorage.removeItem('ffhAdminLoggedIn');
    navigate('/admin/login');
  };

  const handleChallengeChange = (event) => {
    const { name, value } = event.target;

    setChallengeForm((current) => ({
      ...current,
      [name]: value
    }));
  };

  const showChallengeMessage = () => {
    setChallengeMessage('Challenge notification updated successfully.');

    window.setTimeout(() => {
      setChallengeMessage('');
    }, 3000);
  };

  const handleChallengeSave = (event) => {
    event.preventDefault();
    saveActiveChallenge(challengeForm);
    showChallengeMessage();
  };

  const handleChallengeReset = () => {
    const defaultChallenge = resetActiveChallenge();
    setChallengeForm(defaultChallenge);
    showChallengeMessage();
  };

  return (
    <main className="admin-dashboard">
      <aside className="admin-sidebar">
        <div>
          <div className="admin-sidebar-brand">
            <span>FFH</span>
            <div>
              <strong>Femme Fit Hub</strong>
              <small>Admin Studio</small>
            </div>
          </div>

          <nav aria-label="Admin dashboard sections">
            {menuItems.map(({ label, href, icon: Icon }, index) => (
              <a className={index === 0 ? 'active' : ''} href={href} key={label}>
                <Icon size={18} /> {label}
              </a>
            ))}
          </nav>
        </div>

        <button className="admin-sidebar-logout" type="button" onClick={logout}>
          <LogOut size={18} /> Logout
        </button>
      </aside>

      <section className="admin-main">
        <header className="admin-topbar">
          <div>
            <span>Dashboard Overview</span>
            <h1>Track leads, member interest, challenges, and studio activity.</h1>
          </div>
          <div className="admin-topbar-actions">
            <time>{today}</time>
            <strong>Admin</strong>
            <button type="button" onClick={logout}>
              <LogOut size={18} /> Logout
            </button>
          </div>
        </header>

        <section id="overview" className="admin-overview-grid">
          {overviewCards.map(({ label, value, trend, icon: Icon }) => (
            <article className="admin-overview-card" key={label}>
              <div><Icon size={22} /></div>
              <span>{label}</span>
              <strong>{value}</strong>
              <small>{trend}</small>
            </article>
          ))}
        </section>

        <section className="admin-analytics-grid" aria-label="Analytics widgets">
          <article className="admin-panel">
            <div className="admin-panel-heading">
              <h2>Lead Overview</h2>
              <span>CSS chart</span>
            </div>
            <div className="admin-bar-chart">
              {leadBars.map((bar) => (
                <div key={bar.label}>
                  <span>{bar.label}</span>
                  <div><em style={{ width: `${(bar.value / bar.max) * 100}%` }} /></div>
                  <strong>{bar.value}</strong>
                </div>
              ))}
            </div>
          </article>

          <article className="admin-panel">
            <div className="admin-panel-heading">
              <h2>Goal Interest</h2>
              <span>Top goals</span>
            </div>
            <div className="admin-goal-bars">
              {goalInterest.map((goal) => (
                <div key={goal.label}>
                  <div>
                    <span>{goal.label}</span>
                    <strong>{goal.value}%</strong>
                  </div>
                  <div className="admin-progress"><span style={{ width: `${goal.value}%` }} /></div>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section className="admin-content-grid">
          <article id="enquiries" className="admin-panel admin-table-panel">
            <div className="admin-panel-heading">
              <h2>Recent Enquiries</h2>
              <span>Latest leads</span>
            </div>
            <div className="admin-table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Customer</th>
                    <th>Phone</th>
                    <th>Goal</th>
                    <th>Status</th>
                    <th>Date</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {enquiries.map((item) => (
                    <tr key={item.phone}>
                      <td><strong>{item.name}</strong></td>
                      <td>{item.phone}</td>
                      <td>{item.goal}</td>
                      <td><span className={`admin-status ${item.status.toLowerCase().replace('-', '')}`}>{item.status}</span></td>
                      <td>{item.date}</td>
                      <td><button className="admin-view-btn" type="button">View</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>

          <article id="challenges" className="admin-panel">
            <div className="admin-panel-heading">
              <h2>Upcoming Challenges</h2>
              <span>{dashboardChallenges.length} visible</span>
            </div>
            <div className="admin-challenge-list">
              {dashboardChallenges.map((challenge) => (
                <div className="admin-challenge-card" key={challenge.id}>
                  <span>{challenge.type}</span>
                  <h3>{challenge.name}</h3>
                  <small>{getCountdownLabel(challenge)}</small>
                  <div className="admin-progress"><span style={{ width: `${challenge.progress}%` }} /></div>
                  <strong>{challenge.progress}%</strong>
                </div>
              ))}
            </div>
          </article>

          <article id="membership" className="admin-panel">
            <div className="admin-panel-heading">
              <h2>Membership Summary</h2>
              <span>Plan interest</span>
            </div>
            <div className="admin-plan-list">
              {plans.map((plan) => (
                <div className={plan.recommended ? 'recommended' : ''} key={plan.name}>
                  <strong>{plan.name}</strong>
                  <span>{plan.interested} interested</span>
                  {plan.recommended && <em>Recommended</em>}
                </div>
              ))}
            </div>
          </article>

          <article id="challenge-manager" className="admin-panel admin-challenge-manager">
            <div className="admin-panel-heading">
              <h2>Challenge Notification Manager</h2>
              <span>Homepage banner</span>
            </div>

            <form className="admin-challenge-form" onSubmit={handleChallengeSave}>
              <label>
                <span>Challenge Title</span>
                <input
                  name="title"
                  type="text"
                  value={challengeForm.title}
                  onChange={handleChallengeChange}
                  required
                />
              </label>

              <label>
                <span>Type</span>
                <input
                  name="type"
                  type="text"
                  value={challengeForm.type}
                  onChange={handleChallengeChange}
                  required
                />
              </label>

              <label className="admin-challenge-form-wide">
                <span>Description</span>
                <textarea
                  name="description"
                  rows="4"
                  value={challengeForm.description}
                  onChange={handleChallengeChange}
                  required
                />
              </label>

              <label>
                <span>Days Left</span>
                <input
                  name="daysLeft"
                  type="text"
                  value={challengeForm.daysLeft}
                  onChange={handleChallengeChange}
                  required
                />
              </label>

              <label>
                <span>Reward</span>
                <input
                  name="reward"
                  type="text"
                  value={challengeForm.reward}
                  onChange={handleChallengeChange}
                  required
                />
              </label>

              <label>
                <span>Trainer</span>
                <input
                  name="trainer"
                  type="text"
                  value={challengeForm.trainer}
                  onChange={handleChallengeChange}
                  required
                />
              </label>

              <div className="admin-challenge-actions">
                <button className="admin-save-challenge" type="submit">Save Challenge</button>
                <button className="admin-reset-challenge" type="button" onClick={handleChallengeReset}>
                  Reset Default
                </button>
              </div>

              {challengeMessage && (
                <div className="admin-challenge-success" role="status">
                  {challengeMessage}
                </div>
              )}

              <p className="admin-demo-note">
                Demo mode: Changes are saved only in this browser. Connect Firebase/backend to update for all visitors.
              </p>
            </form>
          </article>

          <article id="trainers" className="admin-panel">
            <div className="admin-panel-heading">
              <h2>Trainer Management</h2>
              <span>Preview</span>
            </div>
            <div className="admin-trainer-grid">
              {trainers.map((trainer) => (
                <div className="admin-trainer-card" key={trainer.name}>
                  <div>{trainer.name.charAt(0)}</div>
                  <strong>{trainer.name}</strong>
                  <span>{trainer.role}</span>
                  <small>{trainer.availability}</small>
                </div>
              ))}
            </div>
          </article>

          <article id="settings" className="admin-panel admin-settings">
            <div className="admin-panel-heading">
              <h2>Settings Preview</h2>
              <span>Demo</span>
            </div>
            <div className="admin-settings-list">
              {settingsPreview.map(([label, value]) => (
                <div key={label}>
                  <span>{label}</span>
                  <strong>{value}</strong>
                </div>
              ))}
            </div>
          </article>
        </section>

        <footer className="admin-footer">
          Demo dashboard using mock data. Connect Firebase or backend for production.
        </footer>
      </section>
    </main>
  );
}

export default AdminDashboard;
