import { useState, type FormEvent } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('sent');
    }, 1500);
  }

  if (status === 'sent') {
    return (
      <div className="text-center py-12">
        <svg className="w-16 h-16 text-gold mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="text-2xl mb-2" style={{ fontFamily: 'var(--font-family-heading)' }}>
          Thank You!
        </h3>
        <p className="text-warm-gray" style={{ fontFamily: 'var(--font-family-body)' }}>
          We've received your message and will be in touch within 24 hours.
        </p>
      </div>
    );
  }

  const inputClass = `
    w-full bg-transparent border-b border-warm-gray-light pb-3 pt-6
    text-charcoal outline-none transition-colors duration-300
    focus:border-gold placeholder-transparent peer
  `;

  const labelClass = `
    absolute left-0 top-6 text-warm-gray text-sm transition-all duration-300
    peer-focus:top-0 peer-focus:text-xs peer-focus:text-gold
    peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:text-xs
  `;

  return (
    <form onSubmit={handleSubmit} className="space-y-8" style={{ fontFamily: 'var(--font-family-body)' }}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="relative">
          <input
            type="text"
            id="firstName"
            placeholder="First Name"
            required
            className={inputClass}
            value={formData.firstName}
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            style={{ fontFamily: 'var(--font-family-body)' }}
          />
          <label htmlFor="firstName" className={labelClass}>First Name *</label>
        </div>
        <div className="relative">
          <input
            type="text"
            id="lastName"
            placeholder="Last Name"
            className={inputClass}
            value={formData.lastName}
            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            style={{ fontFamily: 'var(--font-family-body)' }}
          />
          <label htmlFor="lastName" className={labelClass}>Last Name</label>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="relative">
          <input
            type="email"
            id="email"
            placeholder="Email"
            required
            className={inputClass}
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            style={{ fontFamily: 'var(--font-family-body)' }}
          />
          <label htmlFor="email" className={labelClass}>Email *</label>
        </div>
        <div className="relative">
          <input
            type="tel"
            id="phone"
            placeholder="Phone"
            className={inputClass}
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            style={{ fontFamily: 'var(--font-family-body)' }}
          />
          <label htmlFor="phone" className={labelClass}>Phone</label>
        </div>
      </div>

      <div className="relative">
        <select
          id="service"
          className={`${inputClass} cursor-pointer appearance-none`}
          value={formData.service}
          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
          style={{ fontFamily: 'var(--font-family-body)' }}
        >
          <option value="">Select a service</option>
          <option value="wedding">Wedding Decor</option>
          <option value="home">Home Decor</option>
          <option value="event">Event Styling</option>
          <option value="floral">Floral Design</option>
          <option value="other">Other</option>
        </select>
        <label htmlFor="service" className="absolute left-0 top-0 text-xs text-warm-gray">
          Service Interested In
        </label>
      </div>

      <div className="relative">
        <textarea
          id="message"
          rows={4}
          placeholder="Message"
          required
          className={`${inputClass} resize-none`}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          style={{ fontFamily: 'var(--font-family-body)' }}
        />
        <label htmlFor="message" className={labelClass}>Tell Us About Your Vision *</label>
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="relative inline-flex items-center justify-center gap-2 px-10 py-3.5
                   bg-gold text-ivory text-sm uppercase tracking-[0.15em] font-medium
                   rounded-sm overflow-hidden transition-all duration-500 hover:bg-gold-light
                   hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed group w-full sm:w-auto"
        style={{ fontFamily: 'var(--font-family-body)' }}
      >
        <span className="relative z-10">
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </span>
        <svg className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 14 14" stroke="currentColor" strokeWidth="1.5">
          <path d="M1 7h12M8 2l5 5-5 5" />
        </svg>
      </button>
    </form>
  );
}
