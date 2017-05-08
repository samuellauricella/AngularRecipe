import { RecipeprojectPage } from './app.po';

describe('recipeproject App', () => {
  let page: RecipeprojectPage;

  beforeEach(() => {
    page = new RecipeprojectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
