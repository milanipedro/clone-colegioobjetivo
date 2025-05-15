// SCRIPT: AO CLICAR NO NÚMERO DE TELEFONE FIXO COPIE PARA A ÁREA DE TRANSFERÊNCIA + ALERT SUCESSO 
function copiarTelefone(numero) {
  const textarea = document.createElement("textarea");
  textarea.value = numero;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);

  alert("Telefone fixo copiado com sucesso!");
}

// SCRIPT: ANIMAÇÃO DO 0 ATÉ OS NÚMEROS DE APROVADOS DO OBJETIVO
function animateCount(el, duration = 2500) {
    const target = +el.getAttribute("data-target");
    const startTime = performance.now();

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        el.textContent = Math.floor(progress * target);
        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            el.textContent = target.toLocaleString();
        }
    }

    requestAnimationFrame(update);
}

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const el = entry.target;
            animateCount(el);
            observer.unobserve(el);
        }
    });
}, {
    threshold: 0.5
});

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.p-numeros-objetivo').forEach(el => {
        observer.observe(el);
    });
});
