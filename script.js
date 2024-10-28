// Fetch Recipe of the Day
function fetchDailyRecipe() {
  const apiURL = "https://www.themealdb.com/api/json/v1/1/random.php";
  fetch(apiURL)
    .then((response) => response.json())
    .then((data) => {
      const meal = data.meals[0];
      document.getElementById("daily-recipe-content").innerHTML = `
                <h3>${meal.strMeal}</h3>
                <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
                <p><strong>Did You Know?</strong> ${meal.strArea} cuisine is famous for ...</p>
                <button onclick="viewRecipe(${meal.idMeal})">View Recipe</button>
            `;
    });
}
fetchDailyRecipe();

// Meal options for each mood category
const mealOptions = {
  comfort: [
    "Cheesy Lasagna",
    "Potato Soup",
    "Mac & Cheese",
    "Beef Stew",
    "Fried Chicken",
    "Spaghetti Bolognese",
    "Meatloaf",
    "Mashed Potatoes",
    "Shepherd’s Pie",
    "Chicken Pot Pie",
    "Chicken Parmesan",
    "Pulled Pork Sandwiches",
    "Stuffed Peppers",
    "Loaded Nachos",
    "BBQ Ribs",
    "Baked Ziti",
    "Chicken Alfredo",
    "Sloppy Joes",
    "Chicken & Dumplings",
    "Beef Stroganoff",
    "Philly Cheesesteak",
    "Cheesy Grits",
    "Biscuits & Gravy",
    "Fettuccine Alfredo",
    "Meatball Subs",
    "Pot Roast",
    "Pork Chops & Gravy",
    "Chicken Fried Steak",
    "Cornbread Casserole",
    "Cheeseburger Sliders",
    "Jambalaya",
    "Fried Catfish",
    "Pizza Margherita",
    "Enchiladas",
    "Stuffed Meatloaf",
    "Grilled Cheese & Tomato Soup",
    "Pork Schnitzel",
    "Mashed Cauliflower",
    "Hot Chicken Sandwich",
    "Stuffed Shells",
    "Swedish Meatballs",
    "Lobster Mac & Cheese",
    "Scalloped Potatoes",
    "Chicken Marsala",
    "Eggplant Parmesan",
    "Bangers and Mash",
    "Beef Wellington",
    "Turkey Pot Pie",
    "French Onion Soup",
    "Poutine",
    "Pasta Carbonara",
  ],

  light: [
    "Mediterranean Salad",
    "Grilled Chicken",
    "Quinoa Bowl",
    "Avocado Salad",
    "Soba Noodle Bowl",
    "Shrimp Ceviche",
    "Spring Rolls",
    "Gazpacho",
    "Grilled Fish Tacos",
    "Caprese Salad",
    "Kale & Quinoa Salad",
    "Stuffed Bell Peppers",
    "Cauliflower Rice Stir-Fry",
    "Greek Yogurt Bowl",
    "Hummus & Veggies",
    "Chilled Cucumber Soup",
    "Lettuce Wraps",
    "Stuffed Zucchini",
    "Chickpea Salad",
    "Roasted Veggie Bowl",
    "Shrimp Skewers",
    "Carrot & Ginger Soup",
    "Spinach & Mushroom Omelette",
    "Turkey Wrap",
    "Fruit Salad",
    "Tuna Salad Lettuce Wraps",
    "Cucumber Dill Salad",
    "Cauliflower Tacos",
    "Cabbage Roll",
    "Seared Ahi Tuna",
    "Tomato Basil Salad",
    "Roasted Red Pepper Soup",
    "Gazpacho Shots",
    "Carrot Salad",
    "Grilled Zucchini",
    "Pico de Gallo & Chips",
    "Avocado Hummus",
    "Celery Root Salad",
    "Pickled Beet Salad",
    "Chilled Avocado Soup",
    "Couscous Salad",
    "Roasted Chickpeas",
    "Grilled Eggplant",
    "Jicama Slaw",
    "Bruschetta",
    "Tomato Feta Salad",
    "Green Papaya Salad",
    "Edamame Bowl",
    "Japanese Seaweed Salad",
    "Gazpacho Verde",
    "Grilled Artichokes",
    "Fruit & Nut Salad",
  ],
  quick: [
    "Stir-Fry Veggies",
    "Pasta Primavera",
    "Avocado Toast",
    "Omelette",
    "Tacos",
    "Instant Ramen with Toppings",
    "Smoothie Bowl",
    "Veggie Wrap",
    "Burrito",
    "Caesar Salad",
    "Egg Muffins",
    "Frittata",
    "BLT Sandwich",
    "Quesadilla",
    "Greek Salad",
    "Zoodles with Marinara",
    "Stuffed Pita",
    "Pasta Salad",
    "Banh Mi Sandwich",
    "Rice Noodles with Veggies",
    "Veggie Burger",
    "Lentil Soup",
    "Baked Sweet Potato",
    "Garlic Shrimp Pasta",
    "Chicken Wrap",
    "Smashed Avocado Bowl",
    "Pita Pizza",
    "Mini Meatballs",
    "Quick Chili",
    "Stuffed Mushrooms",
    "Veggie Stir Fry with Rice",
    "Sloppy Joe Bowl",
    "Grilled Cheese",
    "Broccoli Soup",
    "Pan-Seared Salmon",
    "Black Bean Tacos",
    "Bruschetta with Toppings",
    "Buffalo Cauliflower",
    "Loaded Sweet Potatoes",
    "Tuna Poke Bowl",
    "Egg Salad Sandwich",
    "Quick Pesto Pasta",
    "Sesame Chicken Bites",
    "Spinach & Feta Wrap",
    "Miso Soup",
    "Falafel Wrap",
    "Smoked Salmon Bagel",
    "Margherita Pita Pizza",
    "Shrimp Quesadilla",
    "Lemon Pepper Wings",
    "Tomato Soup with Cheese Croutons",
    "Caesar Wrap",
  ],
  adventurous: [
    "Sushi Rolls",
    "Moroccan Tagine",
    "Pad Thai",
    "Kimchi Stew",
    "Ramen",
    "Ethiopian Doro Wat",
    "Pho",
    "Beef Tartare",
    "Korean Bibimbap",
    "Indian Biryani",
    "Peking Duck",
    "Crab Rangoon",
    "Croque Monsieur",
    "Spanish Paella",
    "Malaysian Laksa",
    "Filipino Adobo",
    "Ceviche",
    "Vietnamese Banh Xeo",
    "Curry Laksa",
    "Spanish Tortilla",
    "Haggis",
    "Polish Pierogi",
    "Sichuan Hot Pot",
    "Peruvian Lomo Saltado",
    "Chilean Cazuela",
    "French Cassoulet",
    "Afghani Pilaf",
    "Ecuadorian Seco de Pollo",
    "Jamaican Jerk Chicken",
    "Fried Crickets",
    "Kangaroo Stew",
    "Fried Alligator",
    "Oxtail Stew",
    "Fried Plantains",
    "Georgian Khachapuri",
    "Brazilian Feijoada",
    "Russian Beef Stroganoff",
    "Japanese Okonomiyaki",
    "Italian Osso Buco",
    "Swedish Surströmming",
    "Escargot",
    "Venison Stew",
    "Burmese Tea Leaf Salad",
    "Armenian Ghapama",
    "Malaysian Satay",
    "Korean Gochujang Chicken",
    "Yakitori",
    "Algerian Couscous",
    "Sardinian Pane Carasau",
    "Lebanese Fattoush",
    "Hungarian Goulash",
    "Peruvian Anticuchos",
    "Thai Som Tum",
    "Icelandic Hakarl",
  ],
};

// Array of cooking tips
const cookingTips = [
  "For extra flavor, roast the garlic before adding!",
  "Add a pinch of salt to enhance sweetness in desserts.",
  "Use a bit of lemon juice to prevent apples from browning.",
  "Marinate meat overnight for maximum flavor infusion.",
  "Toast spices to release their full aroma before using.",
  // ... 50+ cooking tips ...
];

// Function to get a random cooking tip
function getRandomCookingTip() {
  return cookingTips[Math.floor(Math.random() * cookingTips.length)];
}

// Function to show a random meal for the selected mood
function showRecipes(mood) {
  const moodResults = document.getElementById("mood-results");
  const options = mealOptions[mood];

  // Pick a random meal from the selected category
  const randomMeal = options[Math.floor(Math.random() * options.length)];

  // Display the random meal in the mood-results section
  moodResults.innerHTML = `
        <h3>In the mood for ${
          mood === "comfort"
            ? "comfort food"
            : mood === "light"
            ? "something light & fresh"
            : mood === "quick"
            ? "something quick & easy"
            : "an adventure"
        }?</h3>
        <p>Try this popular choice: <strong>${randomMeal}</strong></p>
    `;
}

// View Recipe by ID and scroll to ingredients
function viewRecipe(mealID) {
  const apiURL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`;
  const mealDetails = document.getElementById("meal-details");

  fetch(apiURL)
    .then((response) => response.json())
    .then((data) => {
      const meal = data.meals[0];
      const ingredients = [];
      for (let i = 1; i <= 20; i++) {
        if (meal[`strIngredient${i}`]) {
          ingredients.push(
            `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
          );
        } else {
          break;
        }
      }

      mealDetails.innerHTML = `
                <h2>${meal.strMeal}</h2>
                <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
                <h3 id="ingredients-section">Ingredients:</h3> <!-- Ingredients section with id for scrolling -->
                <ul>${ingredients
                  .map((ingredient) => `<li>${ingredient}</li>`)
                  .join("")}</ul>
                <h3>Instructions:</h3>
                <p>${meal.strInstructions}</p>
                <h3>Cooking Tips:</h3>
                <p>${getRandomCookingTip()}</p> <!-- Random cooking tip -->
            `;

      // Scroll to the ingredients section smoothly
      document
        .getElementById("ingredients-section")
        .scrollIntoView({ behavior: "smooth" });
    })
    .catch((error) => console.error("Error fetching recipe:", error));
}

// Search for Meals
function searchMeal() {
  const mealInput = document.getElementById("meal-input").value.trim();
  const mealDetails = document.getElementById("meal-details");
  mealDetails.innerHTML = "";

  if (mealInput === "") {
    mealDetails.innerHTML = "<p>Please enter a meal name.</p>";
    return;
  }

  const apiURL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealInput}`;

  fetch(apiURL)
    .then((response) => response.json())
    .then((data) => {
      if (data.meals) {
        const meal = data.meals[0];
        viewRecipe(meal.idMeal);
      } else {
        mealDetails.innerHTML = "<p>No meals found. Try another search.</p>";
      }
    })
    .catch((error) => console.error("Error fetching meals:", error));
}
