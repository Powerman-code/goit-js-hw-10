import menuItemTpl from "../templates/menuItem.hbs";
// импортируем шаблон
import dishes from "./menu.json";
// импортируем описание блюд
// console.log(menuItemTpl(dishes));

const menuItemMarkup = createMenuItemMarkup(dishes);
// Создаем переменную, в которую записываем результат вызова ф-и
// которая создает разметку, и передаем в нее список блюд.
const galaryList = document.querySelector('.js-menu');
// console.log(galaryList);
const ingredientsList = document.querySelector('.tag-list');

galaryList.insertAdjacentHTML("beforeend", menuItemMarkup);
// вставляем
function createMenuItemMarkup(dishes) {
  //   return dishes.map((dish) => menuItemTpl(dish)).join("");
  return dishes.map(menuItemTpl).join("");
};




const bodyEl = document.querySelector('body');
const themeAdjusterCheckboxEl = document.querySelector('.theme-switch__toggle');
themeAdjusterCheckboxEl.addEventListener('change', onThemeChange);

const theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

function onThemeChange(evt) {
  const currentTheme = evt.currentTarget.checked ? 'dark-theme' : 'light-theme';
  localStorage.setItem('pageTheme', currentTheme);
  const savedTheme = localStorage.getItem('pageTheme');
  console.log(savedTheme);
  if (savedTheme === theme.LIGHT) {
    bodyEl.classList.remove(theme.DARK);
    bodyEl.classList.add(theme.LIGHT);
  } else {
    bodyEl.classList.remove(theme.LIGHT);
    bodyEl.classList.add(theme.DARK);
  }

  // if (savedTheme === theme.DARK) {
  //   bodyEl.classList.remove(theme.LIGHT);
  //   themeAdjusterCheckboxEl.checked = true;
  // } else {
  //   bodyEl.classList.remove(theme.DARK);
  // }
  // onLocalStorageChange(savedTheme);

}

// onLocalStorageChange(savedTheme);
// function onLocalStorageChange(savedTheme) {
//   // if (savedTheme === '') {
//   //   bodyEl.classList.add(theme.LIGHT);
//   // }

//   // else if (savedTheme === bodyEl.classList.contains("dark-theme")) {
//   //   bodyEl.classList.remove(theme.LIGHT);
//   //   bodyEl.classList.add(theme.DARK);
//   //   themeAdjusterCheckboxEl.checked = true;
//   //   // console.log('да, тема темная');
//   //   console.log(savedTheme);
//   //   console.log(bodyEl);
//   //   console.log(savedTheme === bodyEl.classList.contains("light-theme"));
//   //   // console.log(bodyEl.classList.contains("light-theme"));

//   // } else if (savedTheme === bodyEl.classList.contains("light-theme")) {
//   //   // console.log('нет, тема светлая');

//   //   bodyEl.classList.remove(theme.DARK);
//   //   bodyEl.classList.add(theme.LIGHT);
//   //   console.log(bodyEl);
//   //   console.log(savedTheme);
//   //   console.log(savedTheme === bodyEl.classList.contains("light-theme"));
//   //   // console.log(bodyEl.classList.contains("light-theme"));
//   // }



// };

onLocalStorageChange();
function onLocalStorageChange() {
if (
    localStorage.getItem('pageTheme') === null ||
    localStorage.getItem('pageTheme') === 'light-theme'
  ) {
    bodyEl.classList.add(theme.LIGHT);
    // themeAdjusterCheckboxEl.checked = false;
  } else {
    bodyEl.classList.add(theme.DARK);
    themeAdjusterCheckboxEl.checked = true;
  }
}

// const STORAGE_KEY = 'lightTheme';
// const savedTheme = localStorage.getItem(STORAGE_KEY);

// bodyEl.classList.add(theme.LIGHT);

// function onThemeChange(evt) {
//   console.log('click');
//   // console.log(evt.currentTarget.checked);

//   if (evt.currentTarget.checked) {
//     bodyEl.classList.remove("light-theme");
//     bodyEl.classList.add("dark-theme");
//     themeAdjusterCheckboxEl.checked;
//     localStorage.setItem('pageTheme','dark-theme');
//     // console.log(localStorage)
//     // console.log(themeAdjusterCheckboxEl.checked)
//   }

//   if (!evt.currentTarget.checked) {
//     bodyEl.classList.remove("dark-theme");
//     bodyEl.classList.add("light-theme");
//     localStorage.setItem('pageTheme','light-theme');
//     // console.log(localStorage);
//   }
//   console.log(bodyEl);
// };

// if (localStorage.pageTheme !== bodyEl.classList.contains("light-theme")) {
//   bodyEl.classList.add("light-theme");
//   bodyEl.classList.remove(".dark-theme");

//     // console.log(bodyEl);
//     // console.log(localStorage.pageTheme);
//     // console.log(localStorage.pageTheme);
// } else {
//   bodyEl.classList.remove(".light-theme");
//   bodyEl.classList.add(".dark-theme");
// };
//   // console.log(localStorage.pageTheme !== bodyEl.classList.contains("light-theme"))

// const savedTheme = localStorage.getItem('pageTheme');
// console.log(theTheme);

// function onThemeChange(evt) {
//   console.log('click');
//   if (evt.currentTarget.checked) {
//     localStorage.setItem('pageTheme','dark-theme');
//   }

//   else {
//     localStorage.setItem('pageTheme','light-theme');
//   }
//   console.log(bodyEl);
// };