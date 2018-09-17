import * as React from 'react';
import pluralize from 'pluralize';
import expenseSum from '../selectors/expenses-total';
import selectExpense from '../selectors/expenses';
import numeral from 'numeral';
import { connect } from 'react-redux';

export const ExpenseSummary = (props) => (
  <div>
    {
      props.expenses.length === 0 ?
      <p>No Expenses to view</p> :
      <p>{`Viewing ${props.expenses.length} ${pluralize('expense', props.expenses.length)} totalling ${numeral(expenseSum(props.expenses) / 100).format('$0,0.00')}`}</p>
    }
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpense(state.expenses, state.filters)
  }
};

export default connect(mapStateToProps)(ExpenseSummary);
