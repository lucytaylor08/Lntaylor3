const inputField = document.getElementById("inputField");
const form = document.getElementById("form");

form.addEventListener("submit", function(event) {
  if(!validateInput(inputField.value)){
    event.preventDefault();
    }
});

function validateInput(value) {
  const inputValue = value;
  const alphanumeric = /^[0-9a-zA-Z]+$/;
  if(!alphanumeric.test(inputValue)){
    displayError("Please enter only alphanumeric characters.");
    return false;
  };
  return true;
};

function displayError(message) {
  const errorMessageContainer = document.getElementById("displayError");
  if(!errorMessageContainer){
    const errorDiv = document.createElement("div");
    errorDiv.id = "displayError";
    errorDiv.style.color = "red";
    errorDiv.innerText = message;
    form.appendChild(errorDiv);
  } else{
    errorMessageContainer.innerText = message;
  }
}