import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SampleComponent } from './sample/sample.component';


const routes: Routes = [
  {path:"" , component:HomeComponent},
  {path:"contact" , component:ContactComponent},
  {path:"about" , component:AboutComponent},
  {path:"sample" , component:SampleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
