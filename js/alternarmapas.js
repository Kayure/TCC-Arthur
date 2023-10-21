document.addEventListener("DOMContentLoaded", function() {
    const mapa1914 = document.getElementById("mapa1914");
    const botao1914 = document.getElementById("botao1914");
    const mapa1920 = document.getElementById("mapa1920");
    const botao1920 = document.getElementById("botao1920");
    const mapa1936 = document.getElementById("mapa1936");
    const botao1936 = document.getElementById("botao1936");

    var ano = 1914;

    botao1914.addEventListener("click", function() {
        mapa1914.style.display = "block";
        mapa1920.style.display = "none";
        mapa1936.style.display = "none";
        ano = 1914;
        const elementoAno = document.getElementById("Ano");
        elementoAno.textContent = ano;
    });

    botao1920.addEventListener("click", function() {
        mapa1914.style.display = "none";
        mapa1920.style.display = "block";
        mapa1936.style.display = "none";
        ano = 1920;
        const elementoAno = document.getElementById("Ano");
        elementoAno.textContent = ano;
    });

    botao1936.addEventListener("click", function() {
        mapa1914.style.display = "none";
        mapa1920.style.display = "none";
        mapa1936.style.display = "block";
        ano = 1936;
        const elementoAno = document.getElementById("Ano");
        elementoAno.textContent = ano;
    });
});