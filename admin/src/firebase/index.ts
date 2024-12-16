import { initializeApp } from 'firebase/app';

// Needed to declare global variable for app check debug token
// declare global {
//   interface Window {
//     FIREBASE_APPCHECK_DEBUG_TOKEN: boolean;
//   }
// }

const firebaseConfig = {
  "projectId": "projekat-test-dev",
  "appId": "1:861157064299:web:836be2dabe93d22d80fb2e",
  "storageBucket": "projekat-test-dev.firebasestorage.app",
  "apiKey": "AIzaSyDfD4yIrstOMASCPd6L9-ujOIy7LDYoYIU",
  "authDomain": "projekat-test-dev.firebaseapp.com",
  "messagingSenderId": "861157064299"
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
