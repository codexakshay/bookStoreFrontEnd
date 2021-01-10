import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Material Modules

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './components/header/header.component';
import { GridComponent } from './components/grid/grid.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { RelevanceComponent } from './components/relevance/relevance.component';
import { MatSelectModule } from '@angular/material/select';
import { PaginationComponent } from './components/pagination/pagination.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FooterComponent } from './components/footer/footer.component';
import { MatCardModule } from '@angular/material/card';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PlainHeaderComponent } from './components/plain-header/plain-header.component';
import { SignformComponent } from './components/signform/signform.component';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RelevanceComponent,
    GridComponent,
    PaginationComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    PlainHeaderComponent,
    SignformComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatSelectModule,
    MatPaginatorModule,
    MatCardModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
