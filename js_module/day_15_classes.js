/*Create an Animal class. The class will have name, age, color, legs properties and create different methods*/

class Animal {
    constructor(name, age, color, legs) {
        this.name = name
        this.age = age
        this.color = color
        this.legs = legs
      }  

    getAnimalName() {
        return this.name
    }

    getAnimalAge() {
        return this.age
    }

    getAnimalColor() {
        return this.color
    }
    getCountOfLegs() {
        return this.legs
    }
}

const practice = new Animal('Red', 10, 'grey', 4)
console.log(practice.getAnimalAge())
console.log(practice.getAnimalName())
console.log(practice.getCountOfLegs())
console.log(practice.getAnimalColor())

/*Create a Dog and Cat child class from the Animal Class.*/

class Dog extends Animal {
    constructor() {
        super();
    }
}

class Cat extends Animal {
    constructor() {
        super();
    }
}

/*Override the method you create in Animal class*/

class Lion extends Animal {
    getAnimalName() {
      super.getAnimalName();
      console.log(`${this.name} roars.`);
    }
  }
  
  let lion = new Lion('Simba');
  lion.getAnimalName();

/*Create a class called PersonAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo, addIncome, addExpense and accountBalance methods. 
Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.*/

class PersonAccount {
    constructor(firstname, lastname) {
        this.firstname = firstname,
        this.lastname = lastname,
        this._incomes = [1200],
        this._expenses = [350];
    };
  
    totalIncome() {
        return this._incomes.reduce((acc, el) => {
          return acc += el
        }, 0)
    };
  
    totalExpenses() {
      return this._expenses.reduce((acc, el) => {
        return acc += el
      }, 0)
    };
  
    accountInfo() {
        return this.firstname + ' ' + this.lastname
    };
  
    addIncome(inc) {
        this._incomes.push(inc)
    };
  
    addExpenses(exp) {
        this._expenses.push(exp)
    };
  
    accountBalance() {
        return this.totalIncome() - this.totalExpenses()
    };
}
  
const person1 = new PersonAccount('Jack', 'Jackson')
  
person1.addIncome(150);
console.log(person1.totalIncome());
person1.addExpenses(250);
console.log(person1.totalExpenses());
console.log(person1.accountBalance());

/*You'll need to implement 3 classes: a Deck, a Card and a Player classes.*/
class Card {
    static ranks = { 1: 'Ace', 2:2, 3:3, 4:4, 5:5, 6:6, 7:7, 8:8, 9:9, 10:10, 11:'Jack', 12:'Queen', 13:'King' };
    static suits = ['Hearts','Diamonds','Spades','Clubs'];
  
    constructor(rank, suit) {
        this.rank = rank;
        this.suit = suit;
        this.isFaceCard = this.rank == 1 || this.rank > 10; //Ace or else
    };
  
    toString() {
       let cardRank;
       switch(this.rank) {
            case 11: 
              cardRank = "Jack";
              break;
            case 12: 
              cardRank = "Queen";
              break; 
            case 13: 
              cardRank = "King";
              break;
            case 1: 
              cardRank = "Ace";
              break;
            default: 
              cardRank = this.rank;
       }
       return `${cardRank} of ${this.suit}`;
    };
  
    static compare(cardOne, cardTwo) {
        if (cardOne.rank > cardTwo.rank) {
          return 1
        } else if (cardOne.rank < cardTwo.rank) {
          return -1
        } else {
          return 0
        }
    };
};
  
  // const card1 = new Card(1, 'Hearts')
  // console.log(card1.toString(1))
  
class Deck {
    constructor() {
        this.cards = [];
  
        for (let el in Card.suits) {
            for (let vals in Card.ranks) {
                this.cards.push(new Card(el, vals));
            };
        };
    };
  
    shuffle() {
        this.cards = this.cards.map((el) => ({ el, sort: Math.random() }))
        .sort((first, second) => first.sort - second.sort).map(({ el }) => el)
        return this.cards;
    };
    
    draw(n) {
        return this.cards.splice(this.cards.length -n, n)
    };
};
  
  // const deck1 = new Deck();
  // console.log(deck1.shuffle());
  // console.log(deck1.deck);
  // console.log(deck1.draw(2))
class Player {
    constructor(name) {
        this.name = name;
        this.wins = 0;
        this.deck = new Deck();
        this.deck.shuffle();
    };
    
    static play(playerOne, playerTwo) {
      do {
        let firstPlayerCard = playerOne.deck.draw(1)[0]
        let secondPlayerCard = playerTwo.deck.draw(1)[0]
        
        let result = Card.compare(firstPlayerCard, secondPlayerCard) 
        
        if(result === 1) {
          playerOne.wins++
        } else if(result === -1) {
          playerTwo.wins++
        };
      } while(playerOne.deck.cards.length) 
        
      return `
        ${playerOne.wins > playerTwo.wins ? playerOne.name : playerTwo.name} wins 
        ${playerOne.wins > playerTwo.wins ? playerOne.wins : playerTwo.wins} to 
        ${playerOne.wins < playerTwo.wins ? playerOne.wins : playerTwo.wins} ` 
    };

    emptyCards() {
      return this.deck.reduce((prev, curr) => (prev + curr) * 0, 0) 
    };
};
  
// const player1 = new Player('John')
// const player2 = new Player('Alex')
// console.log(Player.play(player1, player2))
  

class Employee {

    static EMPLOYEES = [];
  
    constructor(id, firstName, lastName, birthday, salary, position = null, department) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = new Date(birthday);
        this.salary = salary;
        this.position = position;
        this.department = department;
        this.age = new Date().getFullYear() - this.birthday.getFullYear();
        this.fullName = `${this.firstName} ${this.lastName}`
        Employee.EMPLOYEES.push(this)
    };
  
    quit() { 
        Employee.EMPLOYEES.splice(Employee.EMPLOYEES.indexOf(this, 1))
    };
        
    retire() {
        this.quit();
        console.log("It was such a pleasure to work with you!");
    };
    
    getFired() { 
        this.quit();
        console.log("Not a big deal!");
    };
  
    changeDepartment(newDepartment) {
        return this.department = newDepartment
    };
  
    changePosition(newPosition) {
        return this.position = newPosition
    };
  
    changeSalary(newSalary) {
        return this.salary = newSalary
    };
     
    getPromoted(benefits) {
        this.change(benefits) 
        console.log("Yoohoooo!")
    };
     
    getDemoted(punishment) {
        this.change(punishment)
        console.log("Damn!")
    }; 
    
    change(benefits) {
        for(const el in benefits) {
            switch(el) {
                case 'salary':
                    this.changeSalary(benefits[el])
                    break;
                case 'position': 
                    this.changePosition(benefits[el])
                    break;
                case 'department':
                    this.changeDepartment(benefits[el])
                    break;
                default:
                    console.log('There is no benefits yet...')
            };
        };
    };
};
  
const n1 = new Employee(1, 'Asap', 'Qua', '2000-10-10', 2300, 'employee', 'dep1');
const n2 = new Employee(2, 'Asap', 'Qua', '2001-10-09', 2300, 'employee', 'dep1');
const n3 = new Employee(3, 'Asap', 'Qua', '1999-08-12', 2300, 'employee', 'dep1');
  
console.log(Employee.EMPLOYEES);
n3.quit();
console.log(Employee.EMPLOYEES);


class Manager extends Employee {
    managedEmps = []
    constructor(id, firstName, lastName, birthday, salary, position = null, department, age) {
        super(id, firstName, lastName, birthday, salary, 'manager', department, age)

        for(let elem of Employee.EMPLOYEES) {
            if(elem.position !== 'manager' && elem.department === this.department) {
                this.managedEmps.push(elem)
            };
        };
    };
};

const managedEmployee1 = new Employee(4, 'Asap', 'Qua', '2000-10-10', 2300, 'employee', 'dep1')
const newManager = new Manager(19, 'Managername', 'ManagerSur', '1980-10-10', 2300, null, 'dep1')
console.log(newManager)
const managedEmployee = new Employee(1, 'Asap', 'Qua', '2000-10-10', 2300, 'employee', 'dep1', 20)

console.log(newmanager.managedEmps)
  
class BlueCollarWorker extends Employee {
    constructor(id, firstName, lastName, birthday, salary, position, department, age) {
        super(id, firstName, lastName, birthday, salary, position, department, age)
    };
};
class HRManager extends Manager {
    constructor(id, firstName, lastName, birthday, salary, position = null, age) {
        super(id, firstName, lastName, birthday, salary, position = null, age)
        this.department = 'hr'
    };
};
class salesManager extends Manager {
    constructor(id, firstName, lastName, birthday, salary, position = null, age) {
        super(id, firstName, lastName, birthday, salary, position = null, age)
        this.department = "manager"
    };
};




