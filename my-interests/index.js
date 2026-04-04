// =========================
// DEFINITIONS (TOP SECTION)
// =========================

// ---------- FUN FACTS ----------
const funFacts = [
    "I've been a percussionist for more than 10 years.",
    "My favorite food is sushi.",
    "My favorite sport is badminton.",
    "My dogs are named Bella and Piper.",
    "My dream is to work on Neural Interfaces.",
    "I'm a massive fan of Dr. Pepper.",
    "I love to read."
];

// ---------- GAME DATA ----------
const games = [
    {
        name: "Assassin's Creed",
        description: "An action-adventure series focused on stealth, parkour, and historical settings.",
        genres: ["action", "adventure"],
        image: "images/assassins-creed.webp"
    },
    {
        name: "Blue Prince",
        description: "A mysterious puzzle adventure game centered around exploration and discovery.",
        genres: ["puzzle", "adventure"],
        image: "images/blue-prince.webp"
    },
    {
        name: "Elden Ring",
        description: "An open-world action RPG with challenging combat and deep lore.",
        genres: ["rpg", "action"],
        image: "images/elden-ring.webp"
    },
    {
        name: "Hades",
        description: "A fast-paced roguelike dungeon crawler with rich storytelling and combat.",
        genres: ["roguelike", "action"],
        image: "images/hades.webp"
    },
    {
        name: "Outer Wilds",
        description: "An exploration-based adventure game set in a mysterious time-looping solar system.",
        genres: ["adventure", "exploration", "puzzle"],
        image: "images/outer-wilds.webp"
    }
];

// ---------- DOM ELEMENTS ----------
const funFactBtn = document.getElementById("funFactBtn");
const funFactDisplay = document.getElementById("funFactDisplay");

const gamesContainer = document.getElementById("gamesContainer");
const searchInput = document.getElementById("searchInput");
const genreFilter = document.getElementById("genreFilter");


// =========================
// FUNCTIONAL CODE (BOTTOM)
// =========================

// ---------- FUN FACT FUNCTION ----------
function getRandomFunFact() {
    const randomIndex = Math.floor(Math.random() * funFacts.length);
    return funFacts[randomIndex];
}

// ---------- RENDER GAMES ----------
function renderGames(gameArray) {
    if (!gamesContainer) return;

    gamesContainer.innerHTML = "";

    gameArray.forEach(game => {
        const gameCard = document.createElement("div");
        gameCard.classList.add("game-card");

        gameCard.innerHTML = `
            <img src="${game.image}" alt="${game.name}" class="game-image">
            <h3 class="game-title">${game.name}</h3>
            <p class="game-genre">Genre: ${game.genres.join(", ")}</p>
            <p class="game-description">${game.description}</p>
        `;

        gamesContainer.appendChild(gameCard);
    });
}

// ---------- FILTER FUNCTION ----------
function filterGames() {
    if (!gamesContainer) return;

    const searchValue = searchInput.value.toLowerCase();
    const selectedGenre = genreFilter.value;

    const filteredGames = games.filter(game => {
        // Search match (name or description)
        const matchesSearch =
            game.name.toLowerCase().includes(searchValue) ||
            game.description.toLowerCase().includes(searchValue);

        // Genre match
        const matchesGenre =
            selectedGenre === "all" ||
            game.genres.includes(selectedGenre);

        return matchesSearch && matchesGenre;
    });

    renderGames(filteredGames);
}

// ---------- EVENT LISTENERS ----------

// Fun fact button
if (funFactBtn) {
    funFactBtn.addEventListener("click", () => {
        const fact = getRandomFunFact();
        funFactDisplay.textContent = fact;
    });
}

// Live search (typing)
if (searchInput) {
    searchInput.addEventListener("input", filterGames);
}

// Genre filter (dropdown)
if (genreFilter) {
    genreFilter.addEventListener("change", filterGames);
}

// Initial render
if (gamesContainer) {
    renderGames(games);
}