function soundPlay() {
  var sound = new Audio();
  sound.src = './light-switch-81967.mp3'; // source of the audio file
  sound.play(); // play the audio
}

function highlightInput(inputId) {
  var input = document.getElementById(inputId);
  input.classList.add('highlight-input'); // Add a CSS class to highlight the input field
}

function resetInput(inputId) {
  var input = document.getElementById(inputId);
  input.classList.remove('highlight-input'); // Remove the highlighting CSS class
}
function validateForm() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  // Check if any of the required fields is empty
  if (name === "" || email === "" || message === "") {

    return false; // Form is not valid
  }

  alert("Message sent successfully!"); // Display a success message
  return true; // Form is valid
}

document.addEventListener('DOMContentLoaded', function () {
  // Select all elements with the class 'gallery-card'
  const projects = document.querySelectorAll('.gallery-card');

  // Iterate over each 'gallery-card' element
  projects.forEach(project => {
    // Find the element with the class 'gallery-card-title' inside each project
    const title = project.querySelector('.gallery-card-title');

    // Add event listener for mouse entering the project element
    project.addEventListener('mouseenter', function () {
      // Smooth scaling on mouse enter
      project.style.transform = 'scale(1.25)';

      // Fade in the title
      title.style.opacity = '1';
    });

    // Add event listener for mouse leaving the project element
    project.addEventListener('mouseleave', function () {
      // Restore the original size on mouse leave
      project.style.transform = 'scale(1)';

      // Hide the title
      title.style.opacity = '0';
    });
  });
});