(() => {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".primary-nav");
  toggle?.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
  nav?.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    toggle?.setAttribute("aria-expanded", "false");
  }));

  const intake = document.getElementById("project-intake");
  intake?.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!intake.reportValidity()) return;
    const fields = new FormData(intake);
    const isSpanish = document.documentElement.lang === "es";
    const labels = isSpanish
      ? { name: "Nombre", email: "Correo profesional", problem: "Problema o iniciativa", outcome: "Resultado esperado", constraints: "Restricciones", state: "Estado actual" }
      : { name: "Name", email: "Professional email", problem: "Problem or initiative", outcome: "Intended outcome", constraints: "Constraints", state: "Current state" };
    const body = [...fields.entries()].map(([name, value]) => `${labels[name] || name}: ${value}`).join("\n\n");
    const subject = isSpanish ? "Conversación sobre proyecto de IA y datos" : "AI and Data Project Discussion";
    const status = document.getElementById("intake-status");
    if (status) status.textContent = isSpanish ? "Se está abriendo tu aplicación de correo. Revisá el mensaje antes de enviarlo." : "Your email application is being opened. Review the message before sending.";
    window.location.href = `mailto:oscargiovanni@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
})();