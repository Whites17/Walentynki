function showMessage(response) {
  if (response === "Nie") {
    const nieButton = document.getElementById("nie-button");
    const container = document.querySelector(".container");
    const maxWidth = window.innerWidth - nieButton.offsetWidth;
    const maxHeight = window.innerHeight - nieButton.offsetHeight;

    // Ustawienie przycisku na pozycje absolutną
    nieButton.style.position = "absolute";

    // Zmiana obrazu na "piesel.gif"
    document.getElementsByClassName("image")[0].src = "Obrazy/piesel.gif";

    // Generowanie randomowych koordynat z widocznego kontenera 
    const randomX = Math.max(0, Math.floor(Math.random() * maxWidth));
    const randomY = Math.max(0, Math.floor(Math.random() * maxHeight));

    // Dodanie nowych koordynat do przycisku
    nieButton.style.left = randomX + "px";
    nieButton.style.top = randomY + "px";

    // Zmiana textContent i ukretej wiadomości name
    document.getElementById("question").textContent =
      "PRÓBUJ DALEJ";
    document.getElementById("name").style.display = "none";

  
  }

  if (response === "Tak") {
    // Usuniecie wiadomości "name" i przycisku "nie"
    document.getElementById("name").remove();
    document.getElementById("nie-button").remove();

    // Zmiana tekstu, pokazanie wiadomości i zmiana obrazu na "tulonko.gif"
    const takMessage = document.getElementById("question");
    takMessage.textContent = "NIEDŁUGO SIĘ WIDZIMY ZOSIEŃKA!!! KOCHAM CIĘ NAJMOCNIEJ NA CAŁYM ŚWIECIE❤️❤️❤️";
    takMessage.style.display = "block";
    takMessage.style.fontStyle = "normal";
    document.getElementsByClassName("image")[0].src = "Obrazy/tulonko.gif";

    // Usuniecię przycisku "Tak"
    document.getElementById("takButton").remove();
  }
}
