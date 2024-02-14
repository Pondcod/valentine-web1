let clickCount = 0;
const usedCatImages = [];

// Predefined positions for each cat image
const catPositions = [
  { left: 50, bottom: 100 },
  { left: 220, bottom: 150 },
  { left: 150, top: 50 },
  { left: 150, top: 400 },
  { left: 20, top: 150 },
  { left: 300, top: 150 },
  { left: 20, top: 380 },
  { left: 285, top: 380 },
  { left: 150, top: 700 },


  // Add more positions as needed
];

function showCat() {
  if (clickCount < 10) {
    const catContainer = document.getElementById("catContainer");
    console.log('Clicked!');
    const cat = document.createElement("img");
    const catImage = getRandomCatImage();

    // Check if the image has already been used
    if (!usedCatImages.includes(catImage)) {
      cat.src = catImage;
      cat.className = "cat"; // Add the cat class

      // Set predefined position
      setFixedPosition(cat, catPositions[clickCount]);

      catContainer.appendChild(cat);
      usedCatImages.push(catImage);
      clickCount++;
    }

    if (clickCount === 9) {
      setTimeout(() => {
        window.location.href = "next_page.html"; // Replace with the actual path to your next page
      }, 1000);
    }
  }
}

function setFixedPosition(element, position) {
  element.style.position = "absolute";
  element.style.left = `${position.left}px`;
  element.style.top = `${position.top}px`;
}

function getRandomCatImage() {
  const catImages = [
    "Image 2.png",
    "Image 3.png",
    "Image 4.png",
    "Image 5.png",
    "Image 6.png",
    "Image 8.png",
    "Image 9.png",
    "Image 10.png",
    "Image 11.png",
  ];

  // Shuffle the array to randomize the order of images
  const shuffledCatImages = shuffleArray(catImages);

  return shuffledCatImages[clickCount];
}

// Function to shuffle an array (Fisher-Yates algorithm)
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

