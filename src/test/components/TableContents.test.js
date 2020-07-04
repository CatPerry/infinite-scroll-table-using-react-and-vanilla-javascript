import React from 'react';
import { shallow } from 'enzyme';
import 'isomorphic-fetch';

import TableContents from './../../components/TableContents.jsx';

const spyScrollTo = jest.fn();

beforeEach(() => {
	// mock IntersectionObserver
	const observe = jest.fn();
	const unobserve = jest.fn();

	window.IntersectionObserver = jest.fn(() => ({
		observe,
		unobserve,
	}));

	Object.defineProperty(global.window, 'scrollTo', { value: spyScrollTo });
	Object.defineProperty(global.window, 'scrollY', { value: 1 });
	spyScrollTo.mockClear();
});

test('<TableContents/> exists', () => {
	const wrapper = shallow(<TableContents />);
	expect(wrapper.exists()).toBe(true);
});

test('if there are no people in state, table body will be empty', () => {
	const wrapper = shallow(<TableContents />);
	expect(wrapper.find('.TableRow')).toHaveLength(0);
});

// test('intersectionOberserver should be called on scroll', async () => {
// 	const wrapper = shallow(<TableContents />);
// 	wrapper.setState({ people: PeopleFixture });
// 	const scrollToSpy = jest.fn();
// 	global.scrollTo = scrollToSpy;

// 	expect(scrollToSpy).toHaveBeenCalled();
// });
