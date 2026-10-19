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
};

// INHERITANCE- creating pizza from Food class

class Pizza extends Food {
    constructor({ name, price, pizzaType, pizzaSize }){
        super({name, price});
        this.pizzaType = pizzaType;
        this.pizzaSize = pizzaSize;
    }
    
}