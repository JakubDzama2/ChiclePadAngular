import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { NotesComponent } from './notes/notes.component';
import { AuthenticationService } from './authentication/authentication.service';
import { NotesService } from './notes/notes.service';
import { DiariesComponent } from './diaries/diaries.component';
import { DiariesService } from './diaries/diaries.service';
import { GoalsComponent } from './goals/goals.component';
import { GoalsService } from './goals/goals.service';


@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    NotesComponent,
    DiariesComponent,
    GoalsComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthenticationService, NotesService, DiariesService, GoalsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
