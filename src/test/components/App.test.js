import React from 'react';
import { shallow } from 'enzyme';

import App from './../../components/App.jsx';
import TableContents from './../../components/TableContents';

beforeEach(() => {
	// mock IntersectionObserver, which isn't avail in Jest
	const observe = jest.fn();
	const unobserve = jest.fn();

	window.IntersectionObserver = jest.fn(() => ({
		observe,
		unobserve,
	}));
});

test('<App> render TableContents container', () => {
	const wrapper = shallow(<App />);
	expect(wrapper.exists()).toBe(true);

	expect(wrapper.find(TableContents).dive().exists()).toBe(true);
});
