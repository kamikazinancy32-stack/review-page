const requestDialog = document.querySelector(".request-dialog");
const requestForm = document.querySelector(".request-form");
const formStatus = document.querySelector(".form-status");
const nameField = document.querySelector("#request-name");

document.querySelectorAll("[data-open-request]").forEach((button) => {
  button.addEventListener("click", () => {
    formStatus.textContent = "";
    requestDialog.showModal();
    nameField.focus();
  });
});

document.querySelector("[data-close-request]").addEventListener("click", () => {
  requestDialog.close();
});

requestDialog.addEventListener("click", (event) => {
  if (event.target === requestDialog) {
    requestDialog.close();
  }
});

requestForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = new FormData(requestForm).get("name").trim();
  formStatus.textContent = `Thanks, ${name}! This demo form does not send or store your information.`;
  requestForm.reset();
});
