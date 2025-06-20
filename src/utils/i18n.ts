import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import resources for client-side rendering
const resources = {
  en: {
    translation: {
      request: {
        // Step titles
        step1Title: "We'd love to learn more about you!",
        step1Subtitle: "We want to tailor to your needs!",
        step2Title: "What's your biggest challenge?",
        step2Subtitle: "Let's identify the main problem to solve.",
        step3Title: "How much engagement do you get?",
        step3Subtitle: "Understanding your interaction volume.",
        step4Title: "How interested are you in automation?",
        step4Subtitle: "Gauge your interest in this solution.",
        step5Title: "Let's stay in touch!",
        step5Subtitle: "We'll send you early access when it's ready—keep an eye on your DMs!",
        
        // Navigation
        back: "Back",
        next: "Next",
        submit: "Submit",
        sending: "Sending...",
        
        // Form labels
        creatorTypeLabel: "What type of creator are you?",
        influencer: "Influencer",
        influencerSub: "Personal blog, lifestyle…",
        coach: "Coach/Mentor",
        coachSub: "Business, fitness…",
        entrepreneur: "Entrepreneur",
        entrepreneurSub: "Products/services",
        followersCountLabel: "How many followers do you have?",
        platformLabel: "What's your main platform?",
        challengeLabel: "What's your biggest challenge with DMs?",
        timeChallenge: "Lack of time",
        timeChallengeSub: "I can't reply to everything",
        repetitiveInfo: "Repetitive info",
        repetitiveInfoSub: "Always the same questions",
        timeDMsLabel: "How much time do you spend on DMs daily?",
        dailyInteractionsLabel: "How many daily interactions do you receive?",
        missedOpportunitiesLabel: "How often do you miss opportunities?",
        paymentWillingnessLabel: "How much would you pay monthly for this solution?",
        automationInterestLabel: "How interested are you in AI that auto-captures data?",
        veryInterested: "Very interested",
        veryInterestedSub: "I need it now",
        interested: "Interested",
        interestedSub: "I'd like to try it",
        notInterested: "Not interested",
        notInterestedSub: "Maybe later",
        nameLabel: "Name",
        namePlaceholder: "Your full name",
        emailLabel: "Email",
        emailPlaceholder: "you@example.com",
        instagramLabel: "Instagram account",
        instagramPlaceholder: "@yourhandle",
        
        // Success messages
        successMessage: "We've received your info. We'll reach out soon with early access to heyfrwrd.me",
        followUs: "Follow us on",
        forMoreUpdates: "for more updates",
        thankYou: "Thank you for your time!",
        
        // Other labels
        rarely: "Rarely",
        rarelyFreq: "1-2 times/month",
        often: "Often",
        oftenFreq: "Several times/week",
        constantly: "Constantly",
        constantlyFreq: "Every day",
        lowPriceRange: "approx. $8-20 USD",
        midPriceRange: "approx. $30-100 USD",
        highPriceRange: "approx. $100+ USD",
      }
    }
  },
  es: {
    translation: {
      request: {
        // Step titles
        step1Title: "¡Nos encantaría saber más sobre ti!",
        step1Subtitle: "¡Queremos adaptarnos a tus necesidades!",
        step2Title: "¿Cuál es tu mayor desafío?",
        step2Subtitle: "Identifiquemos el principal problema a resolver.",
        step3Title: "¿Cuánto engagement recibes?",
        step3Subtitle: "Es importante entender el volumen de interacciones.",
        step4Title: "¿Qué tan interesado estás en la automatización?",
        step4Subtitle: "Evalúa tu interés en esta solución.",
        step5Title: "¡Nos mantendremos en contacto contigo!",
        step5Subtitle: "Te enviaremos acceso anticipado cuando esté listo. Atento a tus DMs!",
        
        // Navigation
        back: "Atrás",
        next: "Siguiente",
        submit: "Enviar",
        sending: "Enviando...",
        
        // Form labels
        creatorTypeLabel: "¿Qué tipo de creador eres?",
        influencer: "Influencer",
        influencerSub: "Blog personal, estilo de vida…",
        coach: "Coach/Mentor",
        coachSub: "Negocios, fitness…",
        entrepreneur: "Emprendedor",
        entrepreneurSub: "Productos/servicios",
        followersCountLabel: "¿Cuántos seguidores tienes?",
        platformLabel: "¿Cuál es tu plataforma principal?",
        challengeLabel: "¿Cuál es tu mayor desafío con los DMs?",
        timeChallenge: "Falta de tiempo",
        timeChallengeSub: "No alcanzo a responder todo",
        repetitiveInfo: "Información repetitiva",
        repetitiveInfoSub: "Siempre las mismas preguntas",
        timeDMsLabel: "¿Cuánto tiempo dedicas a DMs diario?",
        dailyInteractionsLabel: "¿Cuántas interacciones diarias recibes?",
        missedOpportunitiesLabel: "¿Con qué frecuencia sientes que pierdes oportunidades?",
        paymentWillingnessLabel: "¿Cuánto pagarías al mes por esta solución?",
        automationInterestLabel: "¿Qué tan interesado estás en una IA que capture datos automáticamente?",
        veryInterested: "Muy interesado",
        veryInterestedSub: "Lo necesito ya",
        interested: "Interesado",
        interestedSub: "Me gustaría probarlo",
        notInterested: "Poco interesado",
        notInterestedSub: "Tal vez luego",
        nameLabel: "Nombre",
        namePlaceholder: "Tu nombre completo",
        emailLabel: "Email",
        emailPlaceholder: "tu@email.com",
        instagramLabel: "Cuenta de Instagram",
        instagramPlaceholder: "@tuusuario",
        
        // Success messages
        successMessage: "Hemos recibido tu información. Te contactaremos pronto con acceso anticipado a heyfrwrd.me",
        followUs: "Síguenos en",
        forMoreUpdates: "para más actualizaciones",
        thankYou: "¡Agradecemos tu tiempo!",
        
        // Other labels
        rarely: "Raramente",
        rarelyFreq: "1-2 veces/mes",
        often: "A menudo",
        oftenFreq: "Varias veces/semana",
        constantly: "Constantemente",
        constantlyFreq: "Todos los días",
        lowPriceRange: "aprox. 208–521 HNL",
        midPriceRange: "aprox. 781–2,614.99 HNL",
        highPriceRange: "aprox. 2,614.99+ HNL",
      }
    }
  }
};

// Create a function to initialize i18next on the client side
function initializeI18n() {
  // Configure i18next
  if (!i18next.isInitialized) {
    i18next
      .use(initReactI18next)
      .init({
        resources,
        lng: 'es', // Default to Spanish
        fallbackLng: 'en',
        interpolation: {
          escapeValue: false, // Not needed for React
        },
      });
  } else {
    // If i18next is already initialized (by Astro), just add react-i18next
    i18next.use(initReactI18next);
  }
  
  return i18next;
}

// Create and export an instance that lazy-initializes in the browser
let i18n = i18next;

// Only initialize in the browser environment
if (typeof window !== 'undefined') {
  i18n = initializeI18n();
  
  // Try to get the language from URL path (e.g., /en/ or /es/)
  const path = window.location.pathname;
  const langMatch = path.match(/^\/(en|es)\//);
  
  if (langMatch && langMatch[1]) {
    i18n.changeLanguage(langMatch[1]);
  }
}

export default i18n;
