import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AboutComponent } from 'src/components/about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from 'src/components/navbar/navbar.component';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ProjectComponent } from 'src/components/project/project.component';
import { HomeComponent } from 'src/components/home/home.component';
import { ProjectflowComponent } from './projectflow/projectflow.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProjectComponent,
    AboutComponent,
    HomeComponent,
    ProjectflowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component:  HomeComponent},
      { path: 'project', component: ProjectComponent },
      { path: 'about', component: AboutComponent },
      { path: 'projectflow', component: ProjectflowComponent },
    ])
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
