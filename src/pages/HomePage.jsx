import { Link } from 'react-router-dom'
import Header from '../components/Header'
import { useLanguage } from '../contexts/LanguageContext'

function HomePage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />

      {/* Hero Section - Home */}
      <section id="home" className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              {t('welcomeTitle')}
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              {t('welcomeSubtitle')}
            </p>
            <div className="flex gap-4 justify-center">
              <Link
                to="/register"
                className="bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors"
              >
                {t('startTraining')}
              </Link>
              <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg text-lg font-semibold border-2 border-indigo-600 hover:bg-indigo-50 transition-colors">
                {t('learnMore')}
              </button>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="text-4xl mb-4">🥋</div>
              <h3 className="text-xl font-semibold mb-2">{t('traditions')}</h3>
              <p className="text-gray-600">
                {t('traditionsDesc')}
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="text-4xl mb-4">💪</div>
              <h3 className="text-xl font-semibold mb-2">{t('strength')}</h3>
              <p className="text-gray-600">
                {t('strengthDesc')}
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="text-4xl mb-4">🧘</div>
              <h3 className="text-xl font-semibold mb-2">{t('balance')}</h3>
              <p className="text-gray-600">
                {t('balanceDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            {t('ourServices')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold mb-4 text-indigo-600">{t('groupClasses')}</h3>
              <p className="text-gray-600 mb-4">
                {t('groupClassesDesc')}
              </p>
              <p className="text-lg font-semibold text-gray-900">{t('groupClassesPrice')}</p>
            </div>

            <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold mb-4 text-indigo-600">{t('privateClasses')}</h3>
              <p className="text-gray-600 mb-4">
                {t('privateClassesDesc')}
              </p>
              <p className="text-lg font-semibold text-gray-900">{t('privateClassesPrice')}</p>
            </div>

            <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold mb-4 text-indigo-600">{t('kidsGroups')}</h3>
              <p className="text-gray-600 mb-4">
                {t('kidsGroupsDesc')}
              </p>
              <p className="text-lg font-semibold text-gray-900">{t('kidsGroupsPrice')}</p>
            </div>

            <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold mb-4 text-indigo-600">{t('masterClasses')}</h3>
              <p className="text-gray-600 mb-4">
                {t('masterClassesDesc')}
              </p>
              <p className="text-lg font-semibold text-gray-900">{t('masterClassesPrice')}</p>
            </div>

            <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold mb-4 text-indigo-600">{t('sparring')}</h3>
              <p className="text-gray-600 mb-4">
                {t('sparringDesc')}
              </p>
              <p className="text-lg font-semibold text-gray-900">{t('sparringPrice')}</p>
            </div>

            <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold mb-4 text-indigo-600">{t('onlineLearning')}</h3>
              <p className="text-gray-600 mb-4">
                {t('onlineLearningDesc')}
              </p>
              <p className="text-lg font-semibold text-gray-900">{t('onlineLearningPrice')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            {t('blogTitle')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{t('blogPost1Title')}</h3>
                <p className="text-gray-600 mb-4">
                  {t('blogPost1Desc')}
                </p>
                <a href="#" className="text-indigo-600 hover:text-indigo-700 font-medium">
                  {t('readMore')}
                </a>
              </div>
            </article>

            <article className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{t('blogPost2Title')}</h3>
                <p className="text-gray-600 mb-4">
                  {t('blogPost2Desc')}
                </p>
                <a href="#" className="text-indigo-600 hover:text-indigo-700 font-medium">
                  {t('readMore')}
                </a>
              </div>
            </article>

            <article className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-r from-purple-500 to-pink-500"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{t('blogPost3Title')}</h3>
                <p className="text-gray-600 mb-4">
                  {t('blogPost3Desc')}
                </p>
                <a href="#" className="text-indigo-600 hover:text-indigo-700 font-medium">
                  {t('readMore')}
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">VinhXuan</h3>
            <p className="text-gray-400 mb-6">
              {t('footerTagline')}
            </p>
            <div className="flex justify-center gap-6">
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">
                YouTube
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">
                Facebook
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">
                Instagram
              </a>
            </div>
            <p className="text-gray-500 text-sm mt-8">
              {t('copyright')}
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default HomePage