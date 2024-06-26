document.addEventListener('DOMContentLoaded', function () {
  const cardForm = document.getElementById('cardForm');
  const modal = document.getElementById('modal');
  const certificateContent = document.getElementById('certificateContent');
  const closeModal = document.querySelector('.close');
  
  // Hide the modal initially
  modal.style.display = 'none';

  cardForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // 🚨 Get input values
    const studentNameInput = document.getElementById('studentName');
    const personalMessageInput = document.getElementById('personalMessage');
    const courseNameInput = document.getElementById('courseName'); 

    const studentName = studentNameInput.value;
    const personalMessage = personalMessageInput.value;
    const courseName = courseNameInput.value ? courseNameInput.value : "";  // Fallback if no input - removed required from html

    
    if (studentName.trim() === '' || personalMessage.trim() === '') {
      alert('Please fill in all fields');
      return;
    }
    // Added this condition so that only valid student names are added
    if (!/^[\p{L} \-'’]+$/u.test(studentName.trim())) { //it allows spaces, hyphens & apostrophes. p{L} allows for any letter from any language
      alert('Please enter a valid student name');
      return;
    }

    // Added this to ensure that the certificateContent element exists before updating its content
    if (!certificateContent) {
      alert('Certificate unavailable right now. Please try again later.');
      console.error('Certificate content element not found!');
      return;
    }
    // 🚨 Generate certificate content dynamically
  
    certificateContent.innerHTML = 
      `
        <h1 class="h1">Certificate of Achievement</h1>
        <p class="p">This is to certify that</p>
        <h2>${studentName}</h2>
        <p>has almost completed the</p>
        <h2>${courseName} Course</h2>
        <p>with legendary perseverance and world class bad-assery for never giving up 🏆</p>
        <img src="logo.png" alt="Logo" style="width: 300px; height: auto;">
        <p>${personalMessage}</p>
      `;
    
    //  Display the modal
    modal.style.display = 'block';
  
    // Clear the form inputs
    studentNameInput.value = '';
    personalMessageInput.value = '';
    if(courseNameInput) courseNameInput.value = '';
  });
  
  //  🚨 Close the modal when the close button is clicked
  closeModal.addEventListener('click', function () {
    modal.style.display = 'none';
  });
});
  