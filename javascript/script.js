
// Seleciona todos os elementos com a classe 'accordion'
const accordions = document.querySelectorAll('.accordion');

// Itera sobre cada elemento 'accordion'
for (let i = 0; i < accordions.length; i++) {
    // Adiciona um evento de clique ao elemento atual
    accordions[i].addEventListener('click', function() {
        // Encontra o elemento com a classe 'accordion-body' dentro do accordion atual
        const body = accordions[i].querySelector('.accordion-body'); //encontra o elemento accordion-body dentro do accordion atual e põe na const "body"
        // Alterna a classe 'active' no elemento encontrado
        body.classList.toggle('active'); //Se a classe active não está presente: toggle() adiciona a classe ao elemento.
        //Se a classe já está presente: toggle() remove a classe do elemento. metodo - "toggle"(alterar)
    });
}