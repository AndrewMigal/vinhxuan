import matter from 'gray-matter'

/**
 * Парсит Markdown контент с frontmatter и извлекает контент для выбранного языка
 * @param {string} markdownContent - Полный MD контент
 * @param {string} language - Язык (en, pl)
 * @returns {Object} { frontmatter, content }
 */
export function parseMarkdown(markdownContent, language = 'en') {
  // Извлечь frontmatter
  const { data: frontmatter, content } = matter(markdownContent)

  // Найти секцию для нужного языка
  const sections = content.split('<!-- LANG:')

  let languageContent = ''
  for (let section of sections) {
    if (section.startsWith(language.toUpperCase())) {
      languageContent = section.replace(language.toUpperCase() + ' -->', '').trim()
      break
    }
  }

  // Fallback на EN если язык не найден
  if (!languageContent) {
    for (let section of sections) {
      if (section.startsWith('EN')) {
        languageContent = section.replace('EN -->', '').trim()
        break
      }
    }
  }

  return {
    frontmatter,
    content: languageContent
  }
}

/**
 * Получает предыдущую и следующую статью для навигации
 * @param {string} currentSlug - Текущий slug
 * @param {Array} articlesOrder - Массив всех slugs в порядке
 * @returns {Object} { prev, next }
 */
export function getNextPrevArticles(currentSlug, articlesOrder) {
  const currentIndex = articlesOrder.indexOf(currentSlug)

  return {
    prev: currentIndex > 0 ? articlesOrder[currentIndex - 1] : null,
    next: currentIndex < articlesOrder.length - 1 ? articlesOrder[currentIndex + 1] : null
  }
}
