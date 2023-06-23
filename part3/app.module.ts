import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { ButtonModule } from 'primeng/button';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
// import { ListboxModule } from 'primeng/listbox';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { CompsComponent } from './comps/comps.component';
import { Comp2Component } from './comp2/comp2.component';
import { LogicFormComponent } from './logic-form/logic-form.component';
import { CommonModule } from '@angular/common';
import { PasswordModule } from 'primeng/password';
import { FgpwdComponent } from './fgpwd/fgpwd.component';
import { MenComponent } from './men/men.component';
import { ContactComponent } from './contact/contact.component';
import { ThankComponent } from './thank/thank.component';
import { TableModule } from 'primeng/table';
import { WomenComponent } from './women/women.component';
import { KidsComponent } from './kids/kids.component';
import { FurnitureComponent } from './furniture/furniture.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { LmainComponent } from './lmain/lmain.component';
import { LmenComponent } from './lmen/lmen.component';
import { LwomenComponent } from './lwomen/lwomen.component';
import { LelectronicsComponent } from './lelectronics/lelectronics.component';
import { LkidsComponent } from './lkids/lkids.component';
import { LfurnitureComponent } from './lfurniture/lfurniture.component';
import { LaccessoriesComponent } from './laccessories/laccessories.component';
import { CartComponent } from './cart/cart.component';
import { UsernameComponent } from './username/username.component';
// import { LaccessoriesComponent } from './laccessories/laccessories.component';
// import { RatingModule } from '';

// import { Routes, RouterModule } from '@angular/router';
// import { GitComponent } from './git/git.component';
// import { BrowserAnimationsModule }
//     from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CompsComponent,
    Comp2Component,
    RegistrationComponent,
    LogicFormComponent,
    FgpwdComponent,
    MenComponent,
    ContactComponent,
    ThankComponent,
    WomenComponent,
    KidsComponent,
    FurnitureComponent,
    ElectronicsComponent,
    AccessoriesComponent,
    LmainComponent,
    LmenComponent,
    LwomenComponent,
    LelectronicsComponent,
    LkidsComponent,
    LfurnitureComponent,
    LaccessoriesComponent,
    CartComponent,
    UsernameComponent,
    // LaccessoriesComponent
 
    // GitComponent,
    // ListboxModule,
    // BrowserAnimationsModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule ,
    ButtonModule,
    InputMaskModule,
    RadioButtonModule,
    DropdownModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule,
    PasswordModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
