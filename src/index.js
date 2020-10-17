// import menuItemTpl from "../templates/menuItem.hbs";
// // импортируем шаблон
// import dishes from "./menu.json";
// импортируем описание блюд
// console.log(menuItemTpl(dishes));
import "./styles.css";
import "./pageMarkup.js";
import "./pageTheme.js";


// const menuItemMarkup = createMenuItemMarkup(dishes);
// // Создаем переменную, в которую записываем результат вызова ф-и
// // которая создает разметку, и передаем в нее список блюд.
// const galaryList = document.querySelector('.js-menu');
// // console.log(galaryList);
// const ingredientsList = document.querySelector('.tag-list');

// galaryList.insertAdjacentHTML("beforeend", menuItemMarkup);
// // вставляем
// function createMenuItemMarkup(dishes) {
//   //   return dishes.map((dish) => menuItemTpl(dish)).join("");
//   return dishes.map(menuItemTpl).join("");
// };




// const bodyEl = document.querySelector('body');
// const themeAdjusterCheckboxEl = document.querySelector('.theme-switch__toggle');
// themeAdjusterCheckboxEl.addEventListener('change', onThemeChange);

// const theme = {
//   LIGHT: 'light-theme',
//   DARK: 'dark-theme',
// };

// function onThemeChange(evt) {
//   const currentTheme = evt.currentTarget.checked ? 'dark-theme' : 'light-theme';
//   localStorage.setItem('pageTheme', currentTheme);
//   const savedTheme = localStorage.getItem('pageTheme');
//   console.log(savedTheme);
//   if (savedTheme === theme.LIGHT) {
//     bodyEl.classList.remove(theme.DARK);
//     bodyEl.classList.add(theme.LIGHT);
//   } else {
//     bodyEl.classList.remove(theme.LIGHT);
//     bodyEl.classList.add(theme.DARK);
//   }
// };

// onLocalStorageChange();
// function onLocalStorageChange() {
// if (
//     localStorage.getItem('pageTheme') === null ||
//     localStorage.getItem('pageTheme') === 'light-theme'
//   ) {
//     bodyEl.classList.add(theme.LIGHT);
//     // themeAdjusterCheckboxEl.checked = false;
//   } else {
//     bodyEl.classList.add(theme.DARK);
//     themeAdjusterCheckboxEl.checked = true;
//   }
// }

