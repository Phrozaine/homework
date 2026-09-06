export const searchBox = () => {
  const searchInput = document.querySelector(".search__input");
  const buttonsBox = document.querySelector(".search__buttons-box");

  buttonsBox.addEventListener("click", (event) => {
    const button = event.target.closest(".search__button");

    if (button) {
      searchInput.value = button.textContent.trim();
    }
  });
};
