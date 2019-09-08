import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { PersonaComponent } from './persona/persona.component';
import { ProfesorComponent } from './profesor/profesor.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculadoraComponent,
    PersonaComponent,
    ProfesorComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
