document.addEventListener("DOMContentLoaded", () => {
  const toc = document.querySelector("#quarto-margin-sidebar #TOC");
  if (!toc) return;

  toc.querySelectorAll("li").forEach((item, index) => {
    const link = item.querySelector(":scope > a.nav-link");
    const children = item.querySelector(":scope > ul");
    if (!link || !children) return;

    children.id = `report-toc-branch-${index}`;
    children.setAttribute("data-report-branch", "");
    children.hidden = !item.querySelector("a.active");
    link.classList.add("report-toc-parent");
    link.setAttribute("role", "button");
    link.setAttribute("aria-controls", children.id);
    link.setAttribute("aria-expanded", String(!children.hidden));

    link.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopImmediatePropagation();
      children.hidden = !children.hidden;
      link.setAttribute("aria-expanded", String(!children.hidden));
    }, true);

    link.addEventListener("keydown", (event) => {
      if (event.key === " ") {
        event.preventDefault();
        link.click();
      }
    });
  });
});
