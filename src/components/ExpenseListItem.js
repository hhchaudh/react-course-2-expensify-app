import React from 'react';
import {Link} from 'react-router-dom';


const ExpenseListItem = ({id, description, amount, createdAt}) => (
  <div>
    <Link to={`/edit/${id}`}><h3>{description}</h3></Link>
    <p>{amount} - {createdAt}</p>
  </div>
);


export default ExpenseListItem;


// export default ExpenseListItem;

// const mapStateToProps = (state) => {
//   return {
//     expenses: state.expenses
//   };
// };
//
// export default connect(mapStateToProps)(ExpenseListItem);


//   { props.expenses.map((expense) => (
//     expense.description
// ))}
// { props.expenses.map((expense) => (
//   expense.amount
// ))}
