import { initializeApp } from 'firebase/app';

// Needed to declare global variable for app check debug token
// declare global {
//   interface Window {
//     FIREBASE_APPCHECK_DEBUG_TOKEN: boolean;
//   }
// }

const firebaseConfig = {
  "projectId": "aaaa-generator-final-dev",
  "appId": "1:225312462474:web:ae565dc22742c938417f73",
  "storageBucket": "aaaa-generator-final-dev.firebasestorage.app",
  "apiKey": "AIzaSyBPuhf4_Aqd1HaxdV3NPQUpHDloGBLJzuE",
  "authDomain": "aaaa-generator-final-dev.firebaseapp.com",
  "messagingSenderId": "225312462474"
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
