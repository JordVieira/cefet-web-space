// let conditional = 0;

document.querySelectorAll(".botao-expandir-retrair").forEach((button) =>
  button.addEventListener("click", (e) => {
    document.querySelectorAll(".botao-expandir-retrair").forEach((_, index) => {
      const parent =
        e.currentTarget ===
          document.querySelectorAll(".botao-expandir-retrair")[index] &&
        document.querySelectorAll(".botao-expandir-retrair")[index]
          .parentElement;

      parent && parent.classList.toggle("expandido");
      if (e.target && button.textContent === "+") {
        button.textContent = "-";
      } else if (e.target && button.textContent === "-") {
        button.textContent = "+";
      }
    });
  })
);
