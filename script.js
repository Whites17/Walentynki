function showMessage(response) {
  if (response === "Nie") {
    const nieButton = document.getElementById("nie-button");
    const container = document.querySelector(".container");
    const maxWidth = window.innerWidth - nieButton.offsetWidth;
    const maxHeight = window.innerHeight - nieButton.offsetHeight;

    // Set button position to absolute
    nieButton.style.position = "absolute";

    // Change image source to "gun.gif"
    document.getElementsByClassName("image")[0].src = "Obrazy/piesel.gif";

    // Generate random coordinates within the visible container
    const randomX = Math.max(0, Math.floor(Math.random() * maxWidth));
    const randomY = Math.max(0, Math.floor(Math.random() * maxHeight));

    // Apply new coordinates to the button
    nieButton.style.left = randomX + "px";
    nieButton.style.top = randomY + "px";

    // Update text content and hide name message
    document.getElementById("question").textContent =
      "PRÓBUJ DALEJ";
    document.getElementById("name").style.display = "none";

    // Optional: You can also add a timeout to reset the position after a few seconds
  }

  if (response === "Tak") {
    // Remove name message and no button
    document.getElementById("name").remove();
    document.getElementById("nie-button").remove();

    // Update text content, show message, and change image source to "dance.gif"
    const takMessage = document.getElementById("question");
    takMessage.textContent = "NIEDŁUGO SIĘ WIDZIMY ZOSIEŃKA!!! KOCHAM CIĘ NAJMOCNIEJ NA CAŁYM ŚWIECIE❤️❤️❤️";
    takMessage.style.display = "block";
    takMessage.style.fontStyle = "normal";
    document.getElementsByClassName("image")[0].src = "Obrazy/tulonko.gif";

    // Remove yes button
    document.getElementById("takButton").remove();
  }
}
