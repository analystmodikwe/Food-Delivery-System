// a blue print for different types of foods, with{} object distructuring so that oder of properties wont matter and i uses #encapsulation
class Food{
    #price = 0
    constructor({ name, price }){
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
        return `${this.name} costs R${this.price}`;
    }
};


console.log("\n===== PIZZA=====")
// INHERITANCE- creating pizza from Food class
const PIZZA_TYPES = ["margherita", "pepperoni", "hawaiian", "bbq chicken", "veggie"];

class Pizza extends Food {
    constructor({ name, price, pizzaType }){
        super({name, price});
        this.pizzaType = pizzaType;    
    } 

    // setter if customer picks pizza that is not in the array there will be an error
    set pizzaType(value) {
        if(!PIZZA_TYPES.includes(value)) {
            throw new Error(`INVALID PIZZA TYPE. CHOOSE FROM: ${PIZZA_TYPES}`)
        }
        this.pizzaType=value
    }

    get pizzaType()  {
        return this.pizzaType;
    }

    // static method to call or get PIZZA TYPES
    static getTypes() {
        return PIZZA_TYPES
    }

    // 
    describing() {
        return `${this.pizzaType}`
    }
}

console.log("\n===== BURGER =====")
// INHERITANCE- creating burger from Food class
const flavour = ["cheeseBurger", "beefBurger", "ChickenBurger", "hamBurger"]
class Burger extends Food {
    constructor({ name, price, burgerFlavour }) {
        super({name, price});
        this.burgerFlavour = burgerFlavour;
    }
}

console.log("\n===== DRINK =====")
class Drink extends Food {
    constructor({ name, price, drinkType }){
        super({name, price});
        this.drinkType = drinkType;

    }
}