import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from "./component/about/about.component";
import {ContactComponent} from "./component/contact/contact.component";
import {HomeComponent} from "./component/home/home.component";
import {CardComponent} from "./component/home/card/card.component";
import {CardDetailComponent} from "./component/home/card-detail/card-detail.component";

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'user/:id', component: CardDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
