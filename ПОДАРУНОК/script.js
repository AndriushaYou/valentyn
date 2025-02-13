const evilButton = document.getElementById('evil-button');
const OFFSET = 100; // Відстань, на яку кнопка буде "втікати"

// Обробка кліку по кнопці
evilButton.addEventListener('click', () => {
  alert('Прикро, але я всерівно тебе люблю!'); // Можна змінити повідомлення за потреби
});

// Обробка руху мишки
document.addEventListener('mousemove', (e) => {
  const x = e.pageX;
  const y = e.pageY;
  const buttonBox = evilButton.getBoundingClientRect();
  const horizontalDistanceFrom = distanceFromCenter(buttonBox.x, x, buttonBox.width);
  const verticalDistanceFrom = distanceFromCenter(buttonBox.y, y, buttonBox.height);
  const horizontalOffset = buttonBox.width / 2 + OFFSET;
  const verticalOffset = buttonBox.height / 2 + OFFSET;

  // Якщо курсор близько до кнопки, то вона буде рухатись
  if (Math.abs(horizontalDistanceFrom) <= horizontalOffset && Math.abs(verticalDistanceFrom) <= verticalOffset) {
    setButtonPosition(
      buttonBox.x + horizontalOffset / horizontalDistanceFrom * 10,
      buttonBox.y + verticalOffset / verticalDistanceFrom * 10
    );
  }
});

// Функція для зміщення кнопки
function setButtonPosition(left, top) {
  const windowBox = document.body.getBoundingClientRect();
  const buttonBox = evilButton.getBoundingClientRect();

  // Визначаємо межі екрану
  if (distanceFromCenter(left, windowBox.left, buttonBox.width) < 0) {
    left = windowBox.right - buttonBox.width - OFFSET;
  }
  if (distanceFromCenter(left, windowBox.right, buttonBox.width) > 0) {
    left = windowBox.left + OFFSET;
  }
  if (distanceFromCenter(top, windowBox.top, buttonBox.height) < 0) {
    top = windowBox.bottom - buttonBox.height - OFFSET;
  }
  if (distanceFromCenter(top, windowBox.bottom, buttonBox.height) > 0) {
    top = windowBox.top + OFFSET;
  }

  evilButton.style.left = `${left}px`;
  evilButton.style.top = `${top}px`;
}

// Функція для визначення відстані між центром кнопки та курсором
function distanceFromCenter(boxPosition, mousePosition, boxSize) {
  return boxPosition - mousePosition + boxSize / 2;
}

const heart = document.querySelector(".heart");
const heartText = document.querySelector(".heart-text");
const yesBtn = document.querySelector(".yes-btn");

// Клік на кнопку "Так"
yesBtn.addEventListener("click", function () {
  heart.style.top = "25%"; // Валентинка висувається по центру
  heart.style.opacity = "1"; // Валентинка стає видимою
  heartText.textContent = "Я тебе люблю!";
  heartText.style.color = "#000000";
});
