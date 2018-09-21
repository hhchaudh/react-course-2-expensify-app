import * as React from 'react';
import pluralize from 'pluralize';
import { Link } from 'react-router-dom';
import expenseSum from '../selectors/expenses-total';
import selectExpense from '../selectors/expenses';
import numeral from 'numeral';
import { connect } from 'react-redux';

export const ExpenseSummary = (props) => {
  const expenseCount = props.expenses.length;
  const expenseWord = pluralize('expense', expenseCount);
  const formattedExpenseTotal = numeral(expenseSum(props.expenses) / 100).format('$0,0.00');


  return (
    <div className={"page-header"}>
      <div className={"content-container"}>
        <h1 className={"page-header__title"}>
          Viewing <span>{expenseCount}</span> {expenseWord} totalling <span>{formattedExpenseTotal}</span>
        </h1>
        <div className={"page-header__actions"}>
          <Link className={"button"} to={"/create"}>Add Expense</Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    expenses: selectExpense(state.expenses, state.filters)
  }
};

export default connect(mapStateToProps)(ExpenseSummary);
