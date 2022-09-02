import { clearForm, toggleForm } from "./form"
// import "./submit"
import "./database"
import { createStuff, getDb, initDb, deleteDb } from "./database"
import { fetchCards } from "./cards"

// Import CSS
import "../css/index.css"

// Import Bootstrap
import { Tooltip, Toast, Popover } from 'bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"

// images
import Logo from "../images/cageBunny.jpeg"
import Bear from "../images/bear.png"
import Dog from "../images/dog.png"


window.deleteCard = (e) => {
    let id = parseInt(e.id)
    // Delete the card
    deleteDb(id)
    // Reload the DOM
    fetchCards()
}

window.addEventListener('load', function() {
    initDb()
    fetchCards()
    document.getElementById('logo').src = Logo
    document.getElementById('bearThumbnail').src = Bear
    document.getElementById('dogThumbnail').src = Dog
})

  // Form functionality
  const form = document.getElementById("formToggle");
  const newContactButton = document.getElementById("new-contact");
  let submitBtnToUpdate = false;
  let profileId;
  
  newContactButton.addEventListener('click', event => {
    toggleForm()
   })
  
  form.addEventListener('submit', event => {
    // Handle data
    event.preventDefault();
  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let email = document.getElementById("email").value;
  let profile = document.querySelector('input[type="radio"]:checked').value;
  
    // Post form data to IndexedDB OR Edit an existing card in IndexedDB
  if (submitBtnToUpdate == false) {
    createStuff(name, email, phone, profile);
  } else {
  
    fetchCards();
      // Toggles the submit button back to POST functionality
    submitBtnToUpdate = false;
  }
  
  // Clear form
  clearForm();
  // Toggle form
  toggleForm();
  // Reload the DOM
  fetchCards();



  });