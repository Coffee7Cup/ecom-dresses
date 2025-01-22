// Get all the buttons and dropdowns
const buttons = document.querySelectorAll("[id^='mega-menu-'][id$='-button']");
const dropdowns = document.querySelectorAll("[id^='mega-menu-'][id$='-dropdown']");

// Add event listeners to all buttons
buttons.forEach(button => {
  button.addEventListener("click", () => {
    // Get the corresponding dropdown menu for the button clicked
    const dropdownId = button.id.replace("-button", "-dropdown");
    const dropdown = document.getElementById(dropdownId);

    // Toggle the clicked dropdown and hide others
    dropdowns.forEach(d => {
      if (d.id === dropdownId) {
        d.classList.toggle("hidden");
      } else {
        d.classList.add("hidden");
      }
    });
  });
});