import React from 'react';
import ColumnResizer from './reactColumnResizerRefactor'; // 'react-column-resizer';

const TableHeader = ({ onClick, color, sortOrder }) => {
	const htmlArrow = sortOrder === 'asc' ? <span>&#8593;</span> : <span>&#8595;</span>;

	return (
		<ul className='TableHeader' style={{ backgroundColor: color }} role='row'>
			<li
				className='SortByName'
				onClick={onClick}
				style={{ backgroundColor: color }}
				role='columnheader'
			>
				Name {htmlArrow}
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
