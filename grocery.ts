//Tacara Solomon - Week 1 Typescript Assignment

// create class
class Grocery {
    groceries: string;
    constructor(public name: string, public quantity: string) {
        this.groceries = name + ' ' + quantity + ' ';
    }
}

interface Items {
    name: string;
    quantity: string;
}

 // grocery objects

let apples = new Grocery('apple', '6')
let chips = new Grocery('potato chips', '2')
let milk = new Grocery('almond milk', '1')

function groceries(item: Items) {
    return  item.name + ", " + item.quantity;
}

// groceries array

var groceryArr = [groceries(apples), groceries(chips), groceries(milk)]


document.body.textContent = groceryArr.toString()