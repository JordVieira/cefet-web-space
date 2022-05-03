document.querySelectorAll(".botao-expandir-retrair").forEach((button) =>
  button.addEventListener("click", (e) => {
    document.querySelectorAll(".botao-expandir-retrair").forEach((_, index) => {
      const parent =
        e.currentTarget ===
          document.querySelectorAll(".botao-expandir-retrair")[index] &&
        document.querySelectorAll(".botao-expandir-retrair")[index]
          .parentElement;

      parent && parent.classList.toggle("expandido");
      button.textContent = parent.classList.contains("expandido") ? "-" : "+";
    });
  })
);
