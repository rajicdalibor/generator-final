import { initializeApp } from 'firebase/app';

// Needed to declare global variable for app check debug token
// declare global {
//   interface Window {
//     FIREBASE_APPCHECK_DEBUG_TOKEN: boolean;
//   }
// }

const firebaseConfig = {
  "projectId": "najnoviji-dev",
  "appId": "1:312694616614:web:06ac8482034ee4c4666ce7",
  "storageBucket": "najnoviji-dev.firebasestorage.app",
  "apiKey": "AIzaSyD2rBmXcesNsH7ERfz7udp3jWlXYeEQlBs",
  "authDomain": "najnoviji-dev.firebaseapp.com",
  "messagingSenderId": "312694616614"
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
