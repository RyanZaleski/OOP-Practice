


class Restaurants {
   
    constructor(name, location, type){
        this._name = name
        this._location = location
        this._type = type
    }

    get name(){
        return this._name
    }

    get location(){
        return this._location
    }

    get type(){
        return this._type
    }

    describe(){
        console.log(`${this._name} is a ${this._type} restaurant located in ${this._location}`)
    }
} 

class Sushi extends Restaurants{
    constructor(name, location, type, mainDish){
        super(name, location, type)
        this._mainDish = mainDish
    }
    
    get mainDish(){
        return this._mainDish
    }

    describe(){
        console.log(`${this._name} is a ${this._type} type restaurant located in ${this._location}, our main dish is called ${this._mainDish}`)
    }
}

class Chicken extends Sushi {
    constructor(name, location, type, mainDish){
    super (name, location, type, mainDish) 
}

describe(){
    console.log(`${this._name} is a ${this._type} type restaurant located in ${this._location}, our main dish is called ${this._mainDish}`)
}

}

class Burgers extends Sushi {
    constructor(name, location, type, mainDish){
    super (name, location, type, mainDish) 
}

describe(){
    console.log(`${this._name} is a ${this._type} type restaurant located in ${this._location}, our main dish is called ${this._mainDish}`)
}

}


let sushiMania = new Sushi('Sushi Mania', 'Edgware', 'Sushi', 'Salmon & Haddock Chefs Special')

let cheatMeals = new Burgers('Cheat Meals','Borehamwood','Burger','Beef & Chicken combo meal')

let Nandos = new Chicken('Nandos','Borehamwood','Chicken','Medium spiced chicken wings')

let restaurants = [sushiMania, cheatMeals, Nandos]

for (person of restaurants){
    person.describe()
}