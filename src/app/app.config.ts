import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes), provideFirebaseApp(() => initializeApp({ projectId: "calulo-clinicmanagement-app", appId: "1:267492710874:web:0e25e9f35bdfa4776988e3", storageBucket: "calulo-clinicmanagement-app.firebasestorage.app", apiKey: "AIzaSyAm9Oc6ZM4q7E9FM78qPJ0JaxQ4bVhtlxA", authDomain: "calulo-clinicmanagement-app.firebaseapp.com", messagingSenderId: "267492710874" })), provideFirestore(() => getFirestore())
  ]
};
