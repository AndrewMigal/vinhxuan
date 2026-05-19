import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import RegisterPage from './pages/RegisterPage'
import BlogDetailPage from './pages/BlogDetailPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/blog/:slug" element={<BlogDetailPage />} />
    </Routes>
  )
}

export default App
