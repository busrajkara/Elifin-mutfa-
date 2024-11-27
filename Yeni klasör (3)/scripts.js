document.addEventListener("DOMContentLoaded", () => {
    console.log("Elif'in Lezzetleri web sitesi yüklendi.");

    // Fetch and render recipes from JSON
    fetch('recipes.json')
        .then(response => response.json())
        .then(data => {
            const recipeList = document.getElementById("recipe-list");

            data.recipes.forEach(recipe => {
                // Create a recipe card
                const recipeCard = document.createElement("div");
                recipeCard.classList.add("recipe-card");

                // Add recipe details
                recipeCard.innerHTML = `
                    <h3>${recipe.title}</h3>
                    <p>${recipe.description}</p>
                    <a href="${recipe.link}">Tarifi Gör</a>
                `;

                // Append to the recipe list
                recipeList.appendChild(recipeCard);
            });
        })
        .catch(error => {
            console.error("Tarifler yüklenirken bir hata oluştu:", error);
        });
});
