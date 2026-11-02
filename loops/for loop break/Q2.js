const password = "admin123";
let isAuthenticated = false;

for (let attempt = 1; attempt <= 5; attempt++) {
  let userInput = prompt(`Attempt ${attempt} of 5 - Enter Password:`);

  if (userInput === password) {
    console.log("Access granted");
    isAuthenticated = true;
    break;
  }
}

if (!isAuthenticated) {
  console.log("Account locked");
}