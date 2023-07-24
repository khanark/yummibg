import { CommonModule } from '@angular/common';
import { CreateRecipeModule } from './recipes-main/create-recipe/create-recipe.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { IconsModule } from 'src/app/icons/icons.module';
import { NgModule } from '@angular/core';
import { RecipesAsideModule } from './recipes-aside/recipes-aside.module';
import { RecipesComponent } from './recipes.component';
import { RecipesHeaderModule } from './recipes-header/recipes-header.module';
import { RecipesRoutingModule } from './recipes-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [RecipesComponent],
  imports: [
    CommonModule,
    RecipesRoutingModule,
    IconsModule,
    FontAwesomeModule,
    RouterModule,
    FormsModule,
    RecipesHeaderModule,
    RecipesAsideModule,
    CreateRecipeModule,
  ],
  exports: [RecipesComponent],
})
export class RecipesModule {}
