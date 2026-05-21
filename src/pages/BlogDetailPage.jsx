import { useParams, Link } from 'react-router-dom'
import { useMemo } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import Header from '../components/Header'
import { useLanguage } from '../contexts/LanguageContext'
import { blogPosts, blogPostsOrder } from '../data/blog'
import { parseMarkdown, getNextPrevArticles } from '../utils/markdownParser'

function BlogDetailPage() {
  const { slug } = useParams()
  const { language, t } = useLanguage()

  // Парсинг контента (мемоизация для производительности)
  const articleData = useMemo(() => {
    const rawContent = blogPosts[slug]
    if (!rawContent) return null
    return parseMarkdown(rawContent, language)
  }, [slug, language])

  // Навигация prev/next
  const { prev, next } = useMemo(
    () => getNextPrevArticles(slug, blogPostsOrder),
    [slug]
  )

  // 404 обработка
  if (!articleData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-zinc-50 via-white to-zinc-100 dark:from-zinc-950 dark:via-black dark:to-zinc-900">
        <Header />
        <main className="max-w-4xl mx-auto px-4 pt-32 text-center">
          <h1 className="text-5xl font-bold text-zinc-900 mb-4" style={{fontFamily: 'Bebas Neue'}}>
            {t('articleNotFound')}
          </h1>
          <Link to="/" className="inline-block mt-8 px-8 py-4 bg-zinc-900 dark:bg-red-600 text-white font-semibold hover:bg-zinc-800 dark:hover:bg-red-700 transition-colors">
            {t('backToHome')}
          </Link>
        </main>
      </div>
    )
  }

  const { frontmatter, content } = articleData

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 via-white to-zinc-100 dark:from-zinc-950 dark:via-black dark:to-zinc-900 text-zinc-900 dark:text-white overflow-hidden">
      <Header />

      {/* Декоративный фон */}
      <div className="fixed inset-0 pointer-events-none opacity-10">
        <svg className="absolute top-20 right-0 w-96 h-96" viewBox="0 0 200 200">
          <path d="M10,100 Q50,20 100,40 T190,100" className="stroke-zinc-900 dark:stroke-red-600" strokeWidth="40" fill="none" strokeLinecap="round" opacity="0.2" />
        </svg>
        <div className="absolute top-40 left-1/2 transform -translate-x-1/2 text-9xl font-bold text-zinc-900/5 dark:text-red-600/5 select-none" style={{fontFamily: 'serif'}}>武</div>
      </div>

      <main className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        {/* Breadcrumb */}
        <nav className="mb-8 text-zinc-500 dark:text-zinc-400 text-sm">
          <Link to="/" className="hover:text-zinc-900 dark:text-white transition-colors">{t('home')}</Link>
          <span className="mx-2">›</span>
          <Link to="/#blog" className="hover:text-zinc-900 dark:text-white transition-colors">{t('blog')}</Link>
          <span className="mx-2">›</span>
          <span className="text-zinc-900">{t(frontmatter.titleKey)}</span>
        </nav>

        {/* Article Container */}
        <article className="relative bg-white dark:bg-zinc-900 shadow-xl dark:shadow-zinc-800 border border-zinc-200 dark:border-zinc-800 p-8 lg:p-12">
          {/* Top accent line */}
          <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-zinc-900 via-zinc-900/50 to-transparent"></div>

          {/* Article Header */}
          <header className="mb-12">
            <h1 className="text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-white mb-4" style={{fontFamily: 'Bebas Neue'}}>
              {t(frontmatter.titleKey)}
            </h1>
            <div className="w-32 h-1 bg-zinc-900 dark:bg-red-600 mb-6"></div>
            <div className="flex flex-wrap gap-4 text-sm text-zinc-500 dark:text-zinc-400">
              <span>{t('publishedOn')} {language === 'en' ? frontmatter.dateEn : frontmatter.datePl}</span>
              <span>•</span>
              <span>{t('by')} {language === 'en' ? frontmatter.authorEn : frontmatter.authorPl}</span>
              <span>•</span>
              <span>{frontmatter.readTime} {t('readTime')}</span>
              <span>•</span>
              <span className="text-zinc-700 dark:text-zinc-300">{frontmatter.category}</span>
            </div>
          </header>

          {/* Article Content - Styled Markdown */}
          <div className="prose prose-invert max-w-none">
            <ReactMarkdown
              components={{
                h1: ({node, ...props}) => <h1 className="text-4xl font-bold mb-6 text-zinc-900 dark:text-white" style={{fontFamily: 'Bebas Neue'}} {...props} />,
                h2: ({node, ...props}) => (
                  <div>
                    <div className="w-12 h-0.5 bg-zinc-900 dark:bg-red-600 mt-12 mb-3"></div>
                    <h2 className="text-3xl font-bold mb-4 text-zinc-900 dark:text-white" style={{fontFamily: 'Bebas Neue'}} {...props} />
                  </div>
                ),
                h3: ({node, ...props}) => <h3 className="text-2xl font-bold mt-8 mb-3 text-zinc-800 dark:text-zinc-200" style={{fontFamily: 'Bebas Neue'}} {...props} />,
                p: ({node, ...props}) => <p className="text-zinc-700 dark:text-zinc-300 text-lg leading-relaxed mb-6" {...props} />,
                ul: ({node, ...props}) => <ul className="list-disc list-inside text-zinc-700 dark:text-zinc-300 mb-6 space-y-2 ml-4" {...props} />,
                ol: ({node, ...props}) => <ol className="list-decimal list-inside text-zinc-700 dark:text-zinc-300 mb-6 space-y-2 ml-4" {...props} />,
                blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-zinc-900 dark:border-red-600 pl-6 italic text-zinc-600 dark:text-zinc-400 my-6 bg-zinc-50 dark:bg-zinc-800 py-4" {...props} />,
                code: ({node, inline, ...props}) => inline ?
                  <code className="bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded text-zinc-900 dark:text-white text-sm" {...props} /> :
                  <code className="block bg-zinc-50 dark:bg-zinc-900 p-4 rounded border border-zinc-200 dark:border-zinc-700 text-sm my-6 overflow-x-auto" {...props} />,
                a: ({node, ...props}) => <a className="text-zinc-700 dark:text-zinc-300 underline hover:text-zinc-600 dark:hover:text-zinc-100 transition-colors" {...props} />,
              }}
              remarkPlugins={[remarkGfm]}
            >
              {content}
            </ReactMarkdown>
          </div>

          {/* Corner accent */}
          <div className="absolute bottom-0 right-0 w-0 h-0 border-b-[60px] border-b-zinc-900/20 dark:border-b-red-600/20 border-l-[60px] border-l-transparent"></div>
        </article>

        {/* Navigation Footer */}
        <nav className="mt-12 flex flex-col sm:flex-row justify-between items-center gap-4">
          <Link
            to="/"
            className="text-zinc-600 hover:text-zinc-900 dark:text-white transition-colors flex items-center gap-2"
          >
            ← {t('backToHome')}
          </Link>

          <div className="flex gap-8">
            {prev && (
              <Link
                to={`/blog/${prev}`}
                className="text-zinc-600 hover:text-zinc-900 dark:text-white transition-colors flex items-center gap-2"
              >
                ← {t('previousArticle')}
              </Link>
            )}
            {next && (
              <Link
                to={`/blog/${next}`}
                className="text-zinc-600 hover:text-zinc-900 dark:text-white transition-colors flex items-center gap-2"
              >
                {t('nextArticle')} →
              </Link>
            )}
          </div>
        </nav>
      </main>

      {/* Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Lato:wght@300;400;700&display=swap');
      `}</style>
    </div>
  )
}

export default BlogDetailPage
