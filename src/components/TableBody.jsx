import React from 'react';
import ColumnResizer from './reactColumnResizerRefactor'; // 'react-column-resizer';

const TableBody = ({ data }) => {
	return data.map((person) => {
		return (
			<div key={person.login.sha1} className='TableRow' role='row'>
				<span className='Name' role='cell'>
					{person.name.first}
				</span>
				<ColumnResizer className='col-resizer' minWidth={0} />
				<span className='Number' role='cell'>
					{person.phone}
				</span>
				<ColumnResizer className='col-resizer' minWidth={0} />
				<span className='Email' role='cell'>
					{person.email}
				</span>
				<ColumnResizer className='col-resizer' minWidth={0} />
				<span className='Age' role='cell'>
					{person.dob.age}
				</span>
				<ColumnResizer className='col-resizer' minWidth={0} />
				<span role='cell'>
					<img src={person.picture.thumbnail} alt='random user' />
				</span>
			</div>
		);
	});
};

export default TableBody;
