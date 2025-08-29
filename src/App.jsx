import React from "react";
import "./App.css";
// import mainBg from "./assets/main-bg.png"; // (Optional: background image)
// import logo from "./assets/logo.png"; // Place your center logo here
// import hand1 from "./assets/hand1.png"; // Hand/acupressure image (not blurred face)
// import hand2 from "./assets/hand2.png"; // Additional hand/therapy image
// import therapyImg from "./assets/therapy.png"; // Therapy/essential oils image
// import plant from "./assets/plant.png"; // Plant/aromatherapy image

const mainBg = "https://placehold.co/1200x400/1e7d3c/fff?text=Main+Background";
const logo = "https://placehold.co/120x120/ffd700/1e7d3c?text=Logo";
const hand1 = "https://placehold.co/150x150/1e7d3c/fff?text=Hand+1";
const hand2 = "https://placehold.co/150x150/ffd700/1e7d3c?text=Hand+2";
const therapyImg = "https://placehold.co/150x150/1e7d3c/fff?text=Therapy";
const plant = "https://placehold.co/150x150/ffd700/1e7d3c?text=Plant";


function App() {
  return (
    <div className="main-container modern-bg">
      {/* Header Section */}
      <header className="header modern-header">
        <img src={logo} alt="Holistic Health Logo" className="logo" />
        <div>
          <h1>Holistic Health Acupressure &amp; Naturopathy Center</h1>
          <h2>Healing Without Medicines - Naturally</h2>
        </div>
      </header>

      {/* Hero Images */}
      <div className="hero-images modern-hero">
        <img src={hand1} alt="Acupressure" className="hero-img" />
        <img src={hand2} alt="Therapy" className="hero-img" />
        <img src={therapyImg} alt="Natural Healing" className="hero-img" />
        <img src={plant} alt="Aroma Therapy" className="hero-img" />
      </div>

      {/* Therapy Types */}
      <section className="therapy-types modern-card">
        {["Acupressure", "Auriculo Therapy", "Cupping", "Marma Therapy", "Reiki", "Aroma Therapy", "Bach Flower", "Colour Therapy"].map((type) => (
          <span className="therapy-type-pill" key={type}>{type}</span>
        ))}
      </section>

      {/* We Help With */}
      <section className="help-section modern-card improved-help-section">
        <div className="help-title-bar">
          <h3 className="help-title">We Help With</h3>
        </div>
        <div className="help-flex improved-help-flex">
          <ul className="help-list">
            <li><span className="help-icon">💪</span>Pain &amp; Musculoskeletal Problems</li>
            <li><span className="help-icon">🤕</span>Headaches &amp; Migraines</li>
            <li><span className="help-icon">🧠</span>Emotional &amp; Mental Health &amp; Digestive Disorders</li>
            <li><span className="help-icon">⚖️</span>Hormonal Imbalances</li>
            <li><span className="help-icon">🌬️</span>Respiratory Health</li>
            <li><span className="help-icon">🔄</span>Metabolic Disorders</li>
            <li><span className="help-icon">🌸</span>Skin &amp; Allergy Issues</li>
            <li><span className="help-icon">🧬</span>Neurological Disorders</li>
            <li><span className="help-icon">🩸</span>Nerve &amp; Vein Issues</li>
          </ul>
          <ul className="help-list">
            <li><span className="help-icon">🦴</span>Back pain, neck stiffness, frozen shoulder, tennis elbow, knee pain, arthritis</li>
            <li><span className="help-icon">😴</span>Stress, anxiety, insomnia, depression</li>
            <li><span className="help-icon">👩‍⚕️</span>PCOS, PMS, irregular cycles</li>
            <li><span className="help-icon">🤧</span>Asthma, allergies, immunity issues</li>
            <li><span className="help-icon">🩺</span>Diabetes, HBP, cholesterol, fatty liver</li>
            <li><span className="help-icon">🧴</span>Acne, eczema</li>
            <li><span className="help-icon">🧠</span>Parkinson’s, sciatica, varicose veins</li>
          </ul>
        </div>
      </section>

      {/* Offer Section */}
      <section className="offer-section modern-card">
        <h4>EXCLUSIVE OFFER !!!</h4>
        <p>
          <b>
            EVERY SATURDAY - First Free Consultation till 31<sup>st</sup> October 2025
          </b>
        </p>
        <button className="contact-btn modern-btn">Contact Now</button>
        <div className="qr-container">
          <img src="/qr.png" alt="WhatsApp QR" />
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="why-choose modern-card improved-why-choose">
        <div className="why-title-bar">
          <h2 className="why-title">
            <span role="img" aria-label="sparkle">✨</span> Why Choose Natural Healing with Dr. Neetu Bhasker? <span role="img" aria-label="sparkle">✨</span>
          </h2>
        </div>
        <p className="why-desc">
          Medicines often suppress symptoms but leave the root cause untouched. At our health centre, we use time-tested therapies to activate your body’s natural healing power — without side effects.
        </p>
        <ul className="why-list">
          <li><span className="why-icon">🟢</span><b className="why-therapy">Acupressure</b> <span className="why-dash">–</span> Stimulates energy points to restore health.</li>
          <li><span className="why-icon">🟣</span><b className="why-therapy">Auriculo Therapy</b> <span className="why-dash">–</span> Ear points to balance physical and emotional well-being.</li>
          <li><span className="why-icon">🟠</span><b className="why-therapy">Cupping Therapy</b> <span className="why-dash">–</span> Boosts blood flow, relieves pain &amp; tension.</li>
          <li><span className="why-icon">🟡</span><b className="why-therapy">Marma Therapy</b> <span className="why-dash">–</span> Ancient Indian healing through vital points.</li>
          <li><span className="why-icon">🔵</span><b className="why-therapy">Reiki Healing</b> <span className="why-dash">–</span> Energy balancer for mind, body &amp; spirit.</li>
          <li><span className="why-icon">🟢</span><b className="why-therapy">Aroma Therapy</b> <span className="why-dash">–</span> Essential oils for emotional upliftment.</li>
          <li><span className="why-icon">🟣</span><b className="why-therapy">Bach Flower Therapy</b> <span className="why-dash">–</span> Gentle remedies for emotional harmony.</li>
          <li><span className="why-icon">🟡</span><b className="why-therapy">Colour Therapy</b> <span className="why-dash">–</span> Colours to restore physical &amp; mental balance.</li>
        </ul>
        <blockquote className="why-quote">
          <span className="why-quote-mark">“</span>Chronic back pain troubled me for years. After just 4 sessions, I felt lighter and pain-free.”<br /><span className="why-quote-author">– R. Gupta</span>
        </blockquote>
      </section>

      {/* About Doctor Section */}
      <section className="about-doctor modern-card improved-about-doctor">
        <div className="about-title-bar">
          <h3 className="about-title">About Dr. Neetu Bhasker:</h3>
        </div>
        <ul className="about-list">
          <li>Experienced therapist with years of experience in holistic therapies</li>
          <li>Specialises in relief for all kinds of emotional, physical and mental imbalances</li>
          <li>Compassionate, personalised approach for every patient</li>
          <li>Attention to detail, punctual, patient with patient</li>
        </ul>
      </section>

      {/* Footer Section */}
      <footer className="footer modern-footer improved-footer">
        <div className="footer-address">
          <span className="footer-icon">📍</span>
          <b>LANDMARK:</b> Canara Bank, No4 Ramana Shree Nagar, Doddakamanahalli Main Road, Off Bannerghatta Road, Bangalore - 560076
        </div>
        <div className="footer-phone">
          <span className="footer-icon">📞</span>
          <span>+91 9164321890 / +91 7483764628</span>
        </div>
        <div className="footer-time">
          <span className="footer-icon">⏰</span>
          <b>Timings</b> 11 AM to 2 PM &amp; 5:30 PM to 7:30 PM
        </div>
      </footer>
    </div>
  );
}

export default App;
