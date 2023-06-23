import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompsComponent } from './comps/comps.component';
import { Comp2Component } from './comp2/comp2.component';
import { MainComponent } from './main/main.component';
import { RegistrationComponent } from './registration/registration.component';
import { LogicFormComponent } from './logic-form/logic-form.component';
import { FgpwdComponent } from './fgpwd/fgpwd.component';
import { MenComponent } from './men/men.component';
import { ContactComponent } from './contact/contact.component';
import { ThankComponent } from './thank/thank.component';
import { WomenComponent } from './women/women.component';
import { KidsComponent } from './kids/kids.component';
import { FurnitureComponent } from './furniture/furniture.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { LmainComponent } from './lmain/lmain.component';
import { LmenComponent } from './lmen/lmen.component';
import { LwomenComponent } from './lwomen/lwomen.component';
import { LkidsComponent } from './lkids/lkids.component';
import { LelectronicsComponent } from './lelectronics/lelectronics.component';
import { LfurnitureComponent } from './lfurniture/lfurniture.component';
import { LaccessoriesComponent } from './laccessories/laccessories.component';
import { CartComponent } from './cart/cart.component';
const routes: Routes = [
  {
    path:'',
    component:MainComponent
  },
  {
    path:'main',
    component:MainComponent
  },
  {
    path:'reg',
    component:RegistrationComponent
  },
  {
    path:'shopnow',
    component:CompsComponent
  },
  {
    path:'login',
    component:LogicFormComponent
  },
  {
    path:'fgpwd',
    component:FgpwdComponent

  },
  {
    path:'contact',
    component:ContactComponent

  },
  {
    path:'men',
    component:MenComponent

  },
  {
    path:'thank',
    component:ThankComponent

  },
  {
    path:'women',
    component:WomenComponent

  },
  {
    path:'kids',
    component:KidsComponent

  },
  {
    path:'furniture',
    component:FurnitureComponent

  },
  {
    path:'electronics',
    component:ElectronicsComponent

  },
  {
    path:'access',
    component:AccessoriesComponent

  },
  {
    path:'lmain',
    component:LmainComponent

  },
  {
    path:'lmen',
    component:LmenComponent

  },
  {
    path:'lwomen',
    component:LwomenComponent

  },
  {
    path:'lkids',
    component:LkidsComponent

  },
  {
    path:'lelec',
    component:LelectronicsComponent

  },
  {
    path:'lfurn',
    component:LfurnitureComponent

  },
  {
    path:'laccess',
    component:LaccessoriesComponent

  },
  {
    path:'cart',
    component:CartComponent

  }
  // {
  //   path:'comp2',
  //   component:

  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
