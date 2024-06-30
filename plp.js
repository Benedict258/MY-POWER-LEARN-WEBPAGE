// Get the elements
const whatToLearnNextSection = document.querySelector('section:nth-child(3)');
const formFields = document.querySelectorAll('form input');

// Add event listener to the section
whatToLearnNextSection.addEventListener('click', () => {
    // Toggle the visibility of the form fields
    formFields.forEach((field) => {
        field.style.display = field.style.display === 'none' ? 'block' : 'none';
    });
});