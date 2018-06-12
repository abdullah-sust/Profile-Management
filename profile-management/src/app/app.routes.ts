import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { ModuleWithProviders } from '@angular/core';
import { NewProfileComponent } from './new-profile/new-profile.component';
import { AllProfilesComponent } from './all-profiles/all-profiles.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent},
    { path: 'signup', component: SignupComponent},
    { path: 'profile/:email', component: ProfileComponent},
    { path: 'profileCreate', component: NewProfileComponent},
    { path: 'profiles', component: AllProfilesComponent},
    { path: '**', redirectTo: '/login'}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);