class Cat {
    constructor(name, sex){
        this.name = name;
        this.sex = sex;
    }
    speak(){
        return `${this.name} says meow!`;
    }
}
const oldCat = new Cat("Burn")
console.log(oldCat.speak());

class Dog {
    constructor(name, sex){
        this.name = name;
        this.sex = sex;
    }
    speak(){
        return `${this.name} says woof!`;
    }

}
const oldDog = new Dog("Lexi")
console.log(oldDog.speak());



class Bird{
    constructor(name, sex){
        this.name = name;
        this.sex = sex;
    }
    speak(){
        if(`${this.sex} === male`){
            return `It's me! ${this.name}, the parrot!`;
        }else{
            return `${this.name} say squawk!`
        }

        
    }

}
const oldBird = new Bird ("Parrot", "female")
console.log(oldBird.speak())