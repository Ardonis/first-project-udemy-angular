import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecepesListComponent } from './recepes-list/recepes-list.component';
import { RecepesDetailComponent } from './recipes/recepes-detail/recepes-detail.component';
import { RecepesItemComponent } from './recipes/recipes-list/recepes-item/recepes-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecepesListComponent,
    RecepesDetailComponent,
    RecepesItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
