// a blue print for different types of foods, with{} object distructuring so that oder of properties wont matter and i uses #encapsulation
class Food{
    #price = 0
    constructor({ name, price }){
        
        // ABSTRACTION- FOOD IS ONLY A BLUE PRINT AND CANNOT BE INSTANTIATED
        if (new.target === Food){
            throw new Error("Food is an abstract class and cannot be created directly.");
        }

        this.name = name;
        this.price = price;
    }

    // setting a price method to not allow prices that are zero, below zero and are strings
    set price (value){
        if (value <= 0 || typeof value !== "number" || Number.isNaN(value)){
            throw new Error ("INVALID PRICE");
        }
        this.#price = value;
    }

    get price(){
        return this.#price;
    }

    // polymorphism here i am using a method that child classescan overiide
    describing(){
        return `${this.name}:  costs: R${this.price}`;
    }

    // standard price for delivery
    deliveryFee(){
        return 20
    }
};


console.log("\n===== PIZZA=====");

// INHERITANCE- creating pizza from Food class
const PIZZA_TYPES = ["margherita", "pepperoni", "hawaiian", "bbq chicken", "veggie"];

class Pizza extends Food {
    #pizzaType;

    constructor({ name, price, pizzaType }){
        super({name, price});
        this.pizzaType = pizzaType;    
    } 

    // setter if customer picks pizza that is not in the array there will be an error
    set pizzaType(value) {
        if(!PIZZA_TYPES.includes(value)) {
            throw new Error(`INVALID PIZZA TYPE. CHOOSE FROM: ${PIZZA_TYPES}`)
        }
        this.#pizzaType=value;
    }

    get pizzaType()  {
        return this.#pizzaType;
    }

    // static method to call or get PIZZA TYPES
    static getTypes() {
        return PIZZA_TYPES
    }

    // 
    describing() {
        return ` ${this.pizzaType} ${super.describing()}  `
    }

    deliveryFee(){
        return super.deliveryFee() + 30
    }
}

const piz = new Pizza({ name: "Pizza", price: 120, pizzaType: "hawaiian" })
console.log(piz.pizzaType);
console.log(piz.describing());
console.log(`DELIVERY FEE: R${piz.deliveryFee()}`);
console.log(Pizza.getTypes());

console.log("\n===== PIZZA=====");


console.log("\n===== BURGER =====")
// INHERITANCE- creating burger from Food class
const flavours = ["cheeseBurger", "beefBurger", "ChickenBurger", "hamBurger"];

class Burger extends Food {
    #burgerFlavour;

    constructor({ name, price, burgerFlavour }) {
        super({name, price});
        this.burgerFlavour = burgerFlavour;
    }

    set burgerFlavour(value) {
        if(!flavours.includes(value)){
            throw new Error(`INVALID BURGER TYPE CHOOSE FROM: ${flavours}`)
        }
        this.#burgerFlavour = value;
    }

    get burgerFlavour() {
        return this.#burgerFlavour;
    }

    static getTypes() {
        return flavours
    }

    describing() {
        return `${this.burgerFlavour} ${super.describing()}`
    }

    deliveryFee(){
        return super.deliveryFee() + 28
    }
}

const burg = new Burger ({ name: "Burger", price: 180, burgerFlavour: "ChickenBurger" })
console.log(burg.burgerFlavour);
console.log(burg.describing());
console.log(`DELIVERY FEE: R${burg.deliveryFee()}`);
console.log(Burger.getTypes());
console.log("\n===== BURGER =====");


console.log("\n===== DRINK =====");
const beverages =["Orange Juice", "Apple Juice", "Coke", "Sprite"]
// a class for drinks
class Drink extends Food {
    #drinkType

    constructor({ name, price, drinkType }){
        super({name, price});
        this.drinkType = drinkType;
    }

    set drinkType(value) {
        if(!beverages.includes(value)){
            throw new Error(`INVALID DRINK CHOOSE FROM: ${beverages}`)
        }
        this.#drinkType = value;
    }

    get drinkType() {
        return this.#drinkType;
    }

    static getTypes() {
        return beverages
    }

    describing() {
        return `${this.#drinkType} ${super.describing()}`
    }

    deliveryFee(){
        return super.deliveryFee() + 5
    }
}

const drin = new Drink ({ name: "Drink", price: 30, drinkType: "Coke" })
console.log(drin.drinkType);
console.log(drin.describing());
console.log(`DELIVERY FEE: R${drin.deliveryFee()}`);
console.log(Drink.getTypes());
console.log("\n===== DRINK =====");


console.log("\n===== Order =====");

class Order {
    #items = []; //private list of food items

    // adding any foot item to the order 
    addItem(item){
        this.#items.push(item)
    }

    // calculating total cost of food items in the order
    calculateTotal(){
        let total = 0;
        this.#items.forEach(item => {
            total += item.price;
        });
        return total;
    }

    // calculating delivery fee for all the items in the order
    calculateDeliveryFee(){
        let totalDeliveryFee = 0;
        this.#items.forEach(item => {
            totalDeliveryFee += item.deliveryFee();
        });
        return totalDeliveryFee;
    }

    // calculating final order total cost including delivery fee
    calculateFinalTotal(){
        return this.calculateTotal() + this.calculateDeliveryFee();
    }

    // veiwing the order with all the items and their prices
    viewOrder(){
        let total = 0;
        console.log("ORDER SUMMARY:");
        this.#items.forEach(item => {
            console.log(item.describing());
            // total += item.price + item.deliveryFee();
        });
        console.log(`SUBTOTAL: R${this.calculateTotal()}`);
        console.log(`TOTAL DELIVERY FEE: R${this.calculateDeliveryFee()}`);
        console.log(`FINAL TOTAL: R${this.calculateFinalTotal()}`);
    }
}
const order = new Order();
order.addItem(burg);
// order.addItem(drin);
order.viewOrder();
console.log("\n===== Order =====");


console.log("\n===== SALAD =====");
// additional food type
class Salad extends Food {
    #saladType;

    constructor({ name, price, saladType }){
        super({name, price});
        this.#saladType = saladType;
    }

    get saladType() {
        return this.#saladType;
    }

    describing() {
        return `${this.#saladType} ${super.describing()}`
    }

    deliveryFee(){
        return super.deliveryFee() + 3
    }
}

const salad = new Salad({ name: "Salad", price: 50, saladType: "Caesar Salad" });
console.log(salad.saladType);
console.log(salad.describing());
console.log(`DELIVERY FEE: R${salad.deliveryFee()}`);
console.log("\n===== SALAD =====");