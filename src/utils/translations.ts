// Simple direct translation helper for the MultiStepForm component

// Translation type
type TranslationType = {
  en: Record<string, string>;
  es: Record<string, string>;
};

// Translations
export const translations: TranslationType = {
  en: {
    "request.step1Title": "We'd love to learn more about you!",
    "request.step1Subtitle": "We want to tailor to your needs!",
    "request.step2Title": "What's your biggest challenge?",
    "request.step2Subtitle": "Let's identify the main problem to solve.",
    "request.step3Title": "How much engagement do you get?",
    "request.step3Subtitle": "Understanding your interaction volume.",
    "request.step4Title": "How interested are you in automation?",
    "request.step4Subtitle": "Gauge your interest in this solution.",
    "request.step5Title": "Let's stay in touch!",
    "request.step5Subtitle": "We'll send you early access when it's ready—keep an eye on your DMs!",
    "request.back": "Back",
    "request.next": "Next",
    "request.submit": "Submit",
    "request.sending": "Sending...",
    "request.creatorTypeLabel": "What type of creator are you?",
    "request.influencer": "Influencer",
    "request.influencerSub": "Personal blog, lifestyle…",
    "request.coach": "Coach/Mentor",
    "request.coachSub": "Business, fitness…",
    "request.entrepreneur": "Entrepreneur",
    "request.entrepreneurSub": "Products/services",
    "request.followersCountLabel": "How many followers do you have?",
    "request.platformLabel": "What's your main platform?",
    "request.challengeLabel": "What's your biggest challenge with DMs?",
    "request.timeChallenge": "Lack of time",
    "request.timeChallengeSub": "I can't reply to everything",
    "request.repetitiveInfo": "Repetitive info",
    "request.repetitiveInfoSub": "Always the same questions",
    "request.timeDMsLabel": "How much time do you spend on DMs daily?",
    "request.dailyInteractionsLabel": "How many daily interactions do you receive?",
    "request.missedOpportunitiesLabel": "How often do you miss opportunities?",
    "request.paymentWillingnessLabel": "How much would you pay monthly for this solution?",
    "request.automationInterestLabel": "How interested are you in AI that auto-captures data?",
    "request.veryInterested": "Very interested",
    "request.veryInterestedSub": "I need it now",
    "request.interested": "Interested",
    "request.interestedSub": "I'd like to try it",
    "request.notInterested": "Not interested",
    "request.notInterestedSub": "Maybe later",
    "request.nameLabel": "Name",
    "request.namePlaceholder": "Your full name",
    "request.emailLabel": "Email",
    "request.emailPlaceholder": "you@example.com",
    "request.instagramLabel": "Instagram account",
    "request.instagramPlaceholder": "@yourhandle",
    "request.successMessage": "We've received your info. We'll reach out soon with early access to heyfrwrd.me",
    "request.followUs": "Follow us on",
    "request.forMoreUpdates": "for more updates",
    "request.thankYou": "Thank you for your time!",
    "request.rarely": "Rarely",
    "request.rarelyFreq": "1-2 times/month",
    "request.often": "Often",
    "request.oftenFreq": "Several times/week",
    "request.constantly": "Constantly",
    "request.constantlyFreq": "Every day",
    "request.lowPriceRange": "approx. $8-20 USD",
    "request.midPriceRange": "approx. $30-100 USD",
    "request.highPriceRange": "approx. $100+ USD"
  },
  es: {
    "request.step1Title": "¡Nos encantaría saber más sobre ti!",
    "request.step1Subtitle": "¡Queremos adaptarnos a tus necesidades!",
    "request.step2Title": "¿Cuál es tu mayor desafío?",
    "request.step2Subtitle": "Identifiquemos el principal problema a resolver.",
    "request.step3Title": "¿Cuánto engagement recibes?",
    "request.step3Subtitle": "Es importante entender el volumen de interacciones.",
    "request.step4Title": "¿Qué tan interesado estás en la automatización?",
    "request.step4Subtitle": "Evalúa tu interés en esta solución.",
    "request.step5Title": "¡Nos mantendremos en contacto contigo!",
    "request.step5Subtitle": "Te enviaremos acceso anticipado cuando esté listo. Atento a tus DMs!",
    "request.back": "Atrás",
    "request.next": "Siguiente",
    "request.submit": "Enviar",
    "request.sending": "Enviando...",
    "request.creatorTypeLabel": "¿Qué tipo de creador eres?",
    "request.influencer": "Influencer",
    "request.influencerSub": "Blog personal, estilo de vida…",
    "request.coach": "Coach/Mentor",
    "request.coachSub": "Negocios, fitness…",
    "request.entrepreneur": "Emprendedor",
    "request.entrepreneurSub": "Productos/servicios",
    "request.followersCountLabel": "¿Cuántos seguidores tienes?",
    "request.platformLabel": "¿Cuál es tu plataforma principal?",
    "request.challengeLabel": "¿Cuál es tu mayor desafío con los DMs?",
    "request.timeChallenge": "Falta de tiempo",
    "request.timeChallengeSub": "No alcanzo a responder todo",
    "request.repetitiveInfo": "Información repetitiva",
    "request.repetitiveInfoSub": "Siempre las mismas preguntas",
    "request.timeDMsLabel": "¿Cuánto tiempo dedicas a DMs diario?",
    "request.dailyInteractionsLabel": "¿Cuántas interacciones diarias recibes?",
    "request.missedOpportunitiesLabel": "¿Con qué frecuencia sientes que pierdes oportunidades?",
    "request.paymentWillingnessLabel": "¿Cuánto pagarías al mes por esta solución?",
    "request.automationInterestLabel": "¿Qué tan interesado estás en una IA que capture datos automáticamente?",
    "request.veryInterested": "Muy interesado",
    "request.veryInterestedSub": "Lo necesito ya",
    "request.interested": "Interesado",
    "request.interestedSub": "Me gustaría probarlo",
    "request.notInterested": "Poco interesado",
    "request.notInterestedSub": "Tal vez luego",
    "request.nameLabel": "Nombre",
    "request.namePlaceholder": "Tu nombre completo",
    "request.emailLabel": "Email",
    "request.emailPlaceholder": "tu@email.com",
    "request.instagramLabel": "Cuenta de Instagram",
    "request.instagramPlaceholder": "@tuusuario",
    "request.successMessage": "Hemos recibido tu información. Te contactaremos pronto con acceso anticipado a heyfrwrd.me",
    "request.followUs": "Síguenos en",
    "request.forMoreUpdates": "para más actualizaciones",
    "request.thankYou": "¡Agradecemos tu tiempo!",
    "request.rarely": "Raramente",
    "request.rarelyFreq": "1-2 veces/mes",
    "request.often": "A menudo",
    "request.oftenFreq": "Varias veces/semana",
    "request.constantly": "Constantemente",
    "request.constantlyFreq": "Todos los días",
    "request.lowPriceRange": "aprox. 208–521 HNL",
    "request.midPriceRange": "aprox. 781–2,614.99 HNL",
    "request.highPriceRange": "aprox. 2,614.99+ HNL"
  }
};

// Translation function
export function getTranslation(key: string, language: 'en' | 'es'): string {
  return translations[language][key] || key;
}

// Get current language from URL
export function getCurrentLanguage(): 'en' | 'es' {
  if (typeof window !== 'undefined') {
    const path = window.location.pathname;
    if (path.startsWith('/en/')) {
      return 'en';
    }
  }
  return 'es'; // Default to Spanish
}
