"use client";

import { useEffect, useState, useCallback } from "react";

const STORAGE_KEY = "obl_cookie_consent";

interface CookiePrefs {
  essential: true;
  analytics: boolean;
  marketing: boolean;
}

function loadPrefs(): CookiePrefs | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function savePrefs(prefs: CookiePrefs) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
  } catch { /* no-op */ }
}

export default function CookieBanner() {
  const [show, setShow]       = useState(false);
  const [modal, setModal]     = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const prefs = loadPrefs();
    if (!prefs) {
      setShow(true);
    } else {
      setAnalytics(prefs.analytics);
      setMarketing(prefs.marketing);
    }

    const handler = () => {
      const p = loadPrefs();
      if (p) { setAnalytics(p.analytics); setMarketing(p.marketing); }
      setModal(true);
    };
    window.addEventListener("openCookieSettings", handler);
    return () => window.removeEventListener("openCookieSettings", handler);
  }, []);

  const acceptAll = useCallback(() => {
    savePrefs({ essential: true, analytics: true, marketing: true });
    setShow(false);
    setModal(false);
  }, []);

  const rejectAll = useCallback(() => {
    savePrefs({ essential: true, analytics: false, marketing: false });
    setShow(false);
    setModal(false);
  }, []);

  const saveCustom = useCallback(() => {
    savePrefs({ essential: true, analytics, marketing });
    setShow(false);
    setModal(false);
  }, [analytics, marketing]);

  if (!show && !modal) return null;

  return (
    <>
      <style>{`
        /* ── Cookie Banner ── */
        .ck-banner {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 9999;
          background: #001530;
          border-top: 1px solid rgba(255,255,255,0.1);
          font-family: 'Inter', sans-serif;
          padding: 20px 40px;
          display: flex;
          align-items: center;
          gap: 2rem;
          flex-wrap: wrap;
          box-shadow: 0 -8px 32px rgba(0,0,0,0.4);
          animation: ck-slide-up 0.35s cubic-bezier(0.22,1,0.36,1);
        }
        @keyframes ck-slide-up {
          from { transform: translateY(100%); opacity: 0; }
          to   { transform: translateY(0);    opacity: 1; }
        }
        .ck-banner-text {
          flex: 1 1 320px;
          min-width: 0;
        }
        .ck-banner-title {
          font-family: 'Manrope', sans-serif;
          font-size: 0.92rem;
          font-weight: 800;
          color: #ffffff;
          margin: 0 0 4px 0;
        }
        .ck-banner-desc {
          font-size: 0.8rem;
          color: rgba(255,255,255,0.5);
          margin: 0;
          line-height: 1.55;
        }
        .ck-banner-actions {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          flex-shrink: 0;
          align-items: center;
        }
        .ck-btn-accept {
          font-family: 'Inter', sans-serif;
          font-size: 0.82rem;
          font-weight: 700;
          background: #2ECC40;
          color: #002046;
          border: none;
          padding: 10px 20px;
          cursor: pointer;
          transition: background 0.2s;
          white-space: nowrap;
        }
        .ck-btn-accept:hover { background: #27b837; }
        .ck-btn-manage {
          font-family: 'Inter', sans-serif;
          font-size: 0.82rem;
          font-weight: 600;
          background: transparent;
          color: rgba(255,255,255,0.65);
          border: 1px solid rgba(255,255,255,0.2);
          padding: 10px 20px;
          cursor: pointer;
          transition: all 0.2s;
          white-space: nowrap;
        }
        .ck-btn-manage:hover { border-color: rgba(255,255,255,0.5); color: #fff; }
        .ck-btn-reject {
          font-family: 'Inter', sans-serif;
          font-size: 0.78rem;
          font-weight: 500;
          background: transparent;
          color: rgba(255,255,255,0.35);
          border: none;
          padding: 10px 8px;
          cursor: pointer;
          transition: color 0.2s;
          white-space: nowrap;
          text-decoration: underline;
          text-underline-offset: 2px;
        }
        .ck-btn-reject:hover { color: rgba(255,255,255,0.6); }

        /* ── Modal overlay ── */
        .ck-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.65);
          z-index: 10000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          backdrop-filter: blur(4px);
          animation: ck-fade 0.25s ease;
        }
        @keyframes ck-fade { from { opacity: 0; } to { opacity: 1; } }

        .ck-modal {
          background: #ffffff;
          width: 100%;
          max-width: 520px;
          max-height: 90vh;
          overflow-y: auto;
          border-radius: 0;
          font-family: 'Inter', sans-serif;
          animation: ck-pop 0.3s cubic-bezier(0.22,1,0.36,1);
        }
        @keyframes ck-pop {
          from { transform: scale(0.95) translateY(16px); opacity: 0; }
          to   { transform: scale(1)    translateY(0);    opacity: 1; }
        }

        .ck-modal-header {
          background: linear-gradient(135deg, #002046 0%, #0a5c50 100%);
          padding: 24px 28px;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 12px;
        }
        .ck-modal-title {
          font-family: 'Manrope', sans-serif;
          font-size: 1.1rem;
          font-weight: 800;
          color: #ffffff;
          margin: 0 0 4px 0;
        }
        .ck-modal-sub {
          font-size: 0.78rem;
          color: rgba(255,255,255,0.55);
          margin: 0;
        }
        .ck-modal-close {
          background: rgba(255,255,255,0.1);
          border: none;
          color: rgba(255,255,255,0.7);
          width: 30px; height: 30px;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          flex-shrink: 0;
          font-size: 18px;
          line-height: 1;
          transition: background 0.2s;
        }
        .ck-modal-close:hover { background: rgba(255,255,255,0.2); color: #fff; }

        .ck-modal-body { padding: 24px 28px; }

        .ck-toggle-row {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 16px;
          padding: 18px 0;
          border-bottom: 1px solid #f1f3f5;
        }
        .ck-toggle-row:last-of-type { border-bottom: none; }
        .ck-toggle-info { flex: 1; min-width: 0; }
        .ck-toggle-label {
          font-size: 0.88rem;
          font-weight: 700;
          color: #002046;
          margin: 0 0 3px 0;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .ck-badge-required {
          font-size: 0.6rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          background: rgba(46,204,64,0.12);
          color: #1a8a30;
          padding: 2px 8px;
          border-radius: 20px;
        }
        .ck-toggle-desc {
          font-size: 0.78rem;
          color: #74777f;
          margin: 0;
          line-height: 1.5;
        }

        /* Toggle switch */
        .ck-switch {
          position: relative;
          width: 44px;
          height: 24px;
          flex-shrink: 0;
        }
        .ck-switch input { opacity: 0; width: 0; height: 0; }
        .ck-slider {
          position: absolute;
          inset: 0;
          background: #e2e8f0;
          border-radius: 24px;
          cursor: pointer;
          transition: background 0.2s;
        }
        .ck-slider::before {
          content: '';
          position: absolute;
          width: 18px; height: 18px;
          background: #ffffff;
          border-radius: 50%;
          left: 3px; top: 3px;
          transition: transform 0.2s;
          box-shadow: 0 1px 4px rgba(0,0,0,0.2);
        }
        .ck-switch input:checked + .ck-slider { background: #2ECC40; }
        .ck-switch input:checked + .ck-slider::before { transform: translateX(20px); }
        .ck-switch input:disabled + .ck-slider { opacity: 0.6; cursor: not-allowed; }

        .ck-modal-footer {
          padding: 16px 28px 24px;
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          border-top: 1px solid #f1f3f5;
        }
        .ck-modal-btn-save {
          flex: 1;
          font-family: 'Inter', sans-serif;
          font-size: 0.85rem;
          font-weight: 700;
          background: #002046;
          color: #ffffff;
          border: none;
          padding: 12px 20px;
          cursor: pointer;
          transition: background 0.2s;
        }
        .ck-modal-btn-save:hover { background: #013a6b; }
        .ck-modal-btn-all {
          flex: 1;
          font-family: 'Inter', sans-serif;
          font-size: 0.85rem;
          font-weight: 700;
          background: #2ECC40;
          color: #002046;
          border: none;
          padding: 12px 20px;
          cursor: pointer;
          transition: background 0.2s;
        }
        .ck-modal-btn-all:hover { background: #27b837; }

        @media (max-width: 600px) {
          .ck-banner { padding: 16px 20px; gap: 1rem; }
          .ck-modal-header, .ck-modal-body, .ck-modal-footer { padding-left: 20px; padding-right: 20px; }
        }
      `}</style>

      {/* Banner */}
      {show && !modal && (
        <div className="ck-banner" role="dialog" aria-label="Cookie consent">
          <div className="ck-banner-text">
            <p className="ck-banner-title">We use cookies</p>
            <p className="ck-banner-desc">
              We use essential cookies to keep the site running and optional cookies to improve your experience and analytics. You can manage your preferences at any time.
            </p>
          </div>
          <div className="ck-banner-actions">
            <button className="ck-btn-accept" onClick={acceptAll}>Accept all</button>
            <button className="ck-btn-manage" onClick={() => setModal(true)}>Manage preferences</button>
            <button className="ck-btn-reject" onClick={rejectAll}>Reject optional</button>
          </div>
        </div>
      )}

      {/* Settings Modal */}
      {modal && (
        <div
          className="ck-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Cookie preferences"
          onClick={(e) => e.target === e.currentTarget && setModal(false)}
        >
          <div className="ck-modal">
            <div className="ck-modal-header">
              <div>
                <p className="ck-modal-title">Cookie Preferences</p>
                <p className="ck-modal-sub">Choose which cookies you allow us to use.</p>
              </div>
              <button className="ck-modal-close" onClick={() => setModal(false)} aria-label="Close">✕</button>
            </div>

            <div className="ck-modal-body">
              {/* Essential */}
              <div className="ck-toggle-row">
                <div className="ck-toggle-info">
                  <p className="ck-toggle-label">
                    Essential Cookies
                    <span className="ck-badge-required">Always on</span>
                  </p>
                  <p className="ck-toggle-desc">Required for the website to function. These cannot be disabled.</p>
                </div>
                <label className="ck-switch">
                  <input type="checkbox" checked disabled />
                  <span className="ck-slider" />
                </label>
              </div>

              {/* Analytics */}
              <div className="ck-toggle-row">
                <div className="ck-toggle-info">
                  <p className="ck-toggle-label">Analytics Cookies</p>
                  <p className="ck-toggle-desc">Help us understand how visitors interact with the site so we can improve it. No personal data is sold.</p>
                </div>
                <label className="ck-switch">
                  <input
                    type="checkbox"
                    checked={analytics}
                    onChange={(e) => setAnalytics(e.target.checked)}
                  />
                  <span className="ck-slider" />
                </label>
              </div>

              {/* Marketing */}
              <div className="ck-toggle-row">
                <div className="ck-toggle-info">
                  <p className="ck-toggle-label">Marketing Cookies</p>
                  <p className="ck-toggle-desc">Used to show you relevant content and measure the effectiveness of campaigns. You can opt out at any time.</p>
                </div>
                <label className="ck-switch">
                  <input
                    type="checkbox"
                    checked={marketing}
                    onChange={(e) => setMarketing(e.target.checked)}
                  />
                  <span className="ck-slider" />
                </label>
              </div>
            </div>

            <div className="ck-modal-footer">
              <button className="ck-modal-btn-save" onClick={saveCustom}>Save my choices</button>
              <button className="ck-modal-btn-all" onClick={acceptAll}>Accept all</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
