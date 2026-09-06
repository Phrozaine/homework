export const dropDown = () => {
  document.addEventListener("DOMContentLoaded", () => {
    const dropdown = document.getElementById("solutionsDropdown");
    const menu = document.getElementById("solutionsMenu");

    if (!dropdown || !menu) return;

    let timer = null;

    const canHover = () => {
      return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    };

    dropdown.addEventListener("mouseenter", () => {
      if (!canHover()) return;
      clearTimeout(timer);
      menu.classList.add("active");
    });

    dropdown.addEventListener("mouseleave", () => {
      if (!canHover()) return;
      timer = setTimeout(() => {
        menu.classList.remove("active");
      }, 150);
    });

    dropdown.addEventListener("click", (e) => {
      if (canHover()) return;

      e.stopPropagation();

      menu.classList.toggle("active");
    });

    document.addEventListener("click", (e) => {
      if (!canHover() && menu.classList.contains("active")) {
        if (!dropdown.contains(e.target)) {
          menu.classList.remove("active");
        }
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && menu.classList.contains("active")) {
        menu.classList.remove("active");
      }
    });
  });
};
