const recipe = document.querySelector(".recipe");

const getAndDisplayRandomRecipe = () => {
  const recipes = {
    recipe1: `<div class="recipe-upper-section">
          <div class="recipe-image-div">
            <div class="title-div">
              <h2 class="title">Burger Buns</h2>
              <div class="underline"></div>
            </div>
            <img
              src="https://i.postimg.cc/L8VQmgPk/burger-buns.jpg"
              alt="Burger Buns"
              class="main-recipe-image"
            />
          </div>

          <div>
            <div class="title-div">
              <h3 class="title">Ingredients</h3>
              <div class="underline"></div>
            </div>

            <p class="ingredients">
              <strong>1/2 cup</strong> warm water<br />
              <strong>1/2 cup</strong> warm milk<br />
              <strong>1 tbsp</strong> sugar<br />
              <strong>1/2 tbsp</strong> yeast<br />
              <strong>1</strong> egg<br />
              <strong>4 tbsp</strong> oil<br />
              <strong>1/2 tsp</strong> salt<br />
              <strong>3 and 1/2 cups</strong> flour
            </p>
          </div>
        </div>

        <div class="instructions">
          <div class="title-div">
            <h3 class="title">Cooking Instructions</h3>
            <div class="underline"></div>
          </div>
          <p>
            Mix all ingredients except for flour while stirring.
          </p>
          <br />
          <p>
            Gradually add the flour to your mixture while mixing till you end up with a sticky dough.
          </p>
          <br />
          <p>
            Knead and transfer the dough to a clean work surface and add 1 tsp oil to the dough.
          </p>
          <br />
          <p>
            Knead dough until soft and stretchy.
          </p>
          <p>
          Put dough into an oiled bowl and cover with plastic wrap. Leave it to rise for 40 minutes.
          </p>
          <br/>
          <p>
          Punch down the dough then fold/ roll into a log shape
          </p>
          <br/>
          <p>
          Slice log into 8 equal pieces. Roll each piece into a ball.
          </p>
          <br/>
          <p>
          Grease your baking sheet with oil and place the balls. <br/>
        Press them lightly as you place to make the balls into a bun shape.</p>
          <br/>
          <p>Cover with cloth and let rise for 40 minutes.</p>
          <br/>
          <p>Brush tops with 2 tbsp milk + 1/2 tsp sugar, then sprinkle with sesame seeds (optional)</p>
          <br/>
          <p>Bake for 15 minutes in 190 degrees preheated oven.</p>
          <br/>
          <p>Brush tops with butter. <br/>
Cover with cloth for 15 minutes then serve.</p>
        </div>`,
    recipe2: `<div class="recipe-upper-section">
          <div class="recipe-image-div">
            <div class="title-div">
              <h2 class="title">Soft Chapati</h2>
              <div class="underline"></div>
            </div>
            <img
              src="https://i.postimg.cc/1zxjXzq3/chapati.jpg"
              alt="Soft Chapati"
              class="main-recipe-image"
            />
          </div>

          <div>
            <div class="title-div">
              <h3 class="title">Ingredients</h3>
              <div class="underline"></div>
            </div>

            <p class="ingredients">
              <strong>3 cups</strong> all purpose flour<br />
              <strong>1 tbsp/2</strong> salt<br />
              <strong>3 tbsp</strong> sugar<br />
              <strong>1 cup</strong> water<br />
              Vegetable oil
            </p>
          </div>
        </div>

        <div class="instructions">
          <div class="title-div">
            <h3 class="title">Cooking Instructions</h3>
            <div class="underline"></div>
          </div>
          <p>
            Combine flour,sugar,salt and 4 tbsp of oil;mix to remove oil lumps and everything to be well mixed.
            <br/>
            Add water gradually while mixing until your dough is ready then brush your dough with oil then proof for 30 mins.
          </p>
          <br />
          <p>
            Dust your working place with flour then place your dough and roll until the dough is thick. <br/>
            Cut straight 'lines' and roll each dough. <br/>
            Arrange your dough in a dusted surface and cover for 30 mins.
          </p>
          <br />
          <p>
            Heat your pan in a low heat. <br/>
            Roll one dough at a time and place on the pan;cook all "ball dough"on both sides before adding oil. <br/>
            When you a done;cook one by one adding one tbsp oil each sides;cook until golden brown each but don't over cook to avoid your chapati's being hard.
          </p>
          <br />
          <p>
            Cook all your chapatis and then wrap with aluminum foil. <br/>
        Serve with your favorite stew.
          </p>
        </div>`,
    recipe3: `<div class="recipe-upper-section">
          <div class="recipe-image-div">
            <div class="title-div">
              <h2 class="title">Fries</h2>
              <div class="underline"></div>
            </div>
            <img
              src="https://i.postimg.cc/L55Lkz1B/french-fries.jpg"
              alt="Fries"
              class="main-recipe-image"
            />
          </div>

          <div>
            <div class="title-div">
              <h3 class="title">Ingredients</h3>
              <div class="underline"></div>
            </div>

            <p class="ingredients">
              <strong>5 pounds</strong> russet potatoes<br />
              Vegetable oil for frying<br />
              Sea salt
            </p>
          </div>
        </div>

        <div class="instructions">
          <div class="title-div">
            <h3 class="title">Cooking Instructions</h3>
            <div class="underline"></div>
          </div>
          <p>
            Peel and rinse potatoes then cut them into sticks.Place them in a large bowl and cover with cold water.
          </p>
          <br />
          <p>
            Allow them to soak for 2-3hrs.Drain off the water and lay them on baking sheets lined with paper towels to dry them.
          </p>
          <br />
          <p>
            Heat oil in a pan.Cook the potatoes until soft 4-5min per batch.They should not be brown at this point.Remove and drain.
          </p>
          <br />
          <p>
            Once all the potatoes have been fried at 300°Turn up the heat until 400°©.Start frying in batches.
          </p>
          <br/>
          <p>
          Cook until they are golden and crisp.Remove and drain on paper towels.Sprinkle with sea salt and serve with desired sauce.
          </p>
        </div>`,
  };
  const recipeKeys = Object.keys(recipes);
  const randomChoice = Math.floor(Math.random() * recipeKeys.length);
  recipe.innerHTML = recipes[recipeKeys[randomChoice]];
};

// call the function to start with a new recipe each time you refresh or open this page!
getAndDisplayRandomRecipe();
