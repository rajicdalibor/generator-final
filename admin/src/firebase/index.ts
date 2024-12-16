import { initializeApp } from 'firebase/app';

// Needed to declare global variable for app check debug token
// declare global {
//   interface Window {
//     FIREBASE_APPCHECK_DEBUG_TOKEN: boolean;
//   }
// }

const firebaseConfig = {
  "projectId": "test-final-dalibor-dev",
  "appId": "1:53252273258:web:c7f96999dc1351ff290613",
  "storageBucket": "test-final-dalibor-dev.firebasestorage.app",
  "apiKey": "AIzaSyB14xoyOLnFUypG2aXXQY9-jY8K4DJ2bDo",
  "authDomain": "test-final-dalibor-dev.firebaseapp.com",
  "messagingSenderId": "53252273258"
};

// Initialize Firebase app
export const app = initializeApp(firebaseConfig);

// Initialize Firebase analytics
// export const analytics = getAnalytics(app);

// Debug token for app check
// self.FIREBASE_APPCHECK_DEBUG_TOKEN = process.env.NODE_ENV === 'development';
// Initialize Firebase app check
// export const appCheck = initializeAppCheck(app, {
//   provider: new ReCaptchaEnterpriseProvider(import.meta.env.VITE_RE_CAPTCHA_KEY ?? ''),
//   isTokenAutoRefreshEnabled: true, // Set to true to allow auto-refresh.
// });
