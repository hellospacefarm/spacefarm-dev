import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { ContactComponent } from './contact/contact';
import { PrivacyComponent } from './privacy/privacy';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'alpal/contact', component: ContactComponent },
  { path: 'alpal/privacy', component: PrivacyComponent },
];
