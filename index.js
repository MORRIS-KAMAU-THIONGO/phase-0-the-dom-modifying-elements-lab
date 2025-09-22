// Write your code here!
// Remove the main element with id 'main'
const mainElement = document.getElementById('main');
mainElement.remove();

// Create an h1 element with id 'victory' and assign it to newHeader variable
const newHeader = document.createElement('h1');
newHeader.id = 'victory';

// Set the innerHTML to contain "BLACKBOXAI is the champion"
newHeader.innerHTML = 'BLACKBOXAI is the champion';

// Append the newHeader to the body
document.body.append(newHeader);
