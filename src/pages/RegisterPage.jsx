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
  const [submitStatus, setSubmitStatus] = useState(null) // 'success' | 'error' | null

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Reset status
    setSubmitStatus(null)
    setIsSubmitting(true)

    // Map experience to localized labels for email
    const experienceLabels = {
      beginner: t('beginner'),
      intermediate: t('intermediate'),
      advanced: t('advanced')
    }

    // Prepare template parameters
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      from_phone: formData.phone,
      experience_level: experienceLabels[formData.experience],
      message: formData.message || t('noAdditionalInfo')
    }

    try {
      // Send email via EmailJS
      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )

      console.log('Email sent successfully:', response.status, response.text)

      // Success state
      setSubmitStatus('success')

      // Reset form after successful submission
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
    <div className="min-h-screen bg-gray-100">
      <Header />

      <main className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="bg-white rounded-2xl shadow-2xl p-8 border-4 border-black">
          <h1 className="text-3xl font-bold text-black mb-2">
            {t('registerTitle')}
          </h1>
          <p className="text-gray-700 mb-8">
            {t('registerSubtitle')}
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-black mb-2">
                {t('name')} *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border-2 border-black rounded-lg focus:ring-2 focus:ring-gray-400 outline-none transition"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
                {t('email')} *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border-2 border-black rounded-lg focus:ring-2 focus:ring-gray-400 outline-none transition"
                placeholder="example@email.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-black mb-2">
                {t('phone')} *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border-2 border-black rounded-lg focus:ring-2 focus:ring-gray-400 outline-none transition"
              />
            </div>

            <div>
              <label htmlFor="experience" className="block text-sm font-medium text-black mb-2">
                {t('experienceLevel')}
              </label>
              <select
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                className="w-full px-4 py-2 border-2 border-black rounded-lg focus:ring-2 focus:ring-gray-400 outline-none transition"
              >
                <option value="beginner">{t('beginner')}</option>
                <option value="intermediate">{t('intermediate')}</option>
                <option value="advanced">{t('advanced')}</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-black mb-2">
                {t('additionalInfo')}
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border-2 border-black rounded-lg focus:ring-2 focus:ring-gray-400 outline-none transition resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                isSubmitting
                  ? 'bg-gray-400 cursor-not-allowed text-white'
                  : 'bg-black hover:bg-gray-800 text-white'
              }`}
            >
              {isSubmitting ? '...' : t('submit')}
            </button>

            {/* Success Message */}
            {submitStatus === 'success' && (
              <div className="mt-4 p-4 bg-white border-2 border-black rounded-lg">
                <p className="text-black text-center font-medium">
                  ✓ {t('successMessage')}
                </p>
              </div>
            )}

            {/* Error Message */}
            {submitStatus === 'error' && (
              <div className="mt-4 p-4 bg-black border-2 border-black rounded-lg">
                <p className="text-white text-center font-medium">
                  ✗ {t('errorMessage')}
                </p>
              </div>
            )}
          </form>
        </div>
      </main>
    </div>
  )
}

export default RegisterPage