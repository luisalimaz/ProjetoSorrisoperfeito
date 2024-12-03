
document.getElementById("contactForm").addEventListener("submit", function(event) {
    const nome = document.querySelector("input[name='nome']").value;
    const email = document.querySelector("input[name='email']").value;
    const mensagem = document.querySelector("textarea[name='mensagem']").value;

    if (!nome || !email || !mensagem) {
        alert("Por favor, preencha todos os campos.");
        event.preventDefault();
    }
});


document.querySelectorAll("nav a").forEach(anchor => {
    anchor.addEventListener("click", function(event) {
        event.preventDefault();
        const section = document.querySelector(this.getAttribute("href"));
        section.scrollIntoView({ behavior: "smooth" });
    });
    
   
});


