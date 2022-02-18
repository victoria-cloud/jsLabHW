const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }

/*TASK_1 Find the person who has many skills in the users object*/
//

let result = Object.values(users).reduce((obj1, obj2) => obj1.skills > obj2.skills ? obj1 : obj2);
let nameOfUser = Object.entries(users).filter(el => el[1].email === result.email)[0][0];
console.log(nameOfUser +  ' has '  + result.skills.length + ' skills')

/*TASK_2 Count logged in users, count users having greater than equal to 
50 points from the following object*/

function getProps(usersObj) {
  const userHas50Points = []
  const userLoggedIn = []
  Object.keys(usersObj).filter(user => usersObj[user].points >= 50 ? userHas50Points.push(usersObj[user]) : null)
  Object.keys(usersObj).filter(user => usersObj[user].isLoggedIn ? userLoggedIn.push(usersObj[user]) : null)
      
  console.log('The number of logged in users is - ' + userLoggedIn.length + '\n' + 'The number of users with greater than or equal to 50 points is - ' + userHas50Points.length)
} 

getProps(users)


/*Create an object literal called personAccount. It has firstName, lastName, incomes, 
expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense 
and accountBalance methods. Incomes is a set of incomes and its description and expenses is a 
set of incomes and its description.*/

const personAccount = {
  firstName: 'Julian',
  lastName: 'Casablancas',
  incomes: 300000,
  expenses: 110000,
  totalIncome() { return this.incomes - this.expenses},
  totalExpense() { return this.expenses},
  addIncome(income) { return this.incomes += income},
  addExpense(expense) { return this.expenses += expense},
  accountInfo() { return this.firstName + this.lastName}
}

console.log(personAccount.addIncome(10000)) //310000


/*TASK_3 
Create a function called signUp which allows user to add to the collection. 
If user exists, inform the user that he has already an account
*/ 

const userss = [{
  _id: 'ab12ex',
  username: 'Alex',
  email: 'alex@alex.com',
  password: '123123',
  createdAt:'08/01/2020 9:00 AM',
  isLoggedIn: false
},
{
  _id: 'fg12cy',
  username: 'Asab',
  email: 'asab@asab.com',
  password: '123456',
  createdAt:'08/01/2020 9:30 AM',
  isLoggedIn: true
},
{
  _id: 'zwf8md',
  username: 'Brook',
  email: 'brook@brook.com',
  password: '123111',
  createdAt:'08/01/2020 9:45 AM',
  isLoggedIn: true
},
{
  _id: 'eefamr',
  username: 'Martha',
  email: 'martha@martha.com',
  password: '123222',
  createdAt:'08/01/2020 9:50 AM',
  isLoggedIn: false
},
{
  _id: 'ghderc',
  username: 'Thomas',
  email: 'thomas@thomas.com',
  password: '123333',
  createdAt:'08/01/2020 10:00 AM',
  isLoggedIn: false
}
  ]

function signIn(object, arrobjs) {
  for (let index = 0; index < arrobjs.length; index++) {
    if (arrobjs[index]._id == object._id) {
      console.log('User exist!')
    }
  }  
}
  
signIn({"_id":"ab12ex","username":"Alex","email":"alex@alex.com","password":"123123","createdAt":"08/01/2020 9:00 AM","isLoggedIn":false}, userss)
/*The products array has three elements and each of them has six properties.
a. Create a function called rateProduct which rates the product
b. Create a function called averageRating which calculate the average rating of a product*/

const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
 ] 

 function rateProduct(prods, addRate) {
  const newArr = []
  Object.keys(prods).forEach(prod => newArr.push(prods[prod].ratings))
  for (let i = 0; i < newArr.length; i++) {
    for (let e = 0; e < newArr[i].length; e++) {
      console.log(newArr[i][e].rate + addRate)
    }
  }
}
rateProduct(products, 1)

/*Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.*/

function rateProduct(addLike) {

  const products = [
    {
      _id: 'eedfcf',
      name: 'mobile phone',
      description: 'Huawei Honor',
      price: 200,
      ratings: [
        { userId: 'fg12cy', rate: 5 },
        { userId: 'zwf8md', rate: 4.5 }
      ],
      likes: []
    },
    {
      _id: 'aegfal',
      name: 'Laptop',
      description: 'MacPro: System Darwin',
      price: 2500,
      ratings: [],
      likes: ['fg12cy']
    },
    {
      _id: 'hedfcg',
      name: 'TV',
      description: 'Smart TV:Procaster',
      price: 400,
      ratings: [{ userId: 'fg12cy', rate: 5 }],
      likes: ['fg12cy']
    }
   ]
  Object.keys(products).forEach(prod => products[prod].likes != addLike? products[prod].likes.push(addLike) : 0 )
  Object.keys(products).forEach(prod => products[prod].likes == addLike? products[prod].likes.pop(addLike) : 0 )
  console.log(products)
}

rateProduct('like')
rateProduct(1)
rateProduct('fg12cy')