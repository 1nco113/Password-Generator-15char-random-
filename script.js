
const array = [];

let generatedOne = document.getElementById("generated-one")
let generatedTwo = document.getElementById("generated-two")

// Add letters A-Z and a-z
for (let i = 65; i <= 90; i++) {
  array.push(String.fromCharCode(i));      // Uppercase
  array.push(String.fromCharCode(i + 32)); // Lowercase
}

// Add numbers 0-9
for (let i = 0; i <= 9; i++) {
  array.push(i.toString());
}

// Add special characters
const specialChars = ['<', '>', ':', '"', '?', '{'];
array.push(...specialChars);



// Generate password function

function generatePassword() {

    generatedOne.textContent = ""

    for(i = 0; i < 15; i++) {
        let c = Math.floor(Math.random() * array.length)
        generatedOne.textContent += array[c]
        
    }

    
    

    generatedTwo.textContent = ""

    for(i = 0; i < 15; i++) {
        let c = Math.floor(Math.random() * array.length)
        generatedTwo.textContent += array[c]
    }
}


// Copy - Paste action


generatedOne.addEventListener('click', function () {
  let text = generatedOne.textContent;
  // Copy the text inside the text field:
  navigator.clipboard.writeText(text);
  // Alert the copied text:
  alert("Copied the text: " + text);
  })

  generatedTwo.addEventListener('click', function () {
  let text = generatedTwo.textContent;
  // Copy the text inside the text field:
  navigator.clipboard.writeText(text);
  // Alert the copied text:
  alert("Copied the text: " + text);
})
