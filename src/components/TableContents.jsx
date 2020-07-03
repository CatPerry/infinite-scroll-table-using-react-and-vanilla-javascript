import React, { Component } from 'react';
import { orderBy } from 'lodash';

import TableBody from './TableBody';
import TableHeader from './TableHeader';
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

	render() {
		return (
			<div className='TableContainer'>
				<TableHeader onClick={() => this.handleColumnHeaderClick('name.first')} />
				<div className='TableBody'>
					<TableBody data={this.state.people} />
					<div id='end-table-0'></div>
				</div>
			</div>
		);
	}
}

export default TableContents;
