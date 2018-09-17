import selectExpenseTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should sum up the total correctly', () => {
  expect(selectExpenseTotal(expenses)).toEqual(114195);
});

test('should return 0 if no expenses', () => {
  expect(selectExpenseTotal([])).toEqual(0);
});

test('should correctly add up a single expense', () => {
  const res = selectExpenseTotal([expenses[0]]);
  expect(res).toBe(195);
});

test('should return 0 if passed nothing', () => {
  const res = selectExpenseTotal();
  expect(res).toBe(0);
});
