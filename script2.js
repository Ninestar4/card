document.getElementById("random-button").addEventListener("click", function () {
  const images = [];

  for (let i = 1; i <= 20; i++) {
    images.push(`love_card/${i}.png`);
  }

  const randomIndex = Math.floor(Math.random() * images.length);
  const randomImage = images[randomIndex];

  const imgElement = document.getElementById("random-image");
  imgElement.src = randomImage;
  imgElement.alt = `Random Picture (${randomIndex + 1})`; // Optional: updates the alt text with index
});
