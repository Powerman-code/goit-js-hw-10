import menuItemTpl from "../templates/menuItem.hbs";
// импортируем шаблон
import dishes from "./menu.json";
// импортируем описание блюд
console.log(menuItemTpl(dishes));

const menuItemMarkup = createMenuItemMarkup(dishes);
// Создаем переменную, в которую записываем результат вызова ф-и
// которая создает разметку, и передаем в нее список блюд.
const galaryList = document.querySelector('.js-menu');
// console.log(galaryList);
galaryList.insertAdjacentHTML("beforeend", menuItemMarkup);
// вставляем
function createMenuItemMarkup(dishes) {
  //   return dishes.map((dish) => menuItemTpl(dish)).join("");
  return dishes.map(menuItemTpl).join("");
}
