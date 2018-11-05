import React, { Component } from 'react';

import { getStats } from '../../actions';

class TableOfStats extends Component {
  static initialAction({ dispatch }) {
    return [dispatch(getStats())];
  }

  componentDidMount() {
    const { getStats } = this.props();

    getStats();
  }
  render() {
    const { stats } = this.props;

    return (<div>{stats.map(el => <h1>{el.name}</h1>)}</div>);
  }
}

export default TableOfStats;
