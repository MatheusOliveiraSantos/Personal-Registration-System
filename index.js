const form = document.getElementById("form");
const userName = document.getElementById("userName");
const userDate = document.getElementById("userDate");
const userCPF = document.getElementById("userCPF");

let nameValue = null;
let dateValue = null;
let cpfValue = null;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (checkInputs()) {
    var diffYears = Math.floor(
      (new Date() - new Date(dateValue)) / (1000 * 31556926)
    );
    alert("Você tem " + diffYears + " anos de idade");
    console.log({ data: dateValue, cpfValue, nameValue });
  }
});

function checkInputs() {
  nameValue = userName.value.trim();
  dateValue = userDate.value.trim();
  cpfValue = userCPF.value.trim();

  if (nameValue === "") {
    errorValidation(userName, "Preencha este campo");
    return false;
  } else {
    successValidation(userName);
  }

  if (dateValue === "") {
    errorValidation(userDate, "Preencha este campo");
    return false;
  } else {
    successValidation(userDate);
  }

  cpfValue = cpfValue.match(/\d+/g).join("");

  if (cpfValue === "") {
    errorValidation(userCPF, "Preencha este campo");
    return false;
  } else {
    if (submitCPF(cpfValue)) {
      successValidation(userCPF);
    } else {
      errorValidation(userCPF, "CPF inválido");
      return false;
    }
  }
  return true;
}

function successValidation(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function errorValidation(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  small.innerText = message;
  formControl.className = "form-control error";
}

function submitCPF(stringCPF) {
  var sum;
  var rest;
  sum = 0;
  if (stringCPF == "00000000000") {
    return false;
  }

  for (i = 1; i <= 9; i++) {
    sum = sum + parseInt(stringCPF.substring(i - 1, i)) * (11 - i);
  }

  rest = sum % 11;

  if (rest == 10 || rest == 11 || rest < 2) {
    rest = 0;
  } else {
    rest = 11 - rest;
  }

  if (rest != parseInt(stringCPF.substring(9, 10))) {
    return false;
  }

  sum = 0;

  for (i = 1; i <= 10; i++) {
    sum = sum + parseInt(stringCPF.substring(i - 1, i)) * (12 - i);
  }
  rest = sum % 11;

  if (rest == 10 || rest == 11 || rest < 2) {
    rest = 0;
  } else {
    rest = 11 - rest;
  }

  if (rest != parseInt(stringCPF.substring(10, 11))) {
    return false;
  }

  return true;
}
