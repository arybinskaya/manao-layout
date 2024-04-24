document.getElementById("myForm").addEventListener("submit", function (event) {
  const nameInput = document.getElementById("nameInput");
  const siteInput = document.getElementById("siteInput");
  const descriptionTextarea = document.getElementById("descriptionTextarea");
  const consultationCheckbox = document.getElementById("consultationCheckbox");
  const tariffCheckbox = document.getElementById("tariffCheckbox");
  const accessCheckbox = document.getElementById("accessCheckbox");

  if (
    !nameInput.checkValidity() ||
    !siteInput.checkValidity() ||
    !descriptionTextarea.checkValidity()
  ) {
    alert("Пожалуйста, заполните все поля корректно");
    event.preventDefault();
    return;
  }

  if (
    !consultationCheckbox.checked &&
    !tariffCheckbox.checked &&
    !accessCheckbox.checked
  ) {
    alert("Пожалуйста, выберите хотя бы один вариант");
    event.preventDefault();
    return;
  }

  let selectedCheckbox = "";
  if (consultationCheckbox.checked) {
    selectedCheckbox = "Консультация";
  } else if (tariffCheckbox.checked) {
    selectedCheckbox = "Тариф";
  } else if (accessCheckbox.checked) {
    selectedCheckbox = "Доступ";
  }

  console.log("Выбранный вариант:", selectedCheckbox);
  console.log("Имя:", nameInput.value);
  console.log("Адрес сайта:", siteInput.value);
  console.log("Описание задач:", descriptionTextarea.value);

  nameInput.value = "";
  siteInput.value = "";
  descriptionTextarea.value = "";
  consultationCheckbox.checked = false;
  tariffCheckbox.checked = false;
  accessCheckbox.checked = false;

  document.getElementById("popup").classList.add("show");
  event.preventDefault();
});

document.getElementById("popup").addEventListener("click", function (event) {
  if (event.target === this) {
    this.classList.remove("show");
  }
});
