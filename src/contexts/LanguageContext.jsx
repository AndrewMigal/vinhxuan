import { createContext, useContext, useState } from 'react'

const LanguageContext = createContext()

export const translations = {
  en: {
    // Header
    home: 'Home',
    services: 'Services',
    blog: 'Blog',
    register: 'Register',

    // Home Page Hero
    welcomeTitle: 'Welcome to Yuen Chai Wan Wing Chun Poland',
    welcomeSubtitle: 'Discover the ancient art of Yuen Chai Wan Wing Chun. Begin your journey to perfection of body and spirit.',
    startTraining: 'Start Training',
    learnMore: 'Learn More',

    // About Section
    aboutTitle: 'About Instructor',

    // Home Features
    traditions: 'Traditions',
    traditionsDesc: 'Learn ancient Wing Chun techniques passed down through generations',
    strength: 'Strength',
    strengthDesc: 'Develop physical strength and endurance through practice',
    balance: 'Balance',
    balanceDesc: 'Achieve harmony of body and mind through meditation and movement',

    // Services Section
    ourServices: 'Our Services',
    groupClasses: 'Group Classes',
    groupClassesDesc: 'Training in groups of up to 15 people with experienced instructors. Development of technique, strength and endurance in a friendly atmosphere.',
    groupClassesPrice: 'from 3000₽/month',
    privateClasses: 'Private Classes',
    privateClassesDesc: 'Personal approach to each student. Individual training program taking into account your goals and level of preparation.',
    privateClassesPrice: 'from 2000₽/class',
    kidsGroups: 'Kids Groups',
    kidsGroupsDesc: 'Special program for children aged 6 to 14. Development of discipline, coordination and self-confidence.',
    kidsGroupsPrice: 'from 2500₽/month',
    masterClasses: 'Master Classes',
    masterClassesDesc: 'Regular specialized classes from martial arts masters. In-depth study of techniques and philosophy.',
    masterClassesPrice: 'from 1500₽/class',
    sparring: 'Sparring',
    sparringDesc: 'Practical sparring under the supervision of experienced instructors. Application of technique in real conditions.',
    sparringPrice: 'Included in subscription',
    onlineLearning: 'Online Learning',
    onlineLearningDesc: 'Remote classes for those who cannot attend the gym. Training recordings and individual online consultations.',
    onlineLearningPrice: 'from 1500₽/month',

    // Blog Section
    blogTitle: 'Blog',
    blogPost1Title: 'History of Wing Chun',
    blogPost1Desc: 'Learn about the ancient roots and development of Wing Chun martial arts over the centuries.',
    blogPost2Title: 'Breathing Techniques',
    blogPost2Desc: 'Proper breathing is the foundation of effective practice. Study the basic techniques and exercises.',
    blogPost3Title: 'Philosophy of Martial Arts',
    blogPost3Desc: 'Martial arts are not just physical practice, but also a path of spiritual development.',
    readMore: 'Read more →',

    // Footer
    footerTagline: 'The path to perfection of body and spirit',
    footerLocation: 'Warsaw, Poland',
    contactTitle: 'Contact',
    copyright: '© 2024 Yuen Chai Wan Wing Chun. All rights reserved.',

    // Register Page
    registerTitle: 'Register for Classes',
    registerSubtitle: 'Fill out the form below and we\'ll contact you soon',
    name: 'Name',
    email: 'Email',
    phone: 'Phone',
    experienceLevel: 'Experience Level',
    beginner: 'Beginner',
    intermediate: 'Intermediate',
    advanced: 'Advanced',
    additionalInfo: 'Additional Information',
    submit: 'Submit Application',
    backToHome: 'Back to Home',
    successMessage: 'Thank you for registration! We will contact you soon.',
    errorMessage: 'Error sending form. Please try again.',
    noAdditionalInfo: 'No additional information',

    // Blog Detail Page
    publishedOn: 'Published on',
    by: 'By',
    readTime: 'min read',
    previousArticle: 'Previous Article',
    nextArticle: 'Next Article',
    articleNotFound: 'Article not found',
  },
  pl: {
    // Header
    home: 'Strona główna',
    services: 'Usługi',
    blog: 'Blog',
    register: 'Zapisz się',

    // Home Page Hero
    welcomeTitle: 'Witamy w Yuen Chai Wan Wing Chun Polska',
    welcomeSubtitle: 'Odkryj starożytną sztukę Yuen Chai Wan Wing Chun. Rozpocznij swoją podróż do doskonałości ciała i ducha.',
    startTraining: 'Rozpocznij trening',
    learnMore: 'Dowiedz się więcej',

    // About Section
    aboutTitle: 'O Instruktorze',

    // Home Features
    traditions: 'Tradycje',
    traditionsDesc: 'Naucz się starożytnych technik Wing Chun przekazywanych przez pokolenia',
    strength: 'Siła',
    strengthDesc: 'Rozwijaj siłę fizyczną i wytrzymałość poprzez praktykę',
    balance: 'Równowaga',
    balanceDesc: 'Osiągnij harmonię ciała i umysłu poprzez medytację i ruch',

    // Services Section
    ourServices: 'Nasze Usługi',
    groupClasses: 'Zajęcia Grupowe',
    groupClassesDesc: 'Trening w grupach do 15 osób z doświadczonymi instruktorami. Rozwój techniki, siły i wytrzymałości w przyjaznej atmosferze.',
    groupClassesPrice: 'od 3000₽/miesiąc',
    privateClasses: 'Zajęcia Indywidualne',
    privateClassesDesc: 'Osobiste podejście do każdego ucznia. Indywidualny program treningowy uwzględniający Twoje cele i poziom przygotowania.',
    privateClassesPrice: 'od 2000₽/zajęcia',
    kidsGroups: 'Grupy Dziecięce',
    kidsGroupsDesc: 'Specjalny program dla dzieci w wieku od 6 do 14 lat. Rozwój dyscypliny, koordynacji i pewności siebie.',
    kidsGroupsPrice: 'od 2500₽/miesiąc',
    masterClasses: 'Zajęcia Mistrzowskie',
    masterClassesDesc: 'Regularne specjalistyczne zajęcia prowadzone przez mistrzów sztuk walki. Pogłębione studium technik i filozofii.',
    masterClassesPrice: 'od 1500₽/zajęcia',
    sparring: 'Sparingi',
    sparringDesc: 'Praktyczne pojedynki pod nadzorem doświadczonych instruktorów. Zastosowanie techniki w rzeczywistych warunkach.',
    sparringPrice: 'Wliczone w abonament',
    onlineLearning: 'Nauka Online',
    onlineLearningDesc: 'Zdalne zajęcia dla tych, którzy nie mogą uczęszczać na salę. Nagrania treningów i indywidualne konsultacje online.',
    onlineLearningPrice: 'od 1500₽/miesiąc',

    // Blog Section
    blogTitle: 'Blog',
    blogPost1Title: 'Historia Wing Chun',
    blogPost1Desc: 'Dowiedz się o starożytnych korzeniach i rozwoju Wing Chun na przestrzeni wieków.',
    blogPost2Title: 'Techniki Oddychania',
    blogPost2Desc: 'Prawidłowe oddychanie jest podstawą efektywnej praktyki. Poznaj podstawowe techniki i ćwiczenia.',
    blogPost3Title: 'Filozofia Sztuk Walki',
    blogPost3Desc: 'Sztuki walki to nie tylko praktyka fizyczna, ale także droga rozwoju duchowego.',
    readMore: 'Czytaj dalej →',

    // Footer
    footerTagline: 'Droga do doskonałości ciała i ducha',
    footerLocation: 'Warszawa, Polska',
    contactTitle: 'Kontakt',
    copyright: '© 2024 Yuen Chai Wan Wing Chun. Wszelkie prawa zastrzeżone.',

    // Register Page
    registerTitle: 'Zapisz się na zajęcia',
    registerSubtitle: 'Wypełnij poniższy formularz, a skontaktujemy się z Tobą wkrótce',
    name: 'Imię',
    email: 'Email',
    phone: 'Telefon',
    experienceLevel: 'Poziom doświadczenia',
    beginner: 'Początkujący',
    intermediate: 'Średniozaawansowany',
    advanced: 'Zaawansowany',
    additionalInfo: 'Dodatkowe informacje',
    submit: 'Wyślij zgłoszenie',
    backToHome: 'Powrót do strony głównej',
    successMessage: 'Dziękujemy za rejestrację! Skontaktujemy się z Tobą wkrótce.',
    errorMessage: 'Błąd podczas wysyłania formularza. Spróbuj ponownie.',
    noAdditionalInfo: 'Brak dodatkowych informacji',

    // Blog Detail Page
    publishedOn: 'Opublikowano',
    by: 'Autor',
    readTime: 'min czytania',
    previousArticle: 'Poprzedni artykuł',
    nextArticle: 'Następny artykuł',
    articleNotFound: 'Artykuł nie znaleziony',
  }
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en')

  const t = (key) => {
    return translations[language][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
