import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from './../../components/App.jsx';
import TableContents from './../../components/TableContents';
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

test('<App> render TableContents container', () => {
	const wrapper = shallow(<App />);
	expect(wrapper.exists()).toBe(true);

	expect(wrapper.find(TableContents).dive().exists()).toBe(true);
});
