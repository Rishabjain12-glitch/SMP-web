import { useState } from 'react'
import ContentSection from '../components/ContentSection'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const errors = {}
    if (!formData.name.trim()) errors.name = 'Please enter your name'
    if (!formData.email.trim()) {
      errors.email = 'Please enter your email'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please enter a valid email address'
    }
    if (!formData.message.trim()) errors.message = 'Please enter your message'
    return errors
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setErrors(prev => ({ ...prev, [e.target.name]: '' })) // Clear error on input
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate()
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setSubmitted(false), 5000) // Hide success after 5s
    }
  }

  return (
    <ContentSection title="Get in Touch with CarbonCalci">
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '3rem',
          justifyContent: 'center',
          alignItems: 'flex-start',
          marginTop: '2rem',
        }}
      >
        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          noValidate
          style={{
            flex: '1 1 400px',
            maxWidth: '500px',
            background: '#f0f9f4',
            padding: '2.5rem',
            borderRadius: '12px',
            boxShadow: '0 8px 20px rgba(0, 128, 0, 0.1)',
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          }}
        >
          <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem', color: '#2e7d32' }}>
            We’d love to hear from you! Whether you have questions, feedback, or want to collaborate, drop us a message below.
          </p>

          {/* Name */}
          <div style={{ marginBottom: '1.5rem' }}>
            <label htmlFor="name" style={{ display: 'block', marginBottom: '.5rem', fontWeight: '600', color: '#2e7d32' }}>
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your full name"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? 'error' : ''}
              style={{
                width: '100%',
                padding: '0.75rem 1rem',
                borderRadius: '8px',
                border: errors.name ? '2px solid #d32f2f' : '2px solid #a5d6a7',
                outline: 'none',
                fontSize: '1rem',
                transition: 'border-color 0.3s ease',
              }}
              onFocus={e => (e.target.style.borderColor = '#388e3c')}
              onBlur={e => (e.target.style.borderColor = errors.name ? '#d32f2f' : '#a5d6a7')}
            />
            {errors.name && (
              <p style={{ color: '#d32f2f', marginTop: '.5rem', fontSize: '.9rem' }}>{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div style={{ marginBottom: '1.5rem' }}>
            <label htmlFor="email" style={{ display: 'block', marginBottom: '.5rem', fontWeight: '600', color: '#2e7d32' }}>
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? 'error' : ''}
              style={{
                width: '100%',
                padding: '0.75rem 1rem',
                borderRadius: '8px',
                border: errors.email ? '2px solid #d32f2f' : '2px solid #a5d6a7',
                outline: 'none',
                fontSize: '1rem',
                transition: 'border-color 0.3s ease',
              }}
              onFocus={e => (e.target.style.borderColor = '#388e3c')}
              onBlur={e => (e.target.style.borderColor = errors.email ? '#d32f2f' : '#a5d6a7')}
            />
            {errors.email && (
              <p style={{ color: '#d32f2f', marginTop: '.5rem', fontSize: '.9rem' }}>{errors.email}</p>
            )}
          </div>

          {/* Message */}
          <div style={{ marginBottom: '1.5rem' }}>
            <label htmlFor="message" style={{ display: 'block', marginBottom: '.5rem', fontWeight: '600', color: '#2e7d32' }}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Write your message here..."
              value={formData.message}
              onChange={handleChange}
              className={errors.message ? 'error' : ''}
              rows={5}
              style={{
                width: '100%',
                padding: '1rem',
                borderRadius: '8px',
                border: errors.message ? '2px solid #d32f2f' : '2px solid #a5d6a7',
                outline: 'none',
                fontSize: '1rem',
                resize: 'vertical',
                transition: 'border-color 0.3s ease',
              }}
              onFocus={e => (e.target.style.borderColor = '#388e3c')}
              onBlur={e => (e.target.style.borderColor = errors.message ? '#d32f2f' : '#a5d6a7')}
            />
            {errors.message && (
              <p style={{ color: '#d32f2f', marginTop: '.5rem', fontSize: '.9rem' }}>{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            style={{
              backgroundColor: '#388e3c',
              color: '#fff',
              padding: '0.9rem 2.5rem',
              fontSize: '1.1rem',
              fontWeight: '700',
              border: 'none',
              borderRadius: '30px',
              cursor: 'pointer',
              boxShadow: '0 6px 15px rgba(56, 142, 60, 0.5)',
              transition: 'background-color 0.3s ease',
              width: '100%',
            }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#2e7d32')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#388e3c')}
          >
            Send Message
          </button>

          {submitted && (
            <p
              style={{
                marginTop: '1.5rem',
                color: '#2e7d32',
                fontWeight: '600',
                fontSize: '1rem',
                animation: 'fadeIn 1s ease forwards',
              }}
            >
              🎉 Thank you for reaching out! We’ll get back to you soon.
            </p>
          )}
        </form>

        {/* Contact Info */}
        <div
          style={{
            flex: '1 1 300px',
            maxWidth: '350px',
            background: '#e8f5e9',
            padding: '2rem',
            borderRadius: '12px',
            boxShadow: '0 8px 20px rgba(0, 128, 0, 0.1)',
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            color: '#2e7d32',
            lineHeight: '1.6',
          }}
        >
          <h3 style={{ marginBottom: '1rem' }}>Contact Info</h3>
          <p>
            <strong>Phone:</strong> <a href="tel:+91 9885118584" style={{ color: '#388e3c', textDecoration: 'none' }}>+91 9885118584</a>
          </p>
          <p>
            <strong>Email:</strong> <a href="mailto:info@carboncalci.com" style={{ color: '#388e3c', textDecoration: 'none' }}>info@carboncalci.com</a>
          </p>
          <p>
            <strong>Address:</strong><br />
            IIT Bombay,<br />
            Powai, Mumbai, Maharashtra 400076
          </p>
          <div style={{ marginTop: '2rem' }}>
          <iframe
  title="IIT Bombay Location"
  src="https://www.google.com/maps?q=IIT+Bombay,+Powai,+Mumbai,+Maharashtra+400076,+India&output=embed"
  width="100%"
  height="200"
  style={{ border: 0, borderRadius: '12px' }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

          </div>
        </div>
      </div>

      {/* Keyframes for fadeIn */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        /* Error input styling */
        .error {
          border-color: #d32f2f !important;
        }
        .error-msg {
          color: #d32f2f;
          font-size: 0.9rem;
          margin-top: 0.3rem;
        }
        .success-msg {
          color: #2e7d32;
          font-weight: 600;
          margin-top: 1rem;
        }
      `}</style>
    </ContentSection>
  )
}

