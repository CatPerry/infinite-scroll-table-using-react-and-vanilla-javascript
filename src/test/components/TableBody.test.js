import React from 'react';
import { shallow } from 'enzyme';
import 'isomorphic-fetch';

import TableBody from './../../components/TableBody.jsx';
import PeopleFixture from './../fixtures';

test('should find the populated table', () => {
	const wrapper = shallow(<TableBody data={PeopleFixture} />);

	expect(wrapper.find('.TableRow')).toHaveLength(2);
});
