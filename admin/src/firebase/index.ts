import { initializeApp } from 'firebase/app';

// Needed to declare global variable for app check debug token
// declare global {
//   interface Window {
//     FIREBASE_APPCHECK_DEBUG_TOKEN: boolean;
//   }
// }

const firebaseConfig = {
  "projectId": "final-generator-dev",
  "appId": "1:189103463897:web:eb8c9a52ed7489765a4dc8",
  "storageBucket": "final-generator-dev.firebasestorage.app",
  "apiKey": "AIzaSyB9kqj4J_ms15NtLaIx6lNzCD4Z92wwxIs",
  "authDomain": "final-generator-dev.firebaseapp.com",
  "messagingSenderId": "189103463897"
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
