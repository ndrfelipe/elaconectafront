function filterCards() {
    // Captura o valor da barra de pesquisa
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const cards = document.querySelectorAll("#cardContainer .card");
    const cardContainer = document.getElementById("cardContainer");
    const mostSearched = document.getElementById("mostSearched");

    // Se a barra de pesquisa estiver vazia, mostra "Mais pesquisados" e esconde os cards filtrados
    if (searchInput === "") {
        cardContainer.classList.add("hidden");
        mostSearched.classList.remove("hidden");
        return;
    }

    // Caso contrário, filtra os cards
    let hasVisibleCard = false;
    cards.forEach(card => {
        const title = card.querySelector(".card-title").textContent.toLowerCase();
        const category = card.getAttribute("data-category").toLowerCase();

        // Verifica se o título ou a categoria correspondem ao valor da busca
        if (title.includes(searchInput) || category.includes(searchInput)) {
            card.style.display = "block";
            hasVisibleCard = true;
        } else {
            card.style.display = "none";
        }
    });

    // Exibe ou oculta os contêineres apropriados
    if (hasVisibleCard) {
        cardContainer.classList.remove("hidden");
        mostSearched.classList.add("hidden");
    } else {
        cardContainer.classList.add("hidden");
        mostSearched.classList.remove("hidden");
    }
}