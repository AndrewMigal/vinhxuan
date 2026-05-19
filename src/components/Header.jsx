import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import logo from '../assets/logo.png' // Измените на .svg если у вас SVG файл

function Header() {
  const { language, setLanguage, t } = useLanguage()
  const navigate = useNavigate()
  const location = useLocation()

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

  const handleBlogClick = () => {
    if (location.pathname === '/') {
      scrollToSection('blog')
    } else {
      navigate('/')
      setTimeout(() => scrollToSection('blog'), 100)
    }
  }

  const handleHomeClick = () => {
    if (location.pathname === '/') {
      scrollToSection('home')
    } else {
      navigate('/')
    }
  }

  const handleServicesClick = () => {
    if (location.pathname === '/') {
      scrollToSection('services')
    } else {
      navigate('/')
      setTimeout(() => scrollToSection('services'), 100)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 bg-black text-white shadow-lg z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 text-white hover:text-gray-300 transition-colors">
            <img src={logo} alt="Yuen Chai Wan Wing Chun Logo" className="h-16 w-auto" />
            <span className="text-2xl font-bold">Yuen Chai Wan Wing Chun</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={handleHomeClick}
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              {t('home')}
            </button>

            <button
              onClick={handleServicesClick}
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              {t('services')}
            </button>

            {/* Social Media Links */}
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              YouTube
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              Facebook
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              Instagram
            </a>

            <button
              onClick={handleBlogClick}
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              {t('blog')}
            </button>

            {/* Language Switcher */}
            <div className="flex items-center gap-2 border-l border-gray-700 pl-4">
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
              className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-200 transition-colors font-semibold"
            >
              {t('register')}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white">
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
