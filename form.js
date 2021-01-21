// יצירת משתנים לכל לייבל

const form = document.querySelector(".form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const text = document.getElementById("text");

//bubling parent element
// להראות שגיאות
function showError(input, message) {
  const formcontrol = input.parentElement; //div - parent
  formcontrol.className = "form-control error";
  const small = formcontrol.querySelector("small");
  small.innerHTML = message;
}

function showSuccess(input, message) {
  const formcontrol = input.parentElement;
  formcontrol.className = "form-control success";
}

//prevent the submit
//למנוע שליחה
form.addEventListener("submit", function () {
  /*  e.preventDefault(); */
  //Check the form fields
  if (username.value == "") {
    showError(username, "Name is Required");
  } else {
    showSuccess(username);
  }
  if (email.value == "") {
    showError(email, "Email is Required");
  } else {
    showSuccess(email);
  }
});
