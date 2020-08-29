import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';
import { RecipeItemsComponent } from './recipe-items/recipe-items.component';
import {FormsModule} from '@angular/forms';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component'
import {ShoppingListEditComponent} from './shopping-list/shopping-list-edit/shopping-list-edit.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeCardComponent,
    RecipeItemsComponent,
    RecipeDetailsComponent,
    
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipesComponent
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
