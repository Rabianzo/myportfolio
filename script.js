// Set up initial variables
let mouseX = window.innerWidth / 2; // Start at the center of the screen
let mouseY = window.innerHeight / 2;
let circleX = mouseX;
let circleY = mouseY;

const circle = document.querySelector('.cursor-circle');
const speed = 0.1; // Adjust speed of the momentum (lower values = more smooth)

document.addEventListener('mousemove', function(e) {
  // Update the target mouse position
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// Linear interpolation function to add smooth movement (momentum)
function lerp(start, end, factor) {
  return start * (1 - factor) + end * factor;
}

function updateCirclePosition() {
  // Smoothly update the circle's position to follow the cursor
  circleX = lerp(circleX, mouseX, speed);
  circleY = lerp(circleY, mouseY, speed);

  // Move the circle
  circle.style.left = `${circleX}px`;
  circle.style.top = `${circleY}px`;

  // Call this function on every animation frame
  requestAnimationFrame(updateCirclePosition);
}

// Start the animation
updateCirclePosition();
