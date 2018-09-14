// const person = {
//   name: 'Andrew',
//   age: 27,
//   location: {
//     city: 'Davao',
//     temp: 91
//   }
// };
// 
// const {name: firstname = 'Anonymous', age} = person;
// console.log(`${firstname} is ${age}.`)
// 
// 
// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}.`)
// }
// 
// 
// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     //name: 'Penguin',
//   }
// };

// const { name: publisherName = 'Self-published' } = book.publisher;
// console.log(publisherName);

const address = ['1299 S Juniper Street', 'Davao', 'Philippines', '12345'];
const [, city, country = 'New York'] = address;
console.log(`You are in ${city} ${country}`)

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [object, small, medium] = item;

console.log(`A medium ${object} cost ${medium}.`);