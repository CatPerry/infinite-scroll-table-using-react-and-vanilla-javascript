import React from 'react';
import ColumnResizer from './reactColumnResizerRefactor'; // 'react-column-resizer';

const TableBody = ({ data }) => {
	return data.map((person) => {
		return (
			<div key={person.login.sha1} className='TableRow'>
				<span className='Name'>{person.name.first}</span>
				<ColumnResizer className='col-resizer col-resizer-name' minWidth={0} />
				<span className='Number'>{person.phone}</span>
				<ColumnResizer className='col-resizer col-resizer-number' minWidth={0} />
				<span className='Email'>{person.email}</span>
				<ColumnResizer className='col-resizer col-resizer-email' minWidth={0} />
				<span className='Age'>{person.dob.age}</span>
				<ColumnResizer className='col-resizer col-resizer-age' minWidth={0} />
				<span className='Image'>
					<img className='Image' src={person.picture.thumbnail} alt='random user' />
				</span>
			</div>
		);
	});
};

export default TableBody;
