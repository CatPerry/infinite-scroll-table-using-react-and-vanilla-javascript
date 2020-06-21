import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from './../../components/App.jsx';

Enzyme.configure({ adapter: new Adapter() });

test('renders learn react link', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.exists()).toBe(true);
});
