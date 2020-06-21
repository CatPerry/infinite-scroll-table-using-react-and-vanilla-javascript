import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import "isomorphic-fetch";

import TableContents from './../../components/TableContents.jsx';
import PeopleFixture from './../fixtures';

Enzyme.configure({ adapter: new Adapter() });

export const InView = ({ children }) => children({ inView: true, ref: null });

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
  wrapper.setState({ people: PeopleFixture });

  console.log(wrapper.debug());
});

