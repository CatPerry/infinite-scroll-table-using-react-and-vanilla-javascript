import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import "isomorphic-fetch";

import TableContents from './../../components/TableContents.jsx';
import Fixtures from './../fixtures';

Enzyme.configure({ adapter: new Adapter() });

beforeEach(() => {
  // mock IntersectionObserver, which isn't avail in Jest
  const observe = jest.fn();
  const unobserve = jest.fn();

  window.IntersectionObserver = jest.fn(() => ({
    observe,
    unobserve,
  }));
});

test('<TableContents/> exists', () => {
  const wrapper = shallow(<TableContents />);
  expect(wrapper.exists()).toBe(true);
});

it('should find the populated table', () => {
  const wrapper = mount(<TableContents />);
  wrapper.setState({ people: Fixtures.people });

  // console.log(wrapper.debug());
});

