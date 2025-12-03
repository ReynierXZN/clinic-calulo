import { Routes } from '@angular/router';
import { DailyServiceRecord } from './daily-service-record/daily-service-record';

export const routes: Routes = [
  { path: '', redirectTo: 'daily-service-record', pathMatch: 'full' },
  { path: 'daily-service-record', component: DailyServiceRecord },

  
];
