import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { MealPlanComponent } from './components/meal-plan/meal-plan.component';
import { SupplementsComponent } from './components/supplements/supplements.component';
import { AboutComponent } from './components/about/about.component';
import { CreatAccountComponent } from './components/creat-account/creat-account.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MealPlanComponent,
    SupplementsComponent,
    AboutComponent,
    CreatAccountComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
