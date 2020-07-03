import React from 'react';
import ColumnResizer from './reactColumnResizerRefactor'; // 'react-column-resizer';

const TableHeader = ({ onClick }) => {
	return (
		<ul className='TableHeader'>
			<li className='SortByName' onClick={onClick}>
				Name
			</li>
			<ColumnResizer className='col-resizer' minWidth={0} />
			<li>Phone</li>
			<ColumnResizer className='col-resizer' minWidth={0} />
			<li>Email</li>
			<ColumnResizer className='col-resizer' minWidth={0} />
			<li>Age</li>
			<ColumnResizer className='col-resizer' minWidth={0} />
			<li>Image</li>
		</ul>
	);
};

export default TableHeader;
