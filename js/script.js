'use strict';

$(document).ready(function () {

/* Табы */
  $(".popup").on("click", ".popup-tab", function () {
    $(".popup").find(".active").removeClass("active");

    $(this).addClass("active");
    $(".tab-form").eq($(this).index()).addClass("active");
  });

/* Скрыть/показать пароль */
  let pass = $('input[type="password"]');
  pass.attr('type', 'text');

  $('.hide').click(function () {
    let type = $(this).next().attr('type');

    if (type == "text") {
      $(this).next().attr('type', 'password');
      $(this).text('Показать');
    } else if (type == "password") {
      $(this).next().attr('type', 'text');
      $(this).text('Скрыть');
    }
  });

/* Валидация формы */
  // E-mail
  $('input[name="email"]').on('blur', function () {
    let email = $(this).val();

    if (email.length > 0 && (email.match(/.+?\@.+/g) || []).length !== 1 || email.length == 0) {
      $(this).removeClass('good');
      $(this).addClass('fail');
      $(this).next().text('Вы ввели некорректный e-mail!');
    } else {
      $(this).removeClass('fail');
      $(this).addClass('good');
      $(this).next().text('');
    }
  });
  // Пароль
  $('input[name="password"]').on('blur', function () {
    let pass = $(this).val();

    if (pass.length == 0) {
      $(this).removeClass('good');
      $(this).addClass('fail');
      $(this).next().text('Поле пустое. Введите пароль.');
    } else {
      $(this).removeClass('fail');
      $(this).addClass('good');
      $(this).next().text('');
    }
  });
  // Имя
  $('input[name="name"]').on('blur', function () {
    let name = $(this).val();

    if (name.length == 0) {
      $(this).removeClass('good');
      $(this).addClass('fail');
      $(this).next().text('Поле пустое. Введите имя.');
    } else {
      $(this).removeClass('fail');
      $(this).addClass('good');
      $(this).next().text('');
    }
  });

/* localStorage */
  // localStorage.clear();
  let checkbox = document.getElementById('memorize'),
      email = document.getElementById('email'),
      password = document.getElementById('password');

  //Чтобы checkbox оставался выбранным  после перезагрузки страницы
  if (localStorage.getItem("isChecked") === "true") {
    checkbox.checked = true;
    email.value = localStorage.getItem("email");
    password.value = localStorage.getItem("password");
  }
    
  checkbox.addEventListener("click", function () {
    localStorage.setItem("isChecked", true);
    localStorage.setItem("email", email.value);
    localStorage.setItem("password", password.value);
  });
});