import { Link } from 'react-router-dom'
import Header from '../components/Header'
import { useLanguage } from '../contexts/LanguageContext'

function HomePage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section - Home */}
      <section id="home" className="pt-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              {t('welcomeTitle')}
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              {t('welcomeSubtitle')}
            </p>
            <div className="flex gap-4 justify-center">
              <Link
                to="/register"
                className="bg-white text-black px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-200 transition-colors"
              >
                {t('startTraining')}
              </Link>
              <button className="bg-black text-white px-8 py-3 rounded-lg text-lg font-semibold border-2 border-white hover:bg-gray-900 transition-colors">
                {t('learnMore')}
              </button>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-200">
              <div className="text-4xl mb-4">🥋</div>
              <h3 className="text-xl font-semibold mb-2 text-black">{t('traditions')}</h3>
              <p className="text-gray-700">
                {t('traditionsDesc')}
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-200">
              <div className="text-4xl mb-4">💪</div>
              <h3 className="text-xl font-semibold mb-2 text-black">{t('strength')}</h3>
              <p className="text-gray-700">
                {t('strengthDesc')}
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-200">
              <div className="text-4xl mb-4">🧘</div>
              <h3 className="text-xl font-semibold mb-2 text-black">{t('balance')}</h3>
              <p className="text-gray-700">
                {t('balanceDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-black mb-12">
            {t('ourServices')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-white border-2 border-black rounded-xl hover:shadow-2xl transition-shadow">
              <h3 className="text-2xl font-semibold mb-4 text-black">{t('groupClasses')}</h3>
              <p className="text-gray-700 mb-4">
                {t('groupClassesDesc')}
              </p>
              <p className="text-lg font-semibold text-black">{t('groupClassesPrice')}</p>
            </div>

            <div className="p-6 bg-white border-2 border-black rounded-xl hover:shadow-2xl transition-shadow">
              <h3 className="text-2xl font-semibold mb-4 text-black">{t('privateClasses')}</h3>
              <p className="text-gray-700 mb-4">
                {t('privateClassesDesc')}
              </p>
              <p className="text-lg font-semibold text-black">{t('privateClassesPrice')}</p>
            </div>

            <div className="p-6 bg-white border-2 border-black rounded-xl hover:shadow-2xl transition-shadow">
              <h3 className="text-2xl font-semibold mb-4 text-black">{t('kidsGroups')}</h3>
              <p className="text-gray-700 mb-4">
                {t('kidsGroupsDesc')}
              </p>
              <p className="text-lg font-semibold text-black">{t('kidsGroupsPrice')}</p>
            </div>

            <div className="p-6 bg-white border-2 border-black rounded-xl hover:shadow-2xl transition-shadow">
              <h3 className="text-2xl font-semibold mb-4 text-black">{t('masterClasses')}</h3>
              <p className="text-gray-700 mb-4">
                {t('masterClassesDesc')}
              </p>
              <p className="text-lg font-semibold text-black">{t('masterClassesPrice')}</p>
            </div>

            <div className="p-6 bg-white border-2 border-black rounded-xl hover:shadow-2xl transition-shadow">
              <h3 className="text-2xl font-semibold mb-4 text-black">{t('sparring')}</h3>
              <p className="text-gray-700 mb-4">
                {t('sparringDesc')}
              </p>
              <p className="text-lg font-semibold text-black">{t('sparringPrice')}</p>
            </div>

            <div className="p-6 bg-white border-2 border-black rounded-xl hover:shadow-2xl transition-shadow">
              <h3 className="text-2xl font-semibold mb-4 text-black">{t('onlineLearning')}</h3>
              <p className="text-gray-700 mb-4">
                {t('onlineLearningDesc')}
              </p>
              <p className="text-lg font-semibold text-black">{t('onlineLearningPrice')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-black mb-12">
            {t('blogTitle')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="bg-white border-2 border-black rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
              <div className="h-48 bg-gray-900"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-black">{t('blogPost1Title')}</h3>
                <p className="text-gray-700 mb-4">
                  {t('blogPost1Desc')}
                </p>
                <a href="#" className="text-black hover:text-gray-700 font-medium underline">
                  {t('readMore')}
                </a>
              </div>
            </article>

            <article className="bg-white border-2 border-black rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
              <div className="h-48 bg-gray-700"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-black">{t('blogPost2Title')}</h3>
                <p className="text-gray-700 mb-4">
                  {t('blogPost2Desc')}
                </p>
                <a href="#" className="text-black hover:text-gray-700 font-medium underline">
                  {t('readMore')}
                </a>
              </div>
            </article>

            <article className="bg-white border-2 border-black rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
              <div className="h-48 bg-gray-500"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-black">{t('blogPost3Title')}</h3>
                <p className="text-gray-700 mb-4">
                  {t('blogPost3Desc')}
                </p>
                <a href="#" className="text-black hover:text-gray-700 font-medium underline">
                  {t('readMore')}
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 border-t-4 border-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Yuen Chai Wan Wing Chun</h3>
            <p className="text-gray-300 mb-6">
              {t('footerTagline')}
            </p>
            <div className="flex justify-center gap-6">
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">
                YouTube
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">
                Facebook
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">
                Instagram
              </a>
            </div>
            <p className="text-gray-400 text-sm mt-8">
              {t('copyright')}
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default HomePage