import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'isomorphic-fetch';

import TableBody from './../../components/TableBody.jsx';
import PeopleFixture from './../fixtures';

Enzyme.configure({ adapter: new Adapter() });

test('should find the populated table', () => {
	const wrapper = shallow(<TableBody data={PeopleFixture} />);

	expect(wrapper.find('.TableRow')).toHaveLength(2);
});
