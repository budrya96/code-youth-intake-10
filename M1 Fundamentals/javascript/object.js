// const car = {
//     make: "Acura",
//     model: "Integra",
//     year: 2024,
//     trim: "elite a-spec",
//     price: 47709,
//     color: "silver"
// }

// console.log(car);
// console.log("trim", car.trim);
// console.log("color", car["color"]);

// console.log(Object.keys(car));
// console.log(Object.values(car));
// console.log(Object.keys(car).length);

let user = {
    username:'GormuWormu',
    password:'123abc',
    email:'Gormu@wormu.ca',
    last_login: 'Sat May 20 2023 00:00:00 GMT-0400'
}

console.log("username: ", user.username);
console.log("email: ", user["email"]);

const passInput = 'abcd1234'

if(user.password != passInput){
    console.log("Incorrect Password")
}
else{
    console.log("Login approved")
}

user.last_login = new Date();
console.log("Last login: ", user.last_login);


const student = {
    id:15643,
    name: "Budry",
    address:{
        country:"Canada",
        province:"Ontario",
        city:"Ottawa"
    },
    email:"asfsds@sfs.com",
    phone:1234567890,
    marks:[68,79,83,75,92]
}

console.log("Name: ", student.name, "ID: ", student["id"], "Address:", student.address.country,student.address.province,student.address.city);


// const recipe = {
//     title: "Pasta",
//     servings: 4,
//     ingredients:["flour","eggs","oil","salt"]
// }

// console.log("Title: ", recipe.title);
// console.log("Serves: ", recipe["servings"]);
// console.log("Ingredients: ");
// console.log(recipe.ingredients[0]);
// console.log(recipe.ingredients[1]);
// console.log(recipe.ingredients[2]);
// console.log(recipe.ingredients[3]);



const books = [
    {
        title: "Harry Potter", 
        author: "Rowling",
        alreadyRead: true
    },

    {
        title: "Lord of the Rings", 
        author: "Tolkein",
        alreadyRead: true
    },

    {
        title: "The Witcher", 
        author: "Sapkowski",
        alreadyRead: false
    },
];

for(let i=0;i<books.length;i++){
     console.log(books[i].title, " by ", books[i].author)
}

for(let i=0;i<books.length;i++){
    if(books[i].alreadyRead == true){
        console.log("You aleady read ", books[i].title, " by ", books[i].author)
    }
    else if(books[i].alreadyRead == false){
        console.log("You still need to read ", books[i].title, " by ", books[i].author)
    }
}
