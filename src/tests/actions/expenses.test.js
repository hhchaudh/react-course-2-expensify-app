import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  startAddExpense,
  startEditExpense,
  startSetExpenses,
  startRemoveExpense,
  addExpense,
  editExpense,
  removeExpense,
  setExpenses
} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const uid = 'thisismytestuid';
const defaultAuthState = { auth: { uid } };
const createMockStore = configureMockStore([thunk]);

beforeEach( async () => {
  const expensesData = {};
  expenses.forEach(({id, description, note, amount, createdAt }) => {
    expensesData[id] = { description, note, amount, createdAt }
  });
  await database.ref(`users/${uid}/expenses`).set(expensesData);
});

test('Should setup remove expense action object', () => {
  const action = removeExpense({ id: '123abc' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc',
  });
});

test('Should remove expense from test db and store', async () => {
  const store = createMockStore(defaultAuthState);

  await store.dispatch(startRemoveExpense(expenses[1])).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'REMOVE_EXPENSE',
      id: expenses[1].id
    })
  });

  await database.ref(`users/${uid}/expenses/${expenses[1].id}`)
    .once('value')
    .then((snapshot) => {
      expect(snapshot.val()).toBe(null);
    });
});

test('Should setup EDIT expense action object', () => {
  const action = editExpense('123abc', { note:'new note value' } );
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: { 
      note: 'new note value' 
    }
  });
});

test('Should edit database and update store', async () => {
  const store = createMockStore(defaultAuthState);
  const id = expenses[1].id;
  const updates = {
    note: 'Get money from Jim',
    amount: 30000,
    createdAt: 12345
  };

  await store.dispatch(startEditExpense(id, updates))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'EDIT_EXPENSE',
        id,
        updates
      });
    });

  await database.ref(`users/${uid}/expenses/${id}`).once('value')
    .then((snapshot) => {
      expect(snapshot.val()).toEqual({
        description: expenses[1].description,
        note: expenses[1].note,
        amount: expenses[1].amount,
        createdAt: expenses[1].createdAt,
        ...updates
      })
    })
});

test('should setup add expense action object with provided values', () => {
  const action = addExpense(expenses[2]);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[2]
  });
});

test('should add expense to database and store', async () => {
  const store = createMockStore(defaultAuthState);
  let actions = null;
  const expenseData = {
    description: 'Mouse',
    amount: 3000,
    note: 'This one is better',
    createdAt: 1000
  };

  await store.dispatch(startAddExpense(expenseData)).then(() => {
    actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseData
      }
    });
  });

  if (actions) {
    await database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value').then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseData);
    });
  } else {
    throw new Error('Actions array not set!');
  }
});

test('should add expense with defaults to database and store', async () => {
  const store = createMockStore(defaultAuthState);
  let actions = null;
  const defaultData = {
    description: '',
    note: '',
    amount: 0,
    createdAt: 0
  };

  await store.dispatch(startAddExpense({})).then(() => {
    actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...defaultData
      }
    });
  });

  if (actions) {
    await database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value').then((snapshot) => {
      expect(snapshot.val()).toEqual(defaultData);
    });
  } else {
    throw new Error('Actions array not set!');
  }
});

test('should setup set expense action object with data', () => {
  const action = setExpenses(expenses);
  expect(action).toEqual({
    type: 'SET_EXPENSES',
    expenses
  });
});

test('should set expenses from the test db', async () => {
  const store = createMockStore(defaultAuthState);
  let actions = null;
  await store.dispatch(startSetExpenses()).then(() => {
    actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'SET_EXPENSES',
      expenses
    });
  });
});
