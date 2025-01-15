import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importar FormsModule
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, DashboardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatCardModule,
    MatIconModule,
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
