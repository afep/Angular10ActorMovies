import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {APP_BASE_HREF} from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { SearchComponent } from './components/search/search.component';


/*Angular Material*/
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';

import { ActorMoviesService } from "./services/actor-movies-service";
import { SortYearPipe } from './pipes/SortYearPipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SortYearPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule
  ],
  providers: [ ActorMoviesService, {provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
