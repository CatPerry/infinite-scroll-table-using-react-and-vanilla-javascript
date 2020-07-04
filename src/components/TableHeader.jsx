import React from 'react';
import ColumnResizer from './reactColumnResizerRefactor'; // 'react-column-resizer';

const TableHeader = ({ onClick, color }) => {
	return (
		<ul className='TableHeader' style={{ backgroundColor: color }} role='row'>
			<li
				className='SortByName'
				onClick={onClick}
				style={{ backgroundColor: color }}
				role='columnheader'
			>
				Name
			</li>
			<ColumnResizer className='col-resizer' minWidth={0} />
			<li style={{ backgroundColor: color }} role='columnheader'>
				Phone
			</li>
			<ColumnResizer className='col-resizer' minWidth={0} />
			<li style={{ backgroundColor: color }} role='columnheader'>
				Email
			</li>
			<ColumnResizer className='col-resizer' minWidth={0} />
			<li style={{ backgroundColor: color }} role='columnheader'>
				Age
			</li>
			<ColumnResizer className='col-resizer' minWidth={0} />
			<li style={{ backgroundColor: color }} role='columnheader'>
				Image
			</li>
		</ul>
	);
};

export default TableHeader;
