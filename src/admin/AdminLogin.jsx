import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, LockKeyhole, Mail, ShieldCheck, Sparkles } from 'lucide-react';
import loginVisual from '../assets/images/GymEquipment-960.webp';
import './admin.css';

const ADMIN_EMAIL = 'admin@femmefithub.com';
const ADMIN_PASSWORD = 'femme123';

function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();

    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      window.localStorage.setItem('ffhAdminLoggedIn', 'true');
      navigate('/admin/dashboard');
    } else {
      setError('Invalid admin credentials.');
    }
  };

  return (
    <main className="admin-login-page">
      <div className="admin-login-orb orb-one" />
      <div className="admin-login-orb orb-two" />

      <section className="admin-login-shell">
        <form className="admin-login-card" onSubmit={handleLogin}>
          <div className="admin-login-brand">
            <div className="admin-login-icon">
              <ShieldCheck size={30} />
            </div>
            <div>
              <span>FEMME FIT HUB</span>
              <strong>Gym Management</strong>
            </div>
          </div>

          <div className="admin-login-copy">
            <h1>Log in</h1>
            <p>Manage enquiries, challenges, trainers, and membership insights.</p>
          </div>

          <label>
            <span className="sr-admin-label">Email</span>
            <div className="admin-input-wrap">
              <Mail size={18} />
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="admin@femmefithub.com"
                required
              />
            </div>
          </label>

          <label>
            <span className="sr-admin-label">Password</span>
            <div className="admin-input-wrap">
              <LockKeyhole size={18} />
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="femme123"
                required
              />
              <button
                className="admin-password-toggle"
                type="button"
                onClick={() => setShowPassword((value) => !value)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </label>

          {error && <div className="admin-error" role="alert">{error}</div>}

          <div className="admin-login-options">
            <label>
              <input type="checkbox" defaultChecked />
              <span>Keep me logged in</span>
            </label>
            <a href="#demo-credentials">Forgot password?</a>
          </div>

          <button className="admin-login-submit" type="submit">
            Log in <Sparkles size={18} />
          </button>

          <details className="demo-credentials" id="demo-credentials">
            <summary>View demo credentials</summary>
            <span>Email: admin@femmefithub.com</span>
            <span>Password: femme123</span>
          </details>
        </form>

        <aside className="admin-login-panel" aria-label="Admin portal visual">
          <img
            src={loginVisual}
            alt="Woman training with dumbbells"
            width="853"
            height="640"
            loading="lazy"
            decoding="async"
          />
          <div className="admin-login-visual-copy">
            <span>Studio Intelligence</span>
            <h2>Track leads, classes, and member momentum beautifully.</h2>
          </div>
        </aside>
      </section>
    </main>
  );
}

export default AdminLogin;
