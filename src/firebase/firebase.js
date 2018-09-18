import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// const logExpenses = (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//
//   console.log(expenses);
// };
//
// const catchChanged = (changedExpenseSnapshot) => {
//   console.log(changedExpenseSnapshot.key, changedExpenseSnapshot.val());
// };
//
// firebase.initializeApp(config);
//
// const database = firebase.database();
//
// database.ref('expenses').on('child_changed', catchChanged);
//
// // expenses.forEach(({description, note, amount, createdAt}) => {
// //   database.ref('expenses').push({
// //     description,
// //     note,
// //     amount,
// //     createdAt
// //   })
// // });
// // database.ref('notes').push({
// //   title: 'Course Topics',
// //   body: 'React Native, Angular, Python'
// // });
//
// // const firebaseNotes = {
// //   notes: {
// //     apsdwp: {
// //       title: 'First note!',
// //       body: 'this is my note'
// //     },
// //     pfddjsa: {
// //       title: 'Another note',
// //       body: 'This is my note'
// //     }
// //   }
// // };
// // const notes = [{
// //   id: '12',
// //   title: 'First note!',
// //   body: 'This is my note'
// // }, {
// //   id: '761ase',
// //   title: 'Another note',
// //   body: 'This is my note'
// // }];
// //
// // database.ref('notes').set(notes);
// // const showMsg = (personData) => {
// //   console.log(`${personData.name} is a ${personData.job.title} at ${personData.job.company}`);
// // };
//
// // database.ref().on('value', (snapshot) => {
// //   console.log(snapshot.val());
// // });
// //
// // setTimeout(() => {
// //   database.ref('age').set(33);
// // }, 3500);
// //
// // setTimeout(() => {
// //   database.ref().off();
// // }, 7000);
// //
// // setTimeout(() => {
// //   database.ref('age').set(34);
// // }, 10500);
//
// // database.ref()
// //   .once('value')
// //   .then((snapshot) => {
// //     showMsg(snapshot.val());
// //   })
// //   .catch((e) => {
// //     console.log('Error fetching data', e);
// //   });
// //
// // database.ref().on('value', (snapshot) => {
// //   showMsg(snapshot.val());
// // });
//
// // database.ref()
// //   .once('value')
// //   .then((snapshot) => {
// //     const val = snapshot.val();
// //     console.log(val);
// //   })
// //   .catch((e) => {
// //     console.log('Error fetching data', e);
// //   });
// // database.ref().set({
// //   name: 'Haaris Chaudhry',
// //   age: 32,
// //   stressLevel: 6,
// //   job: {
// //     title: 'Software Developer',
// //     company: 'Google'
// //   },
// //   isSingle: false,
// //   location: {
// //     city: 'Lawrence',
// //     country: 'United States'
// //   }
// // }).then(() => {
// //   console.log('executed');
// // }).catch((error) => {
// //   console.log(error);
// // });
// //
// // database.ref().update({
// //   stressLevel: 9,
// //   'job/company': 'Amazon',
// //   'location/city': 'Seattle'
// // });
