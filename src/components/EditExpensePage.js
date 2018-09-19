import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
  onSubmit = (expenseUpdate) => {
    this.props.startEditExpense(this.props.expense.id, expenseUpdate);
    this.props.history.push('/');
  };

  onRemove = () => {
    this.props.startRemoveExpense({id: this.props.expense.id});
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <ExpenseForm
          expense={this.props.expense}
          onSubmit={this.onSubmit}
        />
        <button onClick={this.onRemove}>Remove</button>
      </div>
    );
  }
}

// const EditExpensePage = (props) => {
//   return (
//     <div>
//       <ExpenseForm
//         expense={props.expense}
//         onSubmit={(expenseUpdate) => {
//           props.dispatch(editExpense(props.expense.id, expenseUpdate));
//           props.history.push('/');
//         }}
//       />
//       <button onClick={() => {
//         props.dispatch(removeExpense({ id: props.expense.id }));
//         props.history.push('/');
//       }}>Remove</button>
//     </div>
//   );
// };

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  };
};

const mapDispatchToProps = (dispatch) => ({
  startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
  startRemoveExpense: (id) => dispatch(startRemoveExpense(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
