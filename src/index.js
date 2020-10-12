import menuItemTpl from "../templates/menuItem.hbs";
import dishes from "./menu.json";
console.log(menuItemTpl(dishes));

const menuItemMarkup = createMenuItemMarkup(dishes);
const galaryList = document.querySelector('.js-menu');
// console.log(galaryList);
galaryList.insertAdjacentHTML("beforeend", menuItemMarkup);

function createMenuItemMarkup(dishes) {
  //   return dishes.map((dish) => menuItemTpl(dish)).join("");
  return dishes.map(menuItemTpl).join("");
}
