import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';

import { AuthService } from 'src/app/services/auth/auth.service';
import { IRecipe } from 'src/app/interfaces/Recipe';
import { RecipeService } from 'src/app/services/recipe/recipe.service';
import { UserService } from './../../../../services/user/user.service';
import { UtilityService } from 'src/app/services/util/util.service';
import { pageContent } from 'src/app/constants/constants';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css'],
})
export class RecipeDetailsComponent implements OnInit, OnDestroy {
  private _recipe$ = new BehaviorSubject<IRecipe>({} as IRecipe);
  public recipe$ = this._recipe$.asObservable();
  dishes = pageContent.recipes.dishes;

  editRecipeForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    cookTime: ['', [Validators.required]],
    dishType: ['', [Validators.required]],
    image: [
      '',
      [
        Validators.required,
        Validators.pattern(/^(https?:\/\/).*\.(png|jpe?g)$/),
      ],
    ],
    description: ['', [Validators.required, Validators.minLength(10)]],
    ingredients: ['', [Validators.required]],
    steps: ['', [Validators.required]],
  });

  subscription!: Subscription;

  isOwner: boolean = false;
  isLoggedIn: boolean = false;
  isSaved: boolean = false;
  editMode: boolean = false;
  isLoading: boolean = false;
  isRecipeSaved: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private recipeService: RecipeService,
    private userService: UserService,
    private utilityService: UtilityService,
    private router: Router,
    private fb: FormBuilder,
  ) {}

  ngOnInit() {
    this.subscription = this.activatedRoute.data.subscribe(({ recipe }) => {
      this._recipe$.next(recipe);
      this.isOwner = recipe.owner._id === this.authService.loggedUser?._id;
      this.isLoggedIn = this.authService.isAuthenticated();
      this.isRecipeSaved = !!recipe.savedByUserData.savedUsers.includes(
        this.authService.loggedUser?._id,
      );

      this.editRecipeForm.patchValue({
        name: recipe.name,
        cookTime: recipe.cookTime,
        dishType: recipe.dishType,
        image: recipe.image,
        description: recipe.description,
        ingredients: recipe.ingredients ? recipe.ingredients.join('\n') : '',
        steps: recipe.steps ? recipe.steps.join('\n') : '',
      });
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  get recipe() {
    return this._recipe$.getValue();
  }

  get formRecipe() {
    const { steps, ingredients } = this._recipe$.getValue();
    return {
      ingredients: ingredients ? ingredients.join('\n') : '',
      steps: steps ? steps.join('\n') : '',
    };
  }

  toggleEditMode(): void {
    this.editMode = !this.editMode;
  }

  onSubmit(): void {
    if (this.editRecipeForm.invalid || !this.editRecipeForm.dirty) return;
    const formData = {
      ...this.editRecipeForm.value,
      ingredients: this.utilityService.trimTextAreaEmptyLines(
        this.editRecipeForm.value.ingredients as string,
      ),
      steps: this.utilityService.trimTextAreaEmptyLines(
        this.editRecipeForm.value.steps as string,
      ),
    };
    this.isLoading = true;
    this.recipeService
      .updateRecipe(this.recipe._id, formData as any)
      .subscribe((recipe) => {
        this._recipe$.next(recipe);
        this.isLoading = false;
        this.toggleEditMode();
      });
  }

  onDelete(): void {
    this.isLoading = true;
    this.recipeService.deleteRecipe(this.recipe._id).subscribe(() => {
      this.isLoading = false;
      this.router.navigate(['/recipes/catalog']);
    });
  }

  onSaveRecipe(): void {
    this.isLoading = true;
    this.userService
      .saveRecipe(this.recipe._id, this.authService.loggedUser?._id as string)
      .subscribe(() => {
        this.isLoading = false;
        this.isRecipeSaved = true;
      });
  }
}
