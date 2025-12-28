import React, { useState } from "react";
import "./Contact.css";
import toast from "react-hot-toast";

export default function Contact() {
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all fields 😊");
      return;
    }

    toast.success("Thank you for writing to us! We’ll get back soon 🍲");
    setForm({ name: "", email: "", message: "" });
    setShowModal(false);
  };

  return (
    <div className="contact-container">
      <div className="contact-card">
        <h1>📬 Contact Us</h1>
        <p className="contact-intro">
          Have a question, feedback, or a recipe idea?  
          We’d love to hear from you.
        </p>

        <div className="contact-info">
          <p><strong>Email:</strong> support@recipeapp.com</p>
          <p><strong>Phone:</strong> +91 98765 43210</p>
        </div>

        <button className="write-btn" onClick={() => setShowModal(true)}>
          ✍️ Write to Us
        </button>
      </div>

      {/* Popup Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div
            className="modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>Write to Us</h2>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
              />

              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={form.email}
                onChange={handleChange}
              />

              <textarea
                name="message"
                placeholder="Your message..."
                rows="4"
                value={form.message}
                onChange={handleChange}
              />

              <div className="modal-actions">
                <button type="submit" className="submit-btn">
                  Send 🍽️
                </button>
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
