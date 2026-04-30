"use client";
import { useState, useEffect } from "react";
import Course from "./Course";

const ACCESS_CODE = "motion2024"; // Change this to whatever code you want Skip to share

const C = { slate: "#1C1F2E", ivory: "#F5F0E8", dark: "#EDE7DC", teal: "#00D4B4" };

export default function Page() {
  const [unlocked, setUnlocked] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    // Check if already unlocked in this session
    const saved = sessionStorage.getItem("mim_access");
    if (saved === "true") setUnlocked(true);
    setChecking(false);
  }, []);

  const handleSubmit = () => {
    if (input.trim().toLowerCase() === ACCESS_CODE.toLowerCase()) {
      sessionStorage.setItem("mim_access", "true");
      setUnlocked(true);
      setError(false);
    } else {
      setError(true);
      setInput("");
    }
  };

  const handleKey = (e) => {
    if (e.key === "Enter") handleSubmit();
  };

  if (checking) return null;

  if (unlocked) return <Course />;

  return (
    <div style={{
      minHeight: "100vh",
      background: C.ivory,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "'DM Sans', sans-serif",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        input:focus { outline: none !important; border-color: ${C.teal} !important; box-shadow: 0 0 0 3px rgba(0,212,180,0.15) !important; }
      `}</style>

      <div style={{ width: "100%", maxWidth: 420, padding: "0 24px", textAlign: "center" }}>
        {/* Logo */}
        <div style={{ marginBottom: 48 }}>
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            background: C.slate,
            borderRadius: 12,
            padding: "12px 24px",
            marginBottom: 28,
          }}>
            <span style={{ fontFamily: "'Syne', serif", fontWeight: 600, fontSize: 20, color: C.ivory, letterSpacing: "0.04em" }}>
              Money in Motion
            </span>
            <span style={{ color: C.teal, fontSize: 22 }}>·</span>
          </div>
          <h1 style={{ fontFamily: "'Syne', serif", fontWeight: 600, fontSize: 28, color: C.slate, letterSpacing: "-0.02em", marginBottom: 10 }}>
            Welcome
          </h1>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: 15, color: C.slate, opacity: 0.6, lineHeight: 1.7 }}>
            A practical accounting course built for entrepreneurs.
            Enter your access code to begin.
          </p>
        </div>

        {/* Code input */}
        <div style={{ marginBottom: 16 }}>
          <input
            type="text"
            value={input}
            onChange={(e) => { setInput(e.target.value); setError(false); }}
            onKeyDown={handleKey}
            placeholder="Enter access code"
            autoFocus
            style={{
              width: "100%",
              padding: "14px 18px",
              borderRadius: 10,
              border: `1.5px solid ${error ? "#E05252" : "rgba(28,31,46,0.18)"}`,
              background: "white",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 16,
              color: C.slate,
              textAlign: "center",
              letterSpacing: "0.08em",
              marginBottom: 12,
              transition: "border-color 0.2s",
            }}
          />
          {error && (
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "#E05252", marginBottom: 8 }}>
              That code doesn't match. Try again.
            </p>
          )}
          <button
            onClick={handleSubmit}
            style={{
              width: "100%",
              padding: "14px",
              background: C.teal,
              color: C.slate,
              border: "none",
              borderRadius: 10,
              fontFamily: "'Syne', serif",
              fontWeight: 600,
              fontSize: 15,
              cursor: "pointer",
              letterSpacing: "-0.01em",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = "0.88"}
            onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}
          >
            Enter Course →
          </button>
        </div>

        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: C.slate, opacity: 0.35, marginTop: 24 }}>
          Access provided by your mentor.
        </p>
      </div>
    </div>
  );
}
