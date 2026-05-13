import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="text-2xl font-bold text-indigo-600">VinhXuan</div>
            <Link
              to="/register"
              className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Записаться
            </Link>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
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
      </main>
    </div>
  )
}

export default HomePage