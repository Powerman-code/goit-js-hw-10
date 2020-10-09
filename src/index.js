import menuItemTpl from "../templates/menuItem.hbs";
import dishes from "./menu.json";
console.log(menuItemTpl);

const menuItemMarkup = createMenuItemMarkup(dishes);

function createMenuItemMarkup(dishes) {
  //   return dishes.map((dish) => menuItemTpl(dish)).join("");
  return dishes.map(menuItemTpl).join("");
}
