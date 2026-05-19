import { Link } from 'react-router-dom'
import Header from '../components/Header'
import { useLanguage } from '../contexts/LanguageContext'
import { useState, useEffect } from 'react'

function HomePage() {
  const { t } = useLanguage()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const parallaxStyle = {
    transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-black to-zinc-900 text-white overflow-hidden">
      <Header />

      {/* Decorative brush strokes - background */}
      <div className="fixed inset-0 pointer-events-none opacity-10">
        <svg className="absolute top-20 right-0 w-96 h-96" viewBox="0 0 200 200">
          <path
            d="M10,100 Q50,20 100,40 T190,100"
            stroke="white"
            strokeWidth="40"
            fill="none"
            strokeLinecap="round"
            opacity="0.3"
          />
        </svg>
        <svg className="absolute bottom-20 left-0 w-96 h-96" viewBox="0 0 200 200">
          <path
            d="M10,50 Q90,30 150,80 T190,150"
            stroke="#dc2626"
            strokeWidth="50"
            fill="none"
            strokeLinecap="round"
            opacity="0.2"
          />
        </svg>
      </div>

      {/* Hero Section */}
      <section
        id="home"
        className={`relative pt-32 pb-20 px-4 transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Text */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-block">
                  <div className="w-16 h-1 bg-red-600 mb-6"></div>
                </div>
                <h1
                  className="text-6xl lg:text-7xl font-bold leading-tight tracking-tight"
                  style={{
                    fontFamily: '"Bebas Neue", "Impact", sans-serif',
                    textShadow: '4px 4px 0px rgba(220, 38, 38, 0.3)'
                  }}
                >
                  {t('welcomeTitle')}
                </h1>
                <div className="w-32 h-0.5 bg-gradient-to-r from-red-600 to-transparent"></div>
              </div>

              <p className="text-xl text-zinc-300 leading-relaxed max-w-xl" style={{ fontFamily: '"Lato", sans-serif' }}>
                {t('welcomeSubtitle')}
              </p>

              <div className="flex gap-4 pt-4">
                <Link
                  to="/register"
                  className="group relative px-8 py-4 bg-red-600 text-white font-semibold overflow-hidden transition-all duration-300 hover:scale-105"
                >
                  <span className="relative z-10">{t('startTraining')}</span>
                  <div className="absolute inset-0 bg-red-700 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                </Link>

                <button
                  className="px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-semibold transition-all duration-300"
                >
                  {t('learnMore')}
                </button>
              </div>
            </div>

            {/* Right side - Visual element */}
            <div className="relative h-96 lg:h-[500px]" style={parallaxStyle}>
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Animated circle rings */}
                <div className="absolute w-64 h-64 rounded-full border border-red-600/30 animate-pulse"></div>
                <div className="absolute w-80 h-80 rounded-full border border-white/20 animation-delay-200"></div>
                <div className="absolute w-96 h-96 rounded-full border border-red-600/20 animation-delay-400"></div>

                {/* Center character */}
                <div className="relative z-10">
                  <div
                    className="text-9xl font-bold text-white/10 select-none"
                    style={{
                      fontFamily: 'serif',
                      writingMode: 'vertical-rl',
                      textOrientation: 'upright',
                      letterSpacing: '0.5rem'
                    }}
                  >
                    武
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* About Section */}
          <div className="mt-20 bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 backdrop-blur-sm border border-zinc-800 p-8 lg:p-12">
            {/* Top accent line */}
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-red-600 via-red-600/50 to-transparent"></div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
              {/* Photo placeholder */}
              <div className="lg:col-span-2">
                <div className="relative aspect-square bg-gradient-to-br from-zinc-800 to-zinc-900 border-2 border-zinc-700 flex items-center justify-center overflow-hidden">
                  {/* Placeholder with icon */}
                  <div className="text-center text-zinc-600">
                    <div className="text-8xl mb-4">👤</div>
                    <p className="text-sm">Photo placeholder</p>
                  </div>
                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-t-red-600/20 border-l-[40px] border-l-transparent"></div>
                  <div className="absolute bottom-0 left-0 w-0 h-0 border-b-[40px] border-b-red-600/20 border-r-[40px] border-r-transparent"></div>
                </div>
              </div>

              {/* Text content */}
              <div className="lg:col-span-3 space-y-6">
                <div>
                  <div className="w-16 h-1 bg-red-600 mb-4"></div>
                  <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
                    {t('aboutTitle')}
                  </h2>
                </div>

                <div className="space-y-4 text-zinc-300 text-lg leading-relaxed">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                  </p>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                  <blockquote className="border-l-4 border-red-600 pl-6 italic text-zinc-400 py-2">
                    "Text placeholder - your quote here"
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-24 px-4 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-5xl font-bold mb-4 inline-block relative"
              style={{ fontFamily: '"Bebas Neue", sans-serif' }}
            >
              {t('ourServices')}
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: t('groupClasses'), desc: t('groupClassesDesc'), price: t('groupClassesPrice') },
              { title: t('privateClasses'), desc: t('privateClassesDesc'), price: t('privateClassesPrice') },
              { title: t('kidsGroups'), desc: t('kidsGroupsDesc'), price: t('kidsGroupsPrice') },
              { title: t('masterClasses'), desc: t('masterClassesDesc'), price: t('masterClassesPrice') },
              { title: t('sparring'), desc: t('sparringDesc'), price: t('sparringPrice') },
              { title: t('onlineLearning'), desc: t('onlineLearningDesc'), price: t('onlineLearningPrice') }
            ].map((service, idx) => (
              <div
                key={idx}
                className="group relative bg-black border border-zinc-800 p-6 hover:border-red-600 transition-all duration-300 overflow-hidden"
              >
                {/* Hover effect background */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
                      {service.title}
                    </h3>
                    <div className="w-8 h-0.5 bg-red-600 group-hover:w-12 transition-all"></div>
                  </div>

                  <p className="text-zinc-400 mb-6 leading-relaxed min-h-[80px]">
                    {service.desc}
                  </p>

                  <div className="pt-4 border-t border-zinc-800">
                    <p className="text-lg font-semibold text-red-500">{service.price}</p>
                  </div>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-t-red-600/20 border-l-[40px] border-l-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-5xl font-bold mb-4"
              style={{ fontFamily: '"Bebas Neue", sans-serif' }}
            >
              {t('blogTitle')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { slug: 'history-of-wing-chun', title: t('blogPost1Title'), desc: t('blogPost1Desc'), gradient: 'from-zinc-900 to-zinc-800' },
              { slug: 'breathing-techniques', title: t('blogPost2Title'), desc: t('blogPost2Desc'), gradient: 'from-zinc-800 to-zinc-700' },
              { slug: 'philosophy-of-martial-arts', title: t('blogPost3Title'), desc: t('blogPost3Desc'), gradient: 'from-zinc-700 to-zinc-600' }
            ].map((post, idx) => (
              <Link
                key={idx}
                to={`/blog/${post.slug}`}
                className="block group bg-black border border-zinc-800 overflow-hidden hover:border-red-600 transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              >
                <article>
                  <div className={`h-56 bg-gradient-to-br ${post.gradient} relative overflow-hidden`}>
                    {/* Decorative overlay */}
                    <div className="absolute inset-0 bg-red-600/0 group-hover:bg-red-600/20 transition-all duration-500"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-8xl font-bold text-white/5">武</div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-red-500 transition-colors" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
                      {post.title}
                    </h3>
                    <p className="text-zinc-400 mb-4 leading-relaxed">
                      {post.desc}
                    </p>
                    <span className="inline-flex items-center gap-2 text-red-500 hover:text-red-400 font-medium">
                      {t('readMore')}
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-black border-t border-zinc-800 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h3
              className="text-3xl font-bold mb-4"
              style={{ fontFamily: '"Bebas Neue", sans-serif' }}
            >
              Yuen Chai Wan Wing Chun
            </h3>
            <p className="text-zinc-400 mb-4 max-w-md mx-auto">
              {t('footerTagline')}
            </p>

            {/* Location */}
            <div className="text-zinc-500 mb-8">
              <p className="flex items-center justify-center gap-2">
                <span>📍</span>
                <span>{t('footerLocation')}</span>
              </p>
            </div>

            <div className="flex justify-center gap-8 mb-8">
              {['YouTube', 'Facebook', 'Instagram'].map((social) => (
                <a
                  key={social}
                  href={`https://${social.toLowerCase()}.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-red-500 transition-colors font-medium"
                >
                  {social}
                </a>
              ))}
            </div>

            <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-zinc-800 to-transparent mx-auto mb-6"></div>

            <p className="text-zinc-600 text-sm">
              {t('copyright')}
            </p>
          </div>
        </div>

        {/* Decorative corner elements */}
        <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-red-600/20"></div>
        <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-red-600/20"></div>
      </footer>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Lato:wght@300;400;700&display=swap');

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.5;
          }
        }

        .animation-delay-200 {
          animation: pulse 3s infinite;
          animation-delay: 200ms;
        }

        .animation-delay-400 {
          animation: pulse 3s infinite;
          animation-delay: 400ms;
        }
      `}</style>
    </div>
  )
}

export default HomePage
