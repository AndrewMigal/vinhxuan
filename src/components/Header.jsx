import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { useTheme } from '../contexts/ThemeContext'
import logo from '../assets/logo.png'
import logoBlack from '../assets/logo_black.png'

function Header() {
  const { language, setLanguage, t } = useLanguage()
  const { theme, toggleTheme } = useTheme()
  const navigate = useNavigate()
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    setIsMenuOpen(false)
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
    setIsMenuOpen(false)
    if (location.pathname === '/') {
      scrollToSection('blog')
    } else {
      navigate('/')
      setTimeout(() => scrollToSection('blog'), 100)
    }
  }

  const handleHomeClick = () => {
    setIsMenuOpen(false)
    if (location.pathname === '/') {
      scrollToSection('home')
    } else {
      navigate('/')
    }
  }

  const handleServicesClick = () => {
    setIsMenuOpen(false)
    if (location.pathname === '/') {
      scrollToSection('services')
    } else {
      navigate('/')
      setTimeout(() => scrollToSection('services'), 100)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 dark:bg-black/90 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 shadow-sm z-50">
      <nav className="max-w-7xl mx-auto px-4 lg:px-0">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-zinc-900 dark:text-white hover:text-zinc-700 dark:hover:text-gray-300 transition-colors">
            <img
              src={theme === 'dark' ? logoBlack : logo}
              alt="Yuen Chai Wan Wing Chun Logo"
              className="h-12 w-auto"
            />
            <span className="text-xl font-bold hidden lg:block">Yuen Chai Wan Wing Chun</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={handleHomeClick}
              className="text-zinc-600 dark:text-gray-300 hover:text-zinc-900 dark:hover:text-white transition-colors font-medium"
            >
              {t('home')}
            </button>

            <button
              onClick={handleServicesClick}
              className="text-zinc-600 dark:text-gray-300 hover:text-zinc-900 dark:hover:text-white transition-colors font-medium"
            >
              {t('services')}
            </button>

            {/* Social Media Links */}
            <span
              className="text-zinc-400 dark:text-gray-500 font-medium cursor-default"
            >
              YouTube
            </span>

            <a
              href="https://www.facebook.com/WingChunBielskoBiala"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-600 dark:text-gray-300 hover:text-zinc-900 dark:hover:text-white transition-colors font-medium"
            >
              Facebook
            </a>

            <a
              href="https://www.instagram.com/vietwingchun/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-600 dark:text-gray-300 hover:text-zinc-900 dark:hover:text-white transition-colors font-medium"
            >
              Instagram
            </a>

            <button
              onClick={handleBlogClick}
              className="text-zinc-600 dark:text-gray-300 hover:text-zinc-900 dark:hover:text-white transition-colors font-medium"
            >
              {t('blog')}
            </button>

            {/* Language Switcher */}
            <div className="flex items-center gap-2 border-l border-zinc-300 dark:border-zinc-700 pl-4">
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

            {/* Theme Switcher */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
              title={theme === 'light' ? 'Переключить на темную тему' : 'Переключить на светлую тему'}
            >
              {theme === 'light' ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
            </button>

            {/* CTA Button */}
            <Link
              to="/register"
              className="bg-zinc-900 dark:bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-zinc-800 dark:hover:bg-red-700 transition-colors font-semibold"
            >
              {t('register')}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-zinc-900 dark:text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black">
            <div className="px-4 py-4 space-y-3">
              <button
                onClick={handleHomeClick}
                className="block w-full text-left text-zinc-600 dark:text-gray-300 hover:text-zinc-900 dark:hover:text-white transition-colors font-medium py-2"
              >
                {t('home')}
              </button>

              <button
                onClick={handleServicesClick}
                className="block w-full text-left text-zinc-600 dark:text-gray-300 hover:text-zinc-900 dark:hover:text-white transition-colors font-medium py-2"
              >
                {t('services')}
              </button>

              <span className="block text-zinc-400 dark:text-gray-500 font-medium py-2 cursor-default">
                YouTube
              </span>

              <a
                href="https://www.facebook.com/WingChunBielskoBiala"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="block text-zinc-600 dark:text-gray-300 hover:text-zinc-900 dark:hover:text-white transition-colors font-medium py-2"
              >
                Facebook
              </a>

              <a
                href="https://www.instagram.com/vietwingchun/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="block text-zinc-600 dark:text-gray-300 hover:text-zinc-900 dark:hover:text-white transition-colors font-medium py-2"
              >
                Instagram
              </a>

              <button
                onClick={handleBlogClick}
                className="block w-full text-left text-zinc-600 dark:text-gray-300 hover:text-zinc-900 dark:hover:text-white transition-colors font-medium py-2"
              >
                {t('blog')}
              </button>

              {/* Language Switcher */}
              <div className="flex items-center gap-4 pt-4 border-t border-zinc-200 dark:border-zinc-800">
                <button
                  onClick={() => {
                    setLanguage('en')
                    setIsMenuOpen(false)
                  }}
                  className={`text-2xl transition-opacity ${language === 'en' ? 'opacity-100' : 'opacity-40 hover:opacity-70'}`}
                  title="English"
                >
                  🇬🇧
                </button>
                <button
                  onClick={() => {
                    setLanguage('pl')
                    setIsMenuOpen(false)
                  }}
                  className={`text-2xl transition-opacity ${language === 'pl' ? 'opacity-100' : 'opacity-40 hover:opacity-70'}`}
                  title="Polski"
                >
                  🇵🇱
                </button>

                {/* Theme Switcher */}
                <button
                  onClick={() => {
                    toggleTheme()
                  }}
                  className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                  title={theme === 'light' ? 'Переключить на темную тему' : 'Переключить на светлую тему'}
                >
                  {theme === 'light' ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  )}
                </button>
              </div>

              {/* CTA Button */}
              <Link
                to="/register"
                onClick={() => setIsMenuOpen(false)}
                className="block text-center bg-zinc-900 dark:bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-zinc-800 dark:hover:bg-red-700 transition-colors font-semibold mt-4"
              >
                {t('register')}
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
