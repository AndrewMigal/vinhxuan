import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'

function Header() {
  const { language, setLanguage, t } = useLanguage()
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerOffset = 80 // Height of fixed header
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-md z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-indigo-600 hover:text-indigo-700 transition-colors">
            VinhXuan
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-indigo-600 transition-colors font-medium"
            >
              {t('home')}
            </button>

            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-indigo-600 transition-colors font-medium"
            >
              {t('services')}
            </button>

            {/* Social Media Links */}
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-red-600 transition-colors font-medium"
            >
              YouTube
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Facebook
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-pink-600 transition-colors font-medium"
            >
              Instagram
            </a>

            <button
              onClick={() => scrollToSection('blog')}
              className="text-gray-700 hover:text-indigo-600 transition-colors font-medium"
            >
              {t('blog')}
            </button>

            {/* Language Switcher */}
            <div className="flex items-center gap-2 border-l border-gray-300 pl-4">
              <button
                onClick={() => setLanguage('en')}
                className={`text-2xl transition-opacity ${language === 'en' ? 'opacity-100' : 'opacity-40 hover:opacity-70'}`}
                title="English"
              >
                🇬🇧
              </button>
              <button
                onClick={() => setLanguage('pl')}
                className={`text-2xl transition-opacity ${language === 'pl' ? 'opacity-100' : 'opacity-40 hover:opacity-70'}`}
                title="Polski"
              >
                🇵🇱
              </button>
            </div>

            {/* CTA Button */}
            <Link
              to="/register"
              className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors font-semibold"
            >
              {t('register')}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header
