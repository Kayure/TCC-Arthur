document.addEventListener("DOMContentLoaded", function() {
    const bandeira = document.getElementById("bandeira");
    const Nome_Pais = document.getElementById("Nome_Pais");
    const Governo_Pais = document.getElementById("Governo_Pais");
    const Capital_Pais = document.getElementById("Capital_Pais");

    const imgAlemanha = "flags/ALEMANHA1914.png";

    function alemanhafuncao() {
        alert("ISTO É A ALEMANHA");
        bandeira.src = imgAlemanha;
    }

    function reinounidofuncao() {
        alert("ISTO É O IMPÉRIO BRITÂNICO")
    }
})