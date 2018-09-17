export default (expenses = []) => {
  return expenses.reduce((sum, expense) => {
    return sum + expense.amount
  }, 0);
}
