import { Link } from 'react-router-dom'
import Header from '../components/Header'
import { useLanguage } from '../contexts/LanguageContext'
import { useState, useEffect } from 'react'
import blogImage from '../assets/images.jpeg'

function HomePage() {
  const { t, language } = useLanguage()
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
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 via-white to-zinc-100 dark:from-zinc-950 dark:via-black dark:to-zinc-900 text-zinc-900 dark:text-white dark:text-white overflow-hidden">
      <Header />

      {/* Decorative brush strokes - background */}
      <div className="fixed inset-0 pointer-events-none opacity-10">
        <svg className="absolute top-20 right-0 w-96 h-96" viewBox="0 0 200 200">
          <path
            d="M10,100 Q50,20 100,40 T190,100"
            className="stroke-zinc-900 dark:stroke-red-600"
            strokeWidth="40"
            fill="none"
            strokeLinecap="round"
            opacity="0.3"
          />
        </svg>
        <svg className="absolute bottom-20 left-0 w-96 h-96" viewBox="0 0 200 200">
          <path
            d="M10,50 Q90,30 150,80 T190,150"
            className="stroke-zinc-900 dark:stroke-red-600"
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
                  <div className="w-16 h-1 bg-zinc-900 dark:bg-red-600 mb-6"></div>
                </div>
                <h1
                  className="text-6xl lg:text-7xl font-medium leading-tight tracking-wide"
                  style={{
                    fontFamily: '"Lato", sans-serif',
                    fontWeight: 500
                  }}
                >
                  {t('welcomeTitle')}
                </h1>
                <div className="w-32 h-0.5 bg-gradient-to-r from-zinc-900 dark:from-red-600 dark:from-red-600 to-transparent"></div>
              </div>

              <p className="text-xl text-zinc-600 leading-relaxed max-w-xl" style={{ fontFamily: '"Lato", sans-serif' }}>
                {t('welcomeSubtitle')}
              </p>

              <div className="flex gap-4 pt-4">
                <Link
                  to="/register"
                  className="group relative px-8 py-4 bg-zinc-900 dark:bg-red-600 text-white font-semibold overflow-hidden transition-all duration-300 hover:scale-105"
                >
                  <span className="relative z-10">{t('startTraining')}</span>
                  <div className="absolute inset-0 bg-zinc-800 dark:bg-red-700 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                </Link>

                <button
                  className="px-8 py-4 bg-transparent border-2 border-zinc-900 dark:border-red-600 text-zinc-900 dark:text-white hover:bg-zinc-900 dark:hover:bg-red-600 hover:text-white font-semibold transition-all duration-300"
                >
                  {t('learnMore')}
                </button>
              </div>
            </div>

            {/* Right side - Visual element */}
            <div className="relative h-96 lg:h-[500px]" style={parallaxStyle}>
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Animated circle rings */}
                <div className="absolute w-64 h-64 rounded-full border border-zinc-900/30 dark:border-red-600/30 animate-pulse"></div>
                <div className="absolute w-80 h-80 rounded-full border border-zinc-900/20 dark:border-red-600/20 animation-delay-200"></div>
                <div className="absolute w-96 h-96 rounded-full border border-zinc-900/20 dark:border-red-600/20 animation-delay-400"></div>

                {/* Center character */}
                <div className="relative z-10">
                  <div
                    className="text-9xl font-bold text-zinc-900 dark:text-red-600/10 select-none"
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
          <div className="mt-20 bg-white dark:bg-zinc-900 shadow-lg dark:shadow-zinc-800 border border-zinc-200 dark:border-zinc-800 p-8 lg:p-12 relative">
            {/* Top accent line */}
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-zinc-900 dark:from-red-600 via-zinc-900/50 dark:via-red-600/50 to-transparent"></div>

            <div className="space-y-6">
              <div>
                <div className="w-16 h-1 bg-zinc-900 dark:bg-red-600 mb-4"></div>
                <h2 className="text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-white mb-4" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
                  {t('aboutTitle')}
                </h2>
              </div>

              <div className="space-y-4 text-zinc-600 dark:text-zinc-300 text-lg leading-relaxed">
                <p>
                  {language === 'pl'
                    ? 'Andrew Migal praktykuje sztuki i sporty walki od ponad 10 lat, w tym boks, muay thai, grappling oraz escrimę. Równolegle z treningami bojowymi spędził około 10 lat na studiowaniu medytacji buddyjskiej Therawada pod okiem doświadczonych instruktorów i mnichów, koncentrując się na uważności i dyscyplinie umysłu.'
                    : 'Andrew Migal has been practicing martial arts and combat sports for over 10 years, including Boxing, Muay Thai, Grappling, and Escrima. Alongside his combat training, he spent about 10 years studying Theravada Buddhist meditation under the guidance of experienced instructors and monks, focusing on mindfulness and mental discipline.'
                  }
                </p>

                <h4 className="text-xl font-bold text-zinc-900 dark:text-white mt-6 mb-2" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
                  {language === 'pl' ? 'Odkrycie wewnętrznego Wing Chun' : 'Discovering Internal Wing Chun'}
                </h4>
                <p>
                  {language === 'pl'
                    ? 'Około ośmiu lat temu Andrew zetknął się z wewnętrznym Wing Chun, co całkowicie zmieniło jego perspektywę. Było to dla niego odkrycie — idealne połączenie funkcjonalnych sztuk walki, medytacji i koncentracji. Od tamtej pory wewnętrzne style kung-fu stały się jego głównym obszarem zainteresowań i pasją.'
                    : 'About eight years ago, Andrew came across internal Wing Chun, and it completely changed his perspective. For him, it was a revelation—a perfect mix of functional martial arts, meditation, and concentration. Since then, internal Kung Fu styles have become his main interest and focus.'
                  }
                </p>

                <h4 className="text-xl font-bold text-zinc-900 dark:text-white mt-6 mb-2" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
                  {language === 'pl' ? 'Trening i linia przekazu' : 'Training and Lineage'}
                </h4>
                <p>
                  {language === 'pl'
                    ? 'Jego droga w sztukach wewnętrznych rozpoczęła się od wietnamskiej linii Wing Chun wywodzącej się od Yuen Chai-wana (Te Konga) z Hanoi, gdzie uczył się od uczniów mistrzów Trinh Quoc Dinha i Mai Anh Chau.'
                    : 'His journey into the internal arts began with the Vietnamese Wing Chun lineage of Yuen Chai-wan (Te Kong) from Hanoi, learning from the followers of masters Trinh Quoc Dinh and Mai Anh Chau.'
                  }
                </p>
                <p>
                  {language === 'pl'
                    ? 'Chcąc lepiej zrozumieć mechanikę ruchu wewnętrznego, Andrew zgłębiał także inne style, takie jak Xingyi, Tongbei oraz I Liq Chuan. Podróżował do Azji Południowo-Wschodniej, aby rozwijać swoją praktykę, trenując z uczniami Trinh Quoc Dinha w Hanoi, gdzie z czasem zaczął również nauczać.'
                    : 'Looking to understand internal movement better, Andrew also explored other styles like Xingyi, Tongbei, and I Liq Chuan. He traveled to Southeast Asia to deepen his practice, training with Trinh Quoc Dinh\'s students in Hanoi, where he eventually ended up teaching as well.'
                  }
                </p>

                <h4 className="text-xl font-bold text-zinc-900 dark:text-white mt-6 mb-2" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
                  {language === 'pl' ? 'Obecna praktyka' : 'Current Practice'}
                </h4>
                <p>
                  {language === 'pl'
                    ? 'Obecnie Andrew kontynuuje swój trening online, studiując linię przekazu Trần Thúc Tiển (jednego z najbliższych uczniów Te Konga) pod okiem mistrza z Australii.'
                    : 'Currently, Andrew continues his training online, studying the lineage of Trần Thúc Tiển (one of Te Kong\'s closest disciples) under a master based in Australia.'
                  }
                </p>
                <p>
                  {language === 'pl'
                    ? 'Poprzez swoje nauczanie dąży do dzielenia się tym starym, niezmodernizowanym stylem Wing Chun z Foshan, łącząc praktyczną mechanikę ciała z wewnętrznym skupieniem i uważnością.'
                    : 'Through his teaching, he aims to share this old, unmodernized style of Foshan Wing Chun, combining practical body mechanics with internal focus and awareness.'
                  }
                </p>
              </div>
            </div>
            {/* Corner accent */}
            <div className="absolute bottom-0 right-0 w-0 h-0 border-b-[60px] border-b-zinc-900/20 dark:border-b-red-600/20 border-l-[60px] border-l-transparent"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-5xl font-bold mb-4 inline-block relative"
              style={{ fontFamily: '"Bebas Neue", sans-serif' }}
            >
              {t('ourServices')}
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-zinc-900 dark:via-red-600 to-transparent"></div>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: t('privateClasses'),
                desc: t('privateClassesDesc')
              },
              {
                title: t('masterClasses'),
                desc: language === 'pl'
                  ? 'Prowadzę zajęcia grupowe dla szkół, klubów i organizacji. Intensywne warsztaty z podstaw Wing Chun, filozofii i praktycznych technik walki.'
                  : 'I conduct group sessions for schools, clubs, and organizations. Intensive workshops covering Wing Chun fundamentals, philosophy, and practical combat techniques.'
              }
            ].map((service, idx) => (
              <div
                key={idx}
                className="group relative bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md dark:shadow-zinc-800 p-8 hover:border-zinc-900 dark:hover:border-red-600 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all duration-300 overflow-hidden"
              >
                {/* Hover effect background */}
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-3xl font-bold text-zinc-900 dark:text-white" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
                      {service.title}
                    </h3>
                    <div className="w-8 h-0.5 bg-zinc-900 dark:bg-red-600 group-hover:w-12 transition-all"></div>
                  </div>

                  <p className="text-zinc-600 dark:text-zinc-300 text-lg leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-t-zinc-900/20 dark:border-t-red-600/20 border-l-[40px] border-l-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
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

          <div className="max-w-2xl mx-auto">
            {[
              { slug: 'history-of-wing-chun', title: t('blogPost1Title'), desc: t('blogPost1Desc'), image: blogImage }
            ].map((post, idx) => (
              <Link
                key={idx}
                to={`/blog/${post.slug}`}
                className="block group bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md dark:shadow-zinc-800 overflow-hidden hover:border-zinc-900 dark:hover:border-red-600 transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              >
                <article>
                  <div className="h-56 relative overflow-hidden">
                    {post.image ? (
                      <>
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-zinc-900/0 group-hover:bg-zinc-900/30 transition-all duration-500"></div>
                      </>
                    ) : (
                      <>
                        <div className={`h-full bg-gradient-to-br ${post.gradient}`}></div>
                        <div className="absolute inset-0 bg-zinc-900/0 group-hover:bg-zinc-900/20 transition-all duration-500"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-8xl font-bold text-zinc-900 dark:text-white/5">武</div>
                        </div>
                      </>
                    )}
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-zinc-900 dark:text-white group-hover:text-zinc-700 transition-colors" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
                      {post.title}
                    </h3>
                    <p className="text-zinc-600 mb-4 leading-relaxed">
                      {post.desc}
                    </p>
                    <span className="inline-flex items-center gap-2 text-zinc-700 hover:text-zinc-600 font-medium">
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
      <footer className="relative bg-zinc-100 dark:bg-zinc-800 border-t border-zinc-300 dark:border-zinc-700 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            {/* Left - About */}
            <div className="text-center md:text-left">
              <h3
                className="text-3xl font-bold mb-4 text-zinc-900 dark:text-white"
                style={{ fontFamily: '"Bebas Neue", sans-serif' }}
              >
                Yuen Chai Wan Wing Chun
              </h3>
              <p className="text-zinc-600 dark:text-zinc-300">
                {t('footerTagline')}
              </p>
            </div>

            {/* Right - Contact */}
            <div className="text-center md:text-right">
              <h3
                className="text-2xl font-bold mb-4 text-zinc-700"
                style={{ fontFamily: '"Bebas Neue", sans-serif' }}
              >
                {t('contactTitle')}
              </h3>
              <div className="space-y-3 text-zinc-600 dark:text-zinc-300">
                <p className="flex items-center justify-center md:justify-end gap-2">
                  <span>📍</span>
                  <span>Nowosielecka 12, Warsaw, Poland</span>
                </p>
                <p className="flex items-center justify-center md:justify-end gap-2">
                  <span>💬</span>
                  <a
                    href="https://wa.me/48732804026"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-zinc-900 dark:text-white transition-colors"
                  >
                    WhatsApp: +48 732 804 026
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Bottom - Copyright */}
          <div className="text-center">
            <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-zinc-300 to-transparent mx-auto mb-6"></div>
            <p className="text-zinc-600 text-sm">
              {t('copyright')}
            </p>
          </div>
        </div>

        {/* Decorative corner elements */}
        <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-zinc-900/20 dark:border-red-600/20"></div>
        <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-zinc-900/20 dark:border-red-600/20"></div>
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
