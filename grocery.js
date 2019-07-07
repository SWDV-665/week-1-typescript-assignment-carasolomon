//Tacara Solomon - Week 1 Typescript Assignment
// create class
var Grocery = /** @class */ (function () {
    function Grocery(name, quantity) {
        this.name = name;
        this.quantity = quantity;
        this.groceries = name + ' ' + quantity + ' ';
    }
    return Grocery;
}());
// grocery objects
var apples = new Grocery('apple', '6');
var chips = new Grocery('potato chips', '2');
var milk = new Grocery('almond milk', '1');
function groceries(item) {
    return item.name + ", " + item.quantity;
}
// groceries array
var groceryArr = [groceries(apples), groceries(chips), groceries(milk)];
document.body.textContent = groceryArr.toString();
