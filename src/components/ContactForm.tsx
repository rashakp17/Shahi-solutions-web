'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API submission
    setTimeout(() => {
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 800);
  };

  return (
    <div className={styles.contactWrapper}>
      <div className={styles.infoCol}>
        <h3 className={styles.infoTitle}>Connect With Us</h3>
        <p className={styles.infoDesc}>
          Have an idea or an upcoming software project? Reach out to our consulting team. We will align on requirements, draft architectural options, and outline a timeline.
        </p>

        <ul className={styles.contactList}>
          <li className={styles.contactItem}>
            <div className={styles.iconBox}>
              <Mail size={20} />
            </div>
            <div>
              <span className={styles.itemLabel}>Email Us</span>
              <a href="mailto:info@shahisolutions.com" className={styles.itemVal}>info@shahisolutions.com</a>
            </div>
          </li>
          <li className={styles.contactItem}>
            <div className={styles.iconBox}>
              <Phone size={20} />
            </div>
            <div>
              <span className={styles.itemLabel}>Call Us</span>
              <a href="tel:+1234567890" className={styles.itemVal}>+1 (234) 567-890</a>
            </div>
          </li>
          <li className={styles.contactItem}>
            <div className={styles.iconBox}>
              <MapPin size={20} />
            </div>
            <div>
              <span className={styles.itemLabel}>Visit Office</span>
              <span className={styles.itemVal}>123 Enterprise Suite, Silicon Valley, CA</span>
            </div>
          </li>
        </ul>
      </div>

      <div className={styles.formCol}>
        {submitted ? (
          <div className={styles.successMessage}>
            <CheckCircle size={48} className={styles.successIcon} />
            <h4 className={styles.successTitle}>Message Sent!</h4>
            <p className={styles.successDesc}>
              Thank you for contacting Shahi Solutions. Our technical consultants will review your scope and follow up within 24 hours.
            </p>
            <button className="btn btn-primary" onClick={() => setSubmitted(false)}>
              Send Another Message
            </button>
          </div>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className={styles.input}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className={styles.input}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="subject" className={styles.label}>Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                placeholder="Custom Software Inquiry"
                className={styles.input}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project requirements..."
                className={styles.textarea}
              />
            </div>

            <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>
              Send Inquiry <Send size={16} />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
