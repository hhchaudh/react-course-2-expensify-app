import * as React from 'react';
import { shallow } from 'enzyme';
import LoadingPage from "../../components/LoadingPage";

test('should render LoadingPage header with no expenses correctly', () => {
  let wrapper = shallow(<LoadingPage />);
  expect(wrapper).toMatchSnapshot();
});
