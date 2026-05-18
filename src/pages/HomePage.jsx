import { Link } from 'react-router-dom'
import Header from '../components/Header'

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />

      {/* Hero Section - Home */}
      <section id="home" className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Добро пожаловать в VinhXuan
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Откройте для себя древнее искусство вьетнамского боевого искусства.
              Начните свой путь к совершенству тела и духа.
            </p>
            <div className="flex gap-4 justify-center">
              <Link
                to="/register"
                className="bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors"
              >
                Начать обучение
              </Link>
              <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg text-lg font-semibold border-2 border-indigo-600 hover:bg-indigo-50 transition-colors">
                Узнать больше
              </button>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="text-4xl mb-4">🥋</div>
              <h3 className="text-xl font-semibold mb-2">Традиции</h3>
              <p className="text-gray-600">
                Изучайте древние техники, передаваемые из поколения в поколение
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="text-4xl mb-4">💪</div>
              <h3 className="text-xl font-semibold mb-2">Сила</h3>
              <p className="text-gray-600">
                Развивайте физическую силу и выносливость через практику
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="text-4xl mb-4">🧘</div>
              <h3 className="text-xl font-semibold mb-2">Баланс</h3>
              <p className="text-gray-600">
                Достигайте гармонии тела и разума через медитацию и движение
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Наши услуги
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold mb-4 text-indigo-600">Групповые занятия</h3>
              <p className="text-gray-600 mb-4">
                Тренировки в группах до 15 человек с опытными инструкторами.
                Развитие техники, силы и выносливости в дружной атмосфере.
              </p>
              <p className="text-lg font-semibold text-gray-900">от 3000₽/месяц</p>
            </div>

            <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold mb-4 text-indigo-600">Индивидуальные занятия</h3>
              <p className="text-gray-600 mb-4">
                Персональный подход к каждому ученику. Индивидуальная программа
                тренировок с учетом ваших целей и уровня подготовки.
              </p>
              <p className="text-lg font-semibold text-gray-900">от 2000₽/занятие</p>
            </div>

            <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold mb-4 text-indigo-600">Детские группы</h3>
              <p className="text-gray-600 mb-4">
                Специальная программа для детей от 6 до 14 лет.
                Развитие дисциплины, координации и уверенности в себе.
              </p>
              <p className="text-lg font-semibold text-gray-900">от 2500₽/месяц</p>
            </div>

            <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold mb-4 text-indigo-600">Мастер-классы</h3>
              <p className="text-gray-600 mb-4">
                Регулярные специализированные занятия от мастеров боевых искусств.
                Углубленное изучение техник и философии.
              </p>
              <p className="text-lg font-semibold text-gray-900">от 1500₽/занятие</p>
            </div>

            <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold mb-4 text-indigo-600">Спарринги</h3>
              <p className="text-gray-600 mb-4">
                Практические поединки под контролем опытных инструкторов.
                Применение техники в реальных условиях.
              </p>
              <p className="text-lg font-semibold text-gray-900">Включено в абонемент</p>
            </div>

            <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold mb-4 text-indigo-600">Онлайн обучение</h3>
              <p className="text-gray-600 mb-4">
                Дистанционные занятия для тех, кто не может посещать зал.
                Записи тренировок и индивидуальные консультации онлайн.
              </p>
              <p className="text-lg font-semibold text-gray-900">от 1500₽/месяц</p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Блог
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">История Vinh Xuan</h3>
                <p className="text-gray-600 mb-4">
                  Узнайте о древних корнях и развитии вьетнамского боевого искусства
                  на протяжении веков.
                </p>
                <a href="#" className="text-indigo-600 hover:text-indigo-700 font-medium">
                  Читать далее →
                </a>
              </div>
            </article>

            <article className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Техники дыхания</h3>
                <p className="text-gray-600 mb-4">
                  Правильное дыхание - основа эффективной практики.
                  Изучите основные техники и упражнения.
                </p>
                <a href="#" className="text-indigo-600 hover:text-indigo-700 font-medium">
                  Читать далее →
                </a>
              </div>
            </article>

            <article className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-r from-purple-500 to-pink-500"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Философия боевых искусств</h3>
                <p className="text-gray-600 mb-4">
                  Боевые искусства - это не только физическая практика,
                  но и путь духовного развития.
                </p>
                <a href="#" className="text-indigo-600 hover:text-indigo-700 font-medium">
                  Читать далее →
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
              Путь к совершенству тела и духа
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
              © 2024 VinhXuan. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default HomePage