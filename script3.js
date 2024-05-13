document.getElementById("random-button").addEventListener("click", function () {
  const images = [];

  for (let i = 1; i <= 8; i++) {
    images.push(`mini_game/${i}.png`);
  }

  const randomIndex = Math.floor(Math.random() * images.length);
  const randomImage = images[randomIndex];

  const imgElement = document.getElementById("random-image");
  imgElement.src = randomImage;
  imgElement.alt = `Random Picture (${randomIndex + 1})`; // Optional: updates the alt text with index
});
