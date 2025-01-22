// Get all the buttons and dropdowns
const buttons = document.querySelectorAll("[id^='mega-menu-'][id$='-button']");
const dropdowns = document.querySelectorAll("[id^='mega-menu-'][id$='-dropdown']");
const megaMenuButton = document.getElementById("mega-menu-button");
const megaMenuFull = document.getElementById("mega-menu-full");

// Add event listener to the main menu button for mobile
if (megaMenuButton) {
  megaMenuButton.addEventListener("click", (event) => {
    megaMenuFull.classList.toggle("hidden");
    event.stopPropagation(); // Prevent the click from propagating to the document
  });
}

// Add event listeners to all dropdown buttons
buttons.forEach(button => {
  button.addEventListener("click", (event) => {
    // Get the corresponding dropdown menu for the button clicked
    const dropdownId = button.id.replace("-button", "-dropdown");
    const dropdown = document.getElementById(dropdownId);

    // Toggle the clicked dropdown and hide others
    dropdowns.forEach(drop => {
      if (drop.id === dropdownId) {
        drop.classList.toggle("hidden");
      } else {
        drop.classList.add("hidden");
      }
    });

    event.stopPropagation(); // Prevent the click from propagating to the document
  });
});

// Close menu when clicking outside
document.addEventListener("click", () => {
  // Close the entire menu on mobile
  if (!megaMenuFull.classList.contains("hidden")) {
    megaMenuFull.classList.add("hidden");
  }

  // Close all dropdowns
  dropdowns.forEach(drop => {
    drop.classList.add("hidden");
  });
});
