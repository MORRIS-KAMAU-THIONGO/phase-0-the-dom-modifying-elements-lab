
// index.js
// Remove the main#main node
document.querySelector('main#main').remove();

// Create a new <h1> element
const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.textContent = 'YOUR-NAME is the champion'; // Replace YOUR-NAME with your actual name

document.body.appendChild(newHeader);