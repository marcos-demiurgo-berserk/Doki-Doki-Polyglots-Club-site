document.addEventListener("DOMContentLoaded", function() {
    let botao = document.createElement("button"); // Cria o botão
    botao.innerText = "Aceito"; // Define o texto do botão
    botao.style.padding = "10px 20px";
    botao.style.fontSize = "16px";
    botao.style.backgroundColor = "purple";
    botao.style.color = "purple";
    botao.style.border = "none";
    botao.style.cursor = "pointer";
    botao.style.borderRadius = "5px";
    botao.style.display = "block";
    botao.style.margin = "50px auto";

    document.body.appendChild(botao); // Adiciona o botão à página

    botao.addEventListener("click", function() {
        window.close(); // Fecha a janela
    });
});
