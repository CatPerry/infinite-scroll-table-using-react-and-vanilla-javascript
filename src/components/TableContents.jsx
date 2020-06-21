import React, { Component } from "react";
import ColumnResizer from "react-column-resizer";
import ReactDOM from "react-dom";
import { orderBy } from "lodash";

import './TableContents.css';

export class TableContents extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: [],
      sortParams: {
        direction: 'asc'
      }
    };
  }
  currentScrollPosition = 0;

  componentDidMount() {
    this.lazyLoadRow();
  }

  /** Lazy loading */
  intersectionCallback = async (entries, observer) => {
    let data;

    try {
      let response = await fetch(`https://randomuser.me/api/?page=${this.currentScrollPosition + 1}&results=20`);
      data = await response.json();
    } catch (err) {
      console.log(err);
    }

    this.setState({ people: orderBy([...this.state.people, ...data.results], ['name.first'], [this.state.sortParams.direction]) });

    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // append the current row in visible area
        const divToAppendReactElement = document.createElement('div');
        divToAppendReactElement.id = `dom${this.currentScrollPosition}`;
        const newElement = ReactDOM.render(this.renderTableElements([...this.state.people]), divToAppendReactElement);
        const parentNode = entry.target.parentNode;
        const target = document.getElementById(`end-table-${this.currentScrollPosition}`);
        // append the element just before the sentinel
        parentNode.insertBefore(newElement, target);
        //unobserve the current threshold
        observer.unobserve(entry.target);
        // set the new intersection observers
        this.currentScrollPosition = this.currentScrollPosition + 1;
        target.id = `end-table-${this.currentScrollPosition}`;
        this.lazyLoadRow();
      }
    });
  };

  lazyLoadRow() {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0
    };

    const target = document.getElementById(`end-table-${this.currentScrollPosition}`);
    const observer = new IntersectionObserver(this.intersectionCallback, observerOptions);
    observer.observe(target);
  }

  /** Sorting */
  handleColumnHeaderClick = (sortKey) => {
    const {
      sortParams: { direction }
    } = this.state;

    // Toggle direction
    const sortDirection = direction === "desc" ? "asc" : "desc";
    // Sort people  
    let sortedPeople = orderBy([...this.state.people], [sortKey], [sortDirection]);
    //Update component state with new data
    this.setState({
      people: sortedPeople,
      sortParams: {
        direction: sortDirection
      }
    });
  };

  /** Renders */
  renderTableRows = (data = this.state.people) => {
    return [...data].map(person => {
      return (
        <tr key={person.login.sha1}>
          <td>{person.name.first}</td>
          <ColumnResizer className='col-resizer' minWidth={0} />
          <td>{person.phone}</td>
          <ColumnResizer className='col-resizer' minWidth={0} />
          <td>{person.email}</td>
          <ColumnResizer className='col-resizer' minWidth={0} />
          <td>{person.dob.age}</td>
          <ColumnResizer className='col-resizer' minWidth={0} />
          <td><img className="image" src={person.picture.thumbnail} alt="random user" /></td>
        </tr>
      );
    });
  };

  renderTableHeader = () => {
    return (
      <thead className='TableHeader'>
        <tr>
          <th className='SortByName' onClick={() => this.handleColumnHeaderClick('name.first')}>Name</th>
          <ColumnResizer className='col-resizer' minWidth={0} />
          <th>Phone</th>
          <ColumnResizer className='col-resizer' minWidth={0} />
          <th>Email</th>
          <ColumnResizer className='col-resizer' minWidth={0} />
          <th>Age</th>
          <ColumnResizer className='col-resizer' minWidth={0} />
          <th>Image</th>
        </tr>
      </thead>
    );
  };

  renderTableElements = (data = this.state.people) => {
    return (
      <>
        <table className={this.currentScrollPosition}>
          {data.length > 0 && this.currentScrollPosition < 1 ? this.renderTableHeader() : null}
          <tbody>
            {this.renderTableRows(data)}
          </tbody>
        </table>
      </>);
  };

  render() {
    return (
      <div className="container">
        <div id="end-table-0"></div>
      </div>
    );
  }
}

export default TableContents;
