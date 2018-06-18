import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';

import { ViewallComponent } from './viewall/viewall.component';
import { CategoryComponent } from './category/category.component';
import { TrackComponent } from './track/track.component';
import { CreateComponent } from './create/create.component';
import { HttpClientModule }    from '@angular/common/http'

const routes:Routes = [
  {path:'', component:ViewallComponent},
  {path:'create', component:CreateComponent},
  {path:'category', component:CategoryComponent},
  {path:'track', component:TrackComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    
    ViewallComponent,
    CategoryComponent,
    TrackComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
