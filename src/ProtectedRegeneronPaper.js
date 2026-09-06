import React, { useState, useEffect } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

const STORAGE_KEY = 'cibsrPaperUnlocked';
const PDF_PATH = encodeURI(
  '/other-assets/FINAL - Regeneron Research Paper - CIBSR 2024.docx.pdf'
);

const expectedPassword = process.env.REACT_APP_RESEARCH_PAPER_PASSWORD;

function ProtectedRegeneronPaper() {
  const [unlocked, setUnlocked] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY) === '1') {
      setUnlocked(true);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (!expectedPassword) {
      setError('Password is not configured for this deployment.');
      return;
    }
    if (password === expectedPassword) {
      sessionStorage.setItem(STORAGE_KEY, '1');
      setUnlocked(true);
    } else {
      setError('Incorrect password.');
      setPassword('');
    }
  };

  if (!expectedPassword) {
    return (
      <div className="App">
        <div className="booking-page-layout">
          <div className="subpage-header">protected document</div>
          <p className="subpage-text">
            This page needs a password to be set at build time. Add{' '}
            <code className="protected-paper-code">REACT_APP_RESEARCH_PAPER_PASSWORD</code> to{' '}
            <code className="protected-paper-code">.env.local</code> (local) or your host’s environment
            variables (production), then rebuild.
          </p>
          <Link to="/" className="subpage-back">&#8592;</Link>
        </div>
      </div>
    );
  }

  if (unlocked) {
    return (
      <div className="App">
        <div className="protected-paper-page">
          <div className="protected-paper-toolbar">
            <Link to="/" className="subpage-back protected-paper-back">&#8592;</Link>
            <a
              href={PDF_PATH}
              download
              className="subpage-text-link protected-paper-download"
            >
              download pdf
            </a>
          </div>
          <iframe
            title="Neuroscience Research Paper — Stanford CIBSR / Regeneron Science Talent Search"
            src={PDF_PATH}
            className="protected-paper-frame"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <div className="booking-page-layout">
        <div className="subpage-header">Examining brain structure in relation to
mood and anxiety in pubertal
transgender and cisgender youth</div>
        <p className="subpage-text booking-intro">
          Enter the password to view the full PDF of the research paper.
        </p>
        <form className="booking-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="paper-password">password</label>
            <input
              id="paper-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="booking-input"
              autoComplete="current-password"
              required
            />
          </div>
          {error ? <p className="protected-paper-error subpage-text">{error}</p> : null}
          <button type="submit" className="booking-submit">unlock</button>
        </form>
        <Link to="/" className="subpage-back">&#8592;</Link>
      </div>
    </div>
  );
}

export default ProtectedRegeneronPaper;
