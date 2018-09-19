import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from "../../components/EditExpensePage";
import expenses from '../fixtures/expenses';

let expenseToEdit, editExpense, removeExpense, history, wrapper;

beforeEach(() => {
  expenseToEdit=expenses[0];
  editExpense = jest.fn();
  removeExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<EditExpensePage
    editExpense={editExpense}
    startRemoveExpense={removeExpense}
    history={history}
    expense={expenseToEdit}
  />)
});

test('should render EditExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
  let expenseUpdates = {
    description: 'Internet Bill',
    amount: 100000,
    createdAt: 1000
  };
  wrapper.find('ExpenseForm').prop('onSubmit')(expenseUpdates);
  expect(editExpense).toHaveBeenLastCalledWith(expenseToEdit.id, expenseUpdates);
  expect(history.push).toHaveBeenLastCalledWith('/');
});

test('should handle onRemove', () => {
  wrapper.find('button').simulate('click');
  expect(removeExpense).toHaveBeenLastCalledWith({id: expenseToEdit.id});
  expect(history.push).toHaveBeenLastCalledWith('/');
});
