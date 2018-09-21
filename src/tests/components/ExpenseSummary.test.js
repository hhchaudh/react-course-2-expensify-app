import * as React from 'react';
import { shallow } from 'enzyme';
import { ExpenseSummary } from "../../components/ExpensesSummary";
import expenses from '../fixtures/expenses';

test('should render ExpenseSummary header with no expenses correctly', () => {
  let wrapper = shallow(<ExpenseSummary expenses={[]}/>);
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseSummary header with no expenses correctly', () => {
  let wrapper = shallow(<ExpenseSummary expenses={expenses}/>);
  expect(wrapper).toMatchSnapshot();
});

test('should pluralize correctly', () => {
  let wrapper = shallow(<ExpenseSummary expenses={[expenses[0]]}/>);
  expect(wrapper).toMatchSnapshot();
});

test('should have correct total and output for all expenses', () => {
  let wrapper = shallow(<ExpenseSummary expenses={expenses}/>);
  expect(wrapper.find('h1').text()).toEqual('Viewing 3 expenses totalling $1,141.95');
});

test('should have correct total and output for one expense', () => {
  let wrapper = shallow(<ExpenseSummary expenses={[expenses[0]]}/>);
  expect(wrapper.find('h1').text()).toEqual('Viewing 1 expense totalling $1.95');
});

test('should have correct total for all expenses', () => {
  let wrapper = shallow(<ExpenseSummary expenses={[]}/>);
  expect(wrapper.find('h1').text()).toEqual('Viewing 0 expenses totalling $0.00');
});
