import { createI18n } from 'vue-i18n'

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en: {
      welcome_message: 'Welcome to our application!',
    },
    hi: {
      welcome_message: 'हमारे अनुप्रयोग में आपका स्वागत है!',
    },
    mr: {
      welcome_message: 'आमच्या अॅप्लिकेशनमध्ये तुमचे स्वागत आहे!',
    },
    kn: {
      welcome_message: 'ನಮ್ಮ ಅಪ್ಲಿಕೇಶನ್‌ಗೆ ಸ್ವಾಗತ!',
    },
    gu: {
      welcome_message: 'આપણી એપ્લિકેશનમાં આપનું સ્વાગત છે!',
    },
  },
})
export default i18n;