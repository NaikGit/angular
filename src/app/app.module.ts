import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NgModel } from '@angular/forms';
import {HttpModule} from '@angular/http';

import { MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatFormFieldModule,
  MatInputModule, MatRadioModule, MatSelectModule, MatSliderModule,
  MatSlideToggleModule, MatToolbarModule, MatListModule, MatGridListModule,
  MatCardModule, MatIconModule, MatProgressSpinnerModule, MatDialogModule } from '@angular/material';


import { HttpClient } from 'selenium-webdriver/http';
import {FlexLayoutModule} from '@angular/flex-layout';
import 'hammerjs';
import { BrowserAnimationBuilder } from '@angular/platform-browser/animations/src/animation_builder';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

import {DishService} from './services/dish.service';
import {PromotionService} from './services/promotion.service';
import {AppRoutingModule} from './app-routing/app-routing.module';
import { LeaderService } from './services/leader.service';
import {ProcessHttpmsgService} from './services/process-httpmsg.service';

import { LoginComponent } from './login/login.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import {baseURL} from './shared/baseurl';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatFormFieldModule,
    MatInputModule, MatRadioModule, MatSelectModule, MatSliderModule,
    MatSlideToggleModule, MatToolbarModule, MatListModule, MatGridListModule,
    MatCardModule, MatIconModule, MatProgressSpinnerModule, MatDialogModule,FlexLayoutModule,
    AppRoutingModule,ReactiveFormsModule,FormsModule   
  ],
  providers: [DishService,PromotionService,LeaderService,ProcessHttpmsgService,
    {provide: 'BaseURL', useValue: baseURL}],
  entryComponents:[
    LoginComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
