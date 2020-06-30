import React, { Component } from 'react';
import ColumnResizer from './reactColumnResizerRefactor'; // 'react-column-resizer';
import { orderBy } from 'lodash';

import './TableContents.css';

export class TableContents extends Component {
	constructor(props) {
		super(props);

		this.state = {
			people: [],
			sortParams: {
				direction: 'asc',
			},
		};
	}
	currentScrollPosition = 0;

	componentDidMount() {
		this.lazyLoadRows();
	}

	/** Lazy loading */
	intersectionCallback = async (entries, observer) => {
		let data;

		try {
			let response = await fetch(
				`https://randomuser.me/api/?page=${this.currentScrollPosition + 1}&results=10`,
			);
			data = await response.json();
		} catch (err) {
			console.log(err);
		}

		this.setState({
			people: orderBy(
				[...data.results, ...this.state.people],
				['name.first'],
				[this.state.sortParams.direction],
			),
		});

		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				const target = document.getElementById(`end-table-${this.currentScrollPosition}`);
				//unobserve the current threshold
				observer.unobserve(entry.target);
				// set the new intersection observers
				this.currentScrollPosition = this.currentScrollPosition + 1;
				target.id = `end-table-${this.currentScrollPosition}`;
				this.lazyLoadRows();
			}
		});
	};

	lazyLoadRows() {
		const observerOptions = {
			root: null,
			rootMargin: '0px',
			threshold: 1.0,
		};

		const target = document.getElementById(`end-table-${this.currentScrollPosition}`);
		const observer = new IntersectionObserver(this.intersectionCallback, observerOptions);
		observer.observe(target);
	}

	/** Sorting */
	handleColumnHeaderClick = (sortKey) => {
		const {
			sortParams: { direction },
		} = this.state;

		// Toggle direction
		const sortDirection = direction === 'desc' ? 'asc' : 'desc';
		// Sort people
		let sortedPeople = orderBy(this.state.people, [sortKey], [sortDirection]);
		//Update component state with new data
		this.setState({
			people: sortedPeople,
			sortParams: {
				direction: sortDirection,
			},
		});
	};

	/** Renders */
	renderTableHeader = () => {
		return (
			<ul className='TableHeader'>
				<li className='SortByName' onClick={() => this.handleColumnHeaderClick('name.first')}>
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

	renderTableRows = (data = this.state.people) => {
		return data.map((person) => {
			return (
				<div key={person.login.sha1} className='TableRow'>
					<span className='name'>{person.name.first}</span>
					<ColumnResizer className='col-resizer' minWidth={0} />
					<span className='number'>{person.phone}</span>
					<ColumnResizer className='col-resizer' minWidth={0} />
					<span className='email'>{person.email}</span>
					<ColumnResizer className='col-resizer' minWidth={0} />
					<span className='age'>{person.dob.age}</span>
					<ColumnResizer className='col-resizer' minWidth={0} />
					<span className='image'>
						<img className='image' src={person.picture.thumbnail} alt='random user' />
					</span>
				</div>
			);
		});
	};

	render() {
		return (
			<div className='container'>
				{this.renderTableHeader()}
				{this.renderTableRows()}
				<div id='end-table-0'></div>
			</div>
		);
	}
}

export default TableContents;
