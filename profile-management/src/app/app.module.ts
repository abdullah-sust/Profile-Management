import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FooterComponent } from './footer/footer.component';
import { ProfileComponent } from './profile/profile.component';
import { routing } from './app.routes';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewProfileComponent } from './new-profile/new-profile.component';
import { ProfileService } from './services/profile-service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FaceComponent } from './face/face.component';
import { AuthService } from '../app/auth.service';
import { Person } from './model';
import { AllProfilesComponent } from './all-profiles/all-profiles.component';
import { NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    FooterComponent,
    ProfileComponent,
    NewProfileComponent,
    FaceComponent,
    AllProfilesComponent
  ],
  imports: [
    HttpModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule,
    routing
  ],
  providers: [
    ProfileService,
    AuthService,
    Person
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
