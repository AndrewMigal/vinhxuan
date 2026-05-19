import { useState } from 'react'
import emailjs from '@emailjs/browser'
import Header from '../components/Header'
import { useLanguage } from '../contexts/LanguageContext'

function RegisterPage() {
  const { t } = useLanguage()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: 'beginner',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [focusedField, setFocusedField] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitStatus(null)
    setIsSubmitting(true)

    const experienceLabels = {
      beginner: t('beginner'),
      intermediate: t('intermediate'),
      advanced: t('advanced')
    }

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      from_phone: formData.phone,
      experience_level: experienceLabels[formData.experience],
      message: formData.message || t('noAdditionalInfo')
    }

    try {
      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )

      console.log('Email sent successfully:', response.status, response.text)
      setSubmitStatus('success')

      setFormData({
        name: '',
        email: '',
        phone: '',
        experience: 'beginner',
        message: ''
      })

    } catch (error) {
      console.error('Email sending failed:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-black to-zinc-900">
      <Header />

      {/* Decorative background elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-red-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

        <svg className="absolute top-40 left-0 w-64 h-64 opacity-5" viewBox="0 0 200 200">
          <path
            d="M20,100 Q60,40 100,60 T180,120"
            stroke="white"
            strokeWidth="30"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <main className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left side - Info panel */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <div className="w-12 h-1 bg-red-600 mb-6"></div>
              <h1
                className="text-5xl font-bold text-white mb-4 leading-tight"
                style={{ fontFamily: '"Bebas Neue", "Impact", sans-serif' }}
              >
                {t('registerTitle')}
              </h1>
              <div className="w-24 h-0.5 bg-gradient-to-r from-red-600 to-transparent mb-6"></div>
              <p className="text-zinc-400 text-lg leading-relaxed">
                {t('registerSubtitle')}
              </p>
            </div>

            {/* Decorative Chinese character */}
            <div className="hidden lg:block pt-12">
              <div
                className="text-9xl font-bold text-white/5 select-none"
                style={{
                  fontFamily: 'serif',
                  writingMode: 'vertical-rl',
                  textOrientation: 'upright'
                }}
              >
                修
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="lg:col-span-3">
            <div className="relative bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 backdrop-blur-sm border border-zinc-800 p-8 lg:p-10">
              {/* Top accent line */}
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-red-600 via-red-600/50 to-transparent"></div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name field */}
                <div className="relative">
                  <label
                    htmlFor="name"
                    className={`block text-sm font-semibold mb-2 transition-colors ${
                      focusedField === 'name' ? 'text-red-500' : 'text-zinc-400'
                    }`}
                    style={{ fontFamily: '"Bebas Neue", sans-serif', letterSpacing: '0.05em' }}
                  >
                    {t('name')} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-3 bg-black/50 border border-zinc-700 text-white placeholder-zinc-600 focus:border-red-600 focus:outline-none transition-all"
                    style={{ clipPath: 'polygon(0 0, 100% 0, 98% 100%, 0% 100%)' }}
                  />
                  <div
                    className={`absolute bottom-0 left-0 h-0.5 bg-red-600 transition-all duration-300 ${
                      focusedField === 'name' ? 'w-full' : 'w-0'
                    }`}
                  ></div>
                </div>

                {/* Email field */}
                <div className="relative">
                  <label
                    htmlFor="email"
                    className={`block text-sm font-semibold mb-2 transition-colors ${
                      focusedField === 'email' ? 'text-red-500' : 'text-zinc-400'
                    }`}
                    style={{ fontFamily: '"Bebas Neue", sans-serif', letterSpacing: '0.05em' }}
                  >
                    {t('email')} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-3 bg-black/50 border border-zinc-700 text-white placeholder-zinc-600 focus:border-red-600 focus:outline-none transition-all"
                    style={{ clipPath: 'polygon(0 0, 100% 0, 98% 100%, 0% 100%)' }}
                    placeholder="example@email.com"
                  />
                  <div
                    className={`absolute bottom-0 left-0 h-0.5 bg-red-600 transition-all duration-300 ${
                      focusedField === 'email' ? 'w-full' : 'w-0'
                    }`}
                  ></div>
                </div>

                {/* Phone field */}
                <div className="relative">
                  <label
                    htmlFor="phone"
                    className={`block text-sm font-semibold mb-2 transition-colors ${
                      focusedField === 'phone' ? 'text-red-500' : 'text-zinc-400'
                    }`}
                    style={{ fontFamily: '"Bebas Neue", sans-serif', letterSpacing: '0.05em' }}
                  >
                    {t('phone')} *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('phone')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-3 bg-black/50 border border-zinc-700 text-white placeholder-zinc-600 focus:border-red-600 focus:outline-none transition-all"
                    style={{ clipPath: 'polygon(0 0, 100% 0, 98% 100%, 0% 100%)' }}
                  />
                  <div
                    className={`absolute bottom-0 left-0 h-0.5 bg-red-600 transition-all duration-300 ${
                      focusedField === 'phone' ? 'w-full' : 'w-0'
                    }`}
                  ></div>
                </div>

                {/* Experience field */}
                <div className="relative">
                  <label
                    htmlFor="experience"
                    className={`block text-sm font-semibold mb-2 transition-colors ${
                      focusedField === 'experience' ? 'text-red-500' : 'text-zinc-400'
                    }`}
                    style={{ fontFamily: '"Bebas Neue", sans-serif', letterSpacing: '0.05em' }}
                  >
                    {t('experienceLevel')}
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('experience')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-3 bg-black/50 border border-zinc-700 text-white focus:border-red-600 focus:outline-none transition-all appearance-none cursor-pointer"
                    style={{ clipPath: 'polygon(0 0, 100% 0, 98% 100%, 0% 100%)' }}
                  >
                    <option value="beginner">{t('beginner')}</option>
                    <option value="intermediate">{t('intermediate')}</option>
                    <option value="advanced">{t('advanced')}</option>
                  </select>
                  <div className="absolute right-4 top-[42px] pointer-events-none text-red-600">▼</div>
                  <div
                    className={`absolute bottom-0 left-0 h-0.5 bg-red-600 transition-all duration-300 ${
                      focusedField === 'experience' ? 'w-full' : 'w-0'
                    }`}
                  ></div>
                </div>

                {/* Message field */}
                <div className="relative">
                  <label
                    htmlFor="message"
                    className={`block text-sm font-semibold mb-2 transition-colors ${
                      focusedField === 'message' ? 'text-red-500' : 'text-zinc-400'
                    }`}
                    style={{ fontFamily: '"Bebas Neue", sans-serif', letterSpacing: '0.05em' }}
                  >
                    {t('additionalInfo')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-3 bg-black/50 border border-zinc-700 text-white placeholder-zinc-600 focus:border-red-600 focus:outline-none transition-all resize-none"
                    style={{ clipPath: 'polygon(0 0, 100% 0, 98% 100%, 0% 100%)' }}
                  ></textarea>
                  <div
                    className={`absolute bottom-0 left-0 h-0.5 bg-red-600 transition-all duration-300 ${
                      focusedField === 'message' ? 'w-full' : 'w-0'
                    }`}
                  ></div>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`group relative w-full py-4 font-bold text-lg overflow-hidden transition-all ${
                    isSubmitting
                      ? 'bg-zinc-800 cursor-not-allowed text-zinc-500'
                      : 'bg-red-600 hover:bg-red-700 text-white hover:scale-[1.02]'
                  }`}
                  style={{
                    clipPath: 'polygon(0 0, 100% 0, 97% 100%, 0% 100%)',
                    fontFamily: '"Bebas Neue", sans-serif',
                    letterSpacing: '0.1em'
                  }}
                >
                  <span className="relative z-10">
                    {isSubmitting ? '...' : t('submit')}
                  </span>
                  {!isSubmitting && (
                    <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-600 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                  )}
                </button>

                {/* Success Message */}
                {submitStatus === 'success' && (
                  <div className="relative p-6 bg-gradient-to-r from-green-900/30 to-green-800/30 border-l-4 border-green-500 animate-fade-in">
                    <div className="flex items-center gap-3">
                      <div className="text-2xl text-green-500">✓</div>
                      <p className="text-green-300 font-medium">
                        {t('successMessage')}
                      </p>
                    </div>
                  </div>
                )}

                {/* Error Message */}
                {submitStatus === 'error' && (
                  <div className="relative p-6 bg-gradient-to-r from-red-900/30 to-red-800/30 border-l-4 border-red-500 animate-fade-in">
                    <div className="flex items-center gap-3">
                      <div className="text-2xl text-red-500">✗</div>
                      <p className="text-red-300 font-medium">
                        {t('errorMessage')}
                      </p>
                    </div>
                  </div>
                )}
              </form>

              {/* Bottom corner accent */}
              <div className="absolute bottom-0 right-0 w-0 h-0 border-b-[60px] border-b-red-600/20 border-l-[60px] border-l-transparent"></div>
            </div>
          </div>
        </div>
      </main>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.4s ease-out;
        }
      `}</style>
    </div>
  )
}

export default RegisterPage
