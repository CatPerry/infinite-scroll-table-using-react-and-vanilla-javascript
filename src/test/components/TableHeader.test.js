import React from 'react';
import { shallow } from 'enzyme';
import 'isomorphic-fetch';

import TableHeader from './../../components/TableHeader.jsx';

test('on mount rows are sorted by first name ascending', () => {
	const wrapper = shallow(<TableHeader />);

	expect(wrapper.find('.Name').first().contains('Naja'));
});

test('should toggle sorting, by name, on table header click', () => {
	const wrapper = shallow(<TableHeader />);

	wrapper.setProps({ onClick: wrapper.find('li.SortByName').simulate('click') });

	expect(wrapper.find('.Name').first().contains('Vicki'));
});
